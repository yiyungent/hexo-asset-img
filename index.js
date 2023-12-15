var hexoLog = require('hexo-log');
var log = typeof hexoLog["default"] === 'function' ? hexoLog["default"]({
  debug: false,
  silent: false
}) : hexoLog({
  debug: false,
  silent: false
});
const htmlparser2 = require("htmlparser2");

/**
 * md文件返回 true
 * @param {*} data 
 */
function ignore(data) {
    // TODO: 好奇怪，试了一下, md返回true, 但却需要忽略 取反!
    var source = data.source;
    var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    return ['md',].indexOf(ext) > -1;
}

function random(length) { // generate random string
    res = ''
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < length; i++) {
        let index = Math.round(Math.random() * 25)
        res += letters[index];
    }
    return res
}

function transform(img, fileName) {
    img = htmlparser2.parseDocument(img, "text/html").children[0]
    src = img.attribs.src
    title = img.attribs.title ? img.attribs.title : ""
    alt = img.attribs.alt ? img.attribs.alt : ""
    style = img.attribs.style ? img.attribs.style : ""
    imgFile = src.match(RegExp(".*?" + fileName + "/(.+?)$"))[1]
    className = random(12)
    imgTag = "{% asset_img " + className + " " + imgFile + " \'\"" + title + "\"\"" + alt + "\"\' %}"
    styleTag = "<style>." + className + "{" + style + "}</style>"
    return styleTag + imgTag
}

function action(data) {
    var reverseSource = data.source.split("").reverse().join("");
    var fileName = reverseSource.substring(3, reverseSource.indexOf("/")).split("").reverse().join("");

    // ![example](postname/example.jpg)  -->  {% asset_img example.jpg example %}
    var regExp = RegExp("!\\[(.*?)\\]\\(<?" + fileName + '/(.+?)>?\\)', "g");
    var imgExp = RegExp("(<img.*?src=\"" + fileName + "/.+?\".*?>)", "g")
    // hexo g
    data.content = data.content.replace(regExp, "{% asset_img $2 $1 %}", "g");
    data.content = data.content.replace(imgExp, (match, img) => {return transform(img, fileName)}, "g")
    // log.info(`hexo-asset-img: filename: ${fileName}, title: ${data.title.trim()}`);
    
    return data;
}

hexo.extend.filter.register('before_post_render',(data)=>{
    if(!ignore(data)){
        action(data)
    }
}, 0);
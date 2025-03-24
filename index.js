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
function dont_ignore(data) {
    var source = data.source;
    var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    // 这里写 不 想被忽略的后缀名
    return ['.md',].indexOf(ext) > -1;
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

// https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function escapeRegex(string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
}

function action(data) {
    var reverseSource = data.source.split("").reverse().join("");
    var fileName = reverseSource.substring(3, reverseSource.indexOf("/")).split("").reverse().join("");
    // 处理文件名中的特殊字符
    fileName = escapeRegex(fileName)

    /**
     * 之前的处理方式是 ![example](postname/example.jpg)  -->  {% asset_img example.jpg example %}
     * 这样部署后图片是左对齐的，并且不显示图片的slug
     * 
     * 新版的hexo直接支持 ![example](example.jpg) 来加载 postname/example.jpg
     * 因此，调整为 ![example](postname/example.jpg)  -->  ![example](example.jpg)
     */

    var regExp = RegExp("!\\[(.*?)\\]\\(<?" + fileName + '/(.+?)>?\\)', "g");
    var imgExp = RegExp("(<img.*?src=\"" + fileName + "/.+?\".*?>)", "g")

    data.content = data.content.replace(regExp, "![$1]($2)", "g");

    data.content = data.content.replace(imgExp, (match, img) => {return transform(img, fileName)}, "g")
    
    return data;
}

hexo.extend.filter.register('before_post_render',(data)=>{
    if(dont_ignore(data)){
        action(data)
    }
}, 0);
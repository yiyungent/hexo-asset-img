﻿<p align="center">
<!-- <img src="docs/.vuepress/public/images/logo.png" alt="hexo-asset-img"> -->
</p>
<h1 align="center">hexo-asset-img</h1>

English | [中文](README_zh.md)

> :cake: Hexo local image plugin: Convert the relative path of the image to asset_img

[![repo size](https://img.shields.io/github/repo-size/yiyungent/hexo-asset-img.svg?style=flat)]()
[![LICENSE](https://img.shields.io/github/license/yiyungent/hexo-asset-img.svg?style=flat)](https://github.com/yiyungent/hexo-asset-img/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/hexo-asset-img.svg)](https://www.npmjs.com/package/hexo-asset-img)
[![NPM downloads](https://img.shields.io/npm/dt/hexo-asset-img)](https://www.npmjs.com/package/hexo-asset-img)
[![QQ Group](https://img.shields.io/badge/QQ%20Group-894031109-deepgreen)](https://jq.qq.com/?_wv=1027&k=q5R82fYN)

## Intro

Use this plug-in to realize the preview of Markdown editors such as Typora and Hexo release preview, both of which can display pictures normally

## Usage

```bash
npm install hexo-asset-img --save
```

> Latest Dev

```bash
npm install git://github.com/yiyungent/hexo-asset-img.git#main
```

```
hexo-typora
├── apppicker.jpg
├── logo.png
└── rules.jpg
hexo-typora.md
```

Make sure `post_asset_folder: true` in your `_config.yml`.

`hexo-typora.md`: Just use `![logo](hexo-typora/logo.png)` to insert `logo.png`.


### < hexo v7

```bash
npm install hexo-asset-img@1.1.0 --save
```

`_config.yml`

```yml
post_asset_folder: true
relative_link: false
```

### >= hexo v7

```bash
npm install hexo-asset-img@1.2.0 --save
```

`_config.yml`

```yml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
relative_link: false
```


### Use with Typora

- [Hexo + Typora + Hexo plug-in development to solve the inconsistency of image paths | yiyun's Blog](https://moeci.com/posts/hexo-typora)


## test

- [yiyungent/hexo-asset-img-test: Created with CodeSandbox](https://github.com/yiyungent/hexo-asset-img-test)
- https://codesandbox.io/p/github/yiyungent/hexo-asset-img-test


## Origin

[hexo-asset-image](https://github.com/xcodebuild/hexo-asset-image) No longer valid, probably starting from `Hexo 5`, and this repository has been archived 

> Q: 为什么使用本地图片 而不是网络图片 (图床) ?            
> A:
> 1. 第三方图床不稳定, 容易丢失图片    
> 2. 自行搭建图床, 随着上传错误图片, 删除文章而没有删除关联图片 次数的增多, 未引用图片越来越多, 图床中也越来越多的无用冗余图片, 还不方便删除, 也容易误删除     
> 3. 本地图片 与 文章在一个文件夹, 易打包, 在无网络或网络较差时也能预览   
> 4. 本地图片 放在与 文章文件名同名文件夹内 方便管理   
> 
> `补充:`  
> 很多 `markdown编辑器` 提供粘贴图片到本地图片文件夹, 这些图片文件名通常不易读, 较长, 如果每次删除文章中的图片引用, 都手动去删除相应图片, 以及删除文章, 手动删除关联图片文件夹, 比较麻烦, 但不删除, 未引用图片又会越来越多, 因此 `删除未引用图片工具` 应运而生!      
> - [yiyungent/clear-image-action: 🔧 Image detection. | 图片检测 | 清理未引用图片 | 删除未引用图片 | 检查引用的图片是否有效 | GitHub Actions](https://github.com/yiyungent/clear-image-action)
> - [yiyungent/coo: 🧰 .NET 自用CLI, 工具集](https://github.com/yiyungent/coo)


## Related Projects

- [yiyungent/clear-image-action: 🔧 Image detection. | 图片检测 | 清理未引用图片 | 删除未引用图片 | 检查引用的图片是否有效 | GitHub Actions](https://github.com/yiyungent/clear-image-action)
- [xcodebuild/hexo-asset-image](https://github.com/xcodebuild/hexo-asset-image)
- [cocowool/hexo-image-link](https://github.com/cocowool/hexo-image-link)
- [cnzsb/hexo-asset](https://github.com/cnzsb/hexo-asset)

## Donate

hexo-asset-img is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.

We accept donations through these channels:

- <a href="https://afdian.net/@yiyun" target="_blank">爱发电</a>

## Author

**hexo-asset-img** © [yiyun](https://github.com/yiyungent), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by yiyun with help from contributors ([list](https://github.com/yiyungent/hexo-asset-img/contributors)).

> GitHub [@yiyungent](https://github.com/yiyungent) Gitee [@yiyungent](https://gitee.com/yiyungent)



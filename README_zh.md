<p align="center">
<!-- <img src="docs/.vuepress/public/images/logo.png" alt="hexo-asset-img"> -->
</p>
<h1 align="center">hexo-asset-img</h1>

[English](README.md) | 中文

> :cake: Hexo 本地图片插件: 转换 图片相对路径 为 asset_img

[![repo size](https://img.shields.io/github/repo-size/yiyungent/hexo-asset-img.svg?style=flat)]()
[![LICENSE](https://img.shields.io/github/license/yiyungent/hexo-asset-img.svg?style=flat)](https://github.com/yiyungent/hexo-asset-img/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/hexo-asset-img.svg)](https://www.npmjs.com/package/hexo-asset-img)
[![NPM downloads](https://img.shields.io/npm/dt/hexo-asset-img)](https://www.npmjs.com/package/hexo-asset-img)
[![QQ Group](https://img.shields.io/badge/QQ%20Group-894031109-deepgreen)](https://jq.qq.com/?_wv=1027&k=q5R82fYN)

## 介绍

使用本插件 即可实现 Typora 等 Markdown 编辑器预览 与 Hexo 发布预览 均能正常显示图片

## 使用

```bash
npm install hexo-asset-img --save
```

> 最新开发版

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

### 与 Typora 配合使用

- [Hexo + Typora + 开发Hexo插件 解决图片路径不一致 | yiyun's Blog](https://moeci.com/posts/hexo-typora)

## 起源

[hexo-asset-image](https://github.com/xcodebuild/hexo-asset-image) 已无效, 大概是从 `Hexo 5` 开始，并且此仓库已 archived 

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


## 相关项目

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



# Simple HTML Gallery generator

# Waiting for updates.

<p align="center">
    <img src="https://camo.githubusercontent.com/55d889142beb6083d109241e30335aeb23a6aadb/68747470733a2f2f3737373939392e61752e72752f7a6d6e762f6164617572752d636c692f686f776974776f726b735f736368656d652e706e67">
</p>

## How it works

It converts "file structure" with images (jpeg | jpg | png | svg | gif) to simple HTML page.

<img src="https://i.imgur.com/ypa67lU.gif" />


## How to use

1. Install global package:
```
npm i -g zmnv-views
```

2. Open folder with images in terminal/cmd and run:
```
zmnv-views build
```  
It creates `/build` folder with simple html.

3. You can use express server to serve `/build` folder:
```
zmnv-views serve
```

## Related Project

* [adauru-cli](https://github.com/zmnv/adauru-cli)

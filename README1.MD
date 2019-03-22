<p>
    <img src="https://777999.au.ru/zmnv/zmnv-views.svg">
</p>

# zmnv-views

Генератор простой галереи на html.



## How it works

It converts "file structure" with images (jpeg | jpg | png | svg | gif) to simple HTML page.

<img src="https://i.imgur.com/ypa67lU.gif" />


## Install

Install global package:

```
npm i -g zmnv-views
```

or with administrator rights, for example:

```
sudo npm i -g zmnv-views
```

## How to use

Open folder with images in terminal/cmd and run:

```
zmnv-views build
```  

It creates `/build` folder in your current directory with simple html gallery inside.

Just copy files inside `/build` to any static server or start server by yourself with:

```
zmnv-views serve
```

## Related Project

* [adauru-cli](https://github.com/zmnv/adauru-cli)

# ページ概要
<img width="1439" alt="スクリーンショット 2022-04-01 17 09 04" src="https://user-images.githubusercontent.com/80142183/161222977-92240704-9618-4537-9060-70c3f0ac9f5e.png">
<img width="391" alt="スクリーンショット 2022-04-01 17 10 23" src="https://user-images.githubusercontent.com/80142183/161222983-d3019d01-c6f7-43ad-aeea-b5f2b4f1ee15.png">




リンク先：https://ttanslateproject-98752.firebaseapp.com/

# 使用言語
* Nuxt.js 2.15.8  
* Vue.js  2.6.14
* FireBase  9.16.0
* Sass


# アーキテクチャ
　　
  
![DjangoReact](https://user-images.githubusercontent.com/80142183/161189075-116b06de-9a0b-4755-98ac-f1fdfb1b8222.jpg)
  
# デプロイ
* フロントエンド　→ Vercel
* バックエンド　→ pythonanywhere
* cors → heroku (axiosでfetchする際にリクエストエラーが起きるため必要)




# 機能面
## Sassによるページデザイン
<img width="894" alt="スクリーンショット 2022-04-01 14 24 47" src="https://user-images.githubusercontent.com/80142183/161200484-2b96ce03-37ab-4f0b-8b49-91e170cca958.png">

・主にアニメーションをつけるのに役立つ。



## react-scrollを使用したスクロール機能
<img width="599" alt="スクリーンショット 2022-04-01 14 26 00" src="https://user-images.githubusercontent.com/80142183/161200498-723a52d9-dbff-446d-9741-0d6f3b9f57fe.png">

・ページをリッチにするための工夫
## django rest_frameworkによるバックエンド管理・REST APIサービスの利用（PRACTICE部分）
<img width="702" alt="スクリーンショット 2022-04-01 14 32 59" src="https://user-images.githubusercontent.com/80142183/161201287-61d5f53e-7f56-475e-a1c8-c05711c87aaf.png">
<img width="1306" alt="スクリーンショット 2022-04-01 14 34 06" src="https://user-images.githubusercontent.com/80142183/161201292-2712d354-a9cd-44cb-88ad-36e777cf1919.png">
・画像内”https://glacial-castle-98127.herokuapp.com/”
　　部分はリクエストエラー回避のためのプロキシサーバー


# 今後
デザイン・機能含めアップデートを予定。今後開発や経験が増えていくにつれ、当ページもアップデートしていく。










# Nuxt-ts-App

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

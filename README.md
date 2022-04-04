# ページ概要
<img width="1439" alt="スクリーンショット 2022-04-01 17 09 04" src="https://user-images.githubusercontent.com/80142183/161222977-92240704-9618-4537-9060-70c3f0ac9f5e.png">
<img width="391" alt="スクリーンショット 2022-04-01 17 10 23" src="https://user-images.githubusercontent.com/80142183/161222983-d3019d01-c6f7-43ad-aeea-b5f2b4f1ee15.png">




リンク先：https://ttanslateproject-98752.firebaseapp.com/

# 使用言語
* Nuxt.js 2.15.8  
* Vue.js  2.6.14
* FireBase  9.16.0
* GoogleAppScript
* Sass


# アーキテクチャ
　　
  <img width="968" alt="スクリーンショット 2022-04-01 17 23 06" src="https://user-images.githubusercontent.com/80142183/161225037-b560599f-35a6-4099-9031-06c1ce554abc.png">

  
# デプロイ
* FireBaseCLIによるデプロイ




# 機能面
## 翻訳機能
<img width="1440" alt="スクリーンショット 2022-04-01 17 31 30" src="https://user-images.githubusercontent.com/80142183/161226668-467a2f2a-de73-4a4e-a121-2c6f01764597.png">
<img width="1440" alt="スクリーンショット 2022-04-01 17 30 56" src="https://user-images.githubusercontent.com/80142183/161226679-df7c5f82-c14b-421c-975d-5ca8fd593e35.png">
<img width="585" alt="スクリーンショット 2022-04-01 17 32 35" src="https://user-images.githubusercontent.com/80142183/161226882-31393edd-fd2f-4536-ab92-6485d419315b.png">

* 日本語→英語・英語→日本語に翻訳をする。
* 翻訳機能はGoogleAppScriptで作成。GASに搭載されている関数を使用してAPIでデータの送受信を行なっており、Json形式で返却されます。







## 保存機能
<img width="1440" alt="スクリーンショット 2022-04-04 9 58 48" src="https://user-images.githubusercontent.com/80142183/161458957-c07adea3-81ad-49c2-a925-920a9814bbe6.png">
<img width="1440" alt="スクリーンショット 2022-04-04 9 59 24" src="https://user-images.githubusercontent.com/80142183/161459176-0e292468-a9fd-4990-a875-5bdc429fc958.png">
<img width="1440" alt="スクリーンショット 2022-04-04 10 21 31" src="https://user-images.githubusercontent.com/80142183/161459181-d145d0e0-9994-45c4-afec-d085eb28c75c.png">
* 保存ボタンを押すことで保存ができる。
* ログインしている場合のみで、ログアウトしている場合保存ボタン・保存ページは出現しない。


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

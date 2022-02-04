<template>
    

<header class="head text-gray-600 body-font bg-green-400 ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nuxt-link to="/" class="flex order-first lg:order-none  title-font font-medium items-center text-gray-900  lg:justify-left  md:mb-0">
      
      <span class="title text-sm text-black">翻訳くん</span>
    </nuxt-link>
    <div class="botanarea lg:w-2/5 flex lg:justify-end lg:ml-0">

      <div class="username inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-xs md:mt-0" v-if="this.username">
           {{this.username}}
    　　      </div>
      <button class="loginbotan inline-flex items-center text-white font-bold bg-green-500 hover:bg-green-400 border-b-4 border-green-700 hover:border-green-500 focus:outline-none  rounded text-xs md:mt-0 ml-0" @click="Login" v-if="!this.isLogin">ログイン
    　　</button>
      <button class="logoutbotan inline-flex items-center text-white font-bold bg-green-500 hover:bg-green-400 border-b-4 border-green-700 hover:border-green-500 focus:outline-none  rounded text-xs md:mt-0" @click="logout" v-if="this.isLogin">ログアウト
    　　</button>
      <nav class="translink flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto ml-3 " v-if="this.isLogin">
      <nuxt-link to="/save" class="hover:text-gray-900">My translation</nuxt-link>
      </nav>

    </div>

    
     
  </div>
</header>

</template>

<!-- Header部分 -->
<!-- tailwind記法 -->
<!-- tailblockのテンプレート使用 -->





<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'

interface HeaderInfo{ //data()の型定義
  isLogin:boolean,
  username: string | number

}


export default ({
 
   data():HeaderInfo{
        return{
            username:"",　//表示するユーザーの名前
            isLogin:false　//ログインの状態管理
            
        }
    },
   props: ['user'],
    mounted: function():void {
    let self:any =this　//data()のthisの型推論を飛ばす
    firebase.auth().onAuthStateChanged((user) => {　//mounted時にログインしているユーザーの確認
      // console.log(user);
      if (user) {　
        self.isLogin = true;　//ログインしていたら
        self.username = user.displayName　　//名前を同じにする
        
      } else {
        self.isLogin = false;　//ログインしていなかったら
        self.username = null;　//nullになる
      };
      
      
    });
    
  },
   

    methods:{
       Login():void {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());　//googleProvideでの処理テンプレ
        
          },
     logout() :void{
      let self:any = this
      firebase.auth().signOut(); //サインアウトのテンプレ
      self.username=""　//ログアウトしたusernameを””にする
      
    }
     
    }
})
</script>
<style lang="scss">
  
</style>
<template>
    

<header class="head text-gray-600 body-font bg-green-400 ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nuxt-link to="/" class="flex order-first lg:order-none  title-font font-medium items-center text-gray-900  lg:justify-left  md:mb-0">
      
      <span class="title text-sm text-white">翻訳くん</span>
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
      <nuxt-link to="/hozon" class="hover:text-gray-900">My translation</nuxt-link>
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

interface HeaderInfo{
  isLogin:boolean,
  username: string | number

}

export default ({
 
    data():HeaderInfo{
        return{
            username:"",
            isLogin:false
            
        }
    },
   props: ['user'],
    mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.username = user.displayName
      } else {
        this.isLogin = false;
        this.username = null;
      };
    });
  },
   

    methods: {
        Login() {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        
},
     logout: function() {
      firebase.auth().signOut();
      this.username=""
    }

    }
})
</script>
<style lang="scss">
  
</style>
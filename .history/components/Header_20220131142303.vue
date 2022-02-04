<template>
    

<header class="text-gray-600 body-font bg-green-400">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <nuxt-link to="/hozon" class="mr-5 hover:text-gray-900">保存したデータ</nuxt-link>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">翻訳くん</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <div class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" v-if="this.username">
       {{this.username}}
    　　</div>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" @click="Login" v-if="!this.isLogin">ログイン
    　　</button>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" @click="logout" v-if="this.isLogin">ログアウト
    　　</button>
    
    </div>
     
  </div>
</header>

</template>







<script lang="js">
import Vue from 'vue'
import firebase from '@/plugins/firebase'

export default ({
    components:{},
    data(){
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
<template>
    

<header class="head text-gray-600 body-font bg-green-400 ">
  <div class=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center  md:mb-0">
      
      <span class="ml-3 text-sm text-white">翻訳くん</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <div class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-xs mt-4 md:mt-0" v-if="this.username">
           {{this.username}}
    　　      </div>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" @click="Login" v-if="!this.isLogin">ログイン
    　　</button>
      <button class="inline-flex items-center text-white font-bold bg-green-500 hover:bg-green-400 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 focus:outline-none  rounded text-xs mt-4 md:mt-0" @click="logout" v-if="this.isLogin">ログアウト
    　　</button>
    
    </div>
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <nuxt-link to="/hozon" class="mr-5 hover:text-gray-900">保存したデータ</nuxt-link>
    </nav>
     
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
<style lang="scss">
  
</style>
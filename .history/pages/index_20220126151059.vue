<template>
　
     <div>
     <form>
       <input type="text" v-model="message">
       <button>翻訳</button>
     </form>
     
     <div>{{trans.text}}</div>
     </div>
</template>

<script lang="ts">
import Vue from 'vue'
const axios = require('axios')
const name = encodeURI('私は太郎です')//日本語はエンコードURIしないとurlで使えない
export default {
    data(){
      return{
        message: ''
      }
    },








  
  asyncData({params}:any){
    return axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${name}&source=ja&target=en`)
    .then((res:any)=>{
      console.log(res.data)
      return { trans: res.data}
      
    })
  }
}
</script>

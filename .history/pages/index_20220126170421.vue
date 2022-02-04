<template>
　
     <div>
     <form>
       <input type="text" v-model="message">
       <button @click="check">翻訳</button>
     </form>
     
     
     
     </div>
</template>

<script lang="ts">
import Vue from 'vue'
const axios = require('axios')
const kara:any = ""
console.log(kara)
const name = encodeURI(``)//日本語はエンコードURIしないとurlで使えない

export default {
    data(){
      return{
        message: "",
        items:[]
      }
    },








  methods:{
// 　　　　　request:function(e:any){
//           let kara:any = encodeURI(`${this.message}`)
//           console.log(kara)
//           axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${kara}&source=ja&target=en`)
//           .then(function(res:any){
//               return {items: res.data}
//           })
// },
  check: function(this: {test: Function}){
    let kara:any = encodeURI(this.message)
    console.log(kara)
  }

    
  }
}
</script>

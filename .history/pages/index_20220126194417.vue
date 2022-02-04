<template>
　
     <div>
     <form>
       <input type="text" v-model="message">
       <button type="button" @click="Enchange">翻訳</button>
     </form>
     <div>翻訳結果：{{items}}</div>
     
     
     </div>
</template>

<script lang="ts">
import Vue from 'vue'
const axios = require('axios')
const kara:any = ""
console.log(kara)
const name = encodeURI(``)//日本語はエンコードURIしないとurlで使えない

interface TransInfo{
  mesaage: number | string
  items: number | string
}
export default {
    data():TransInfo{
      return{
        message:"",
        items:"",
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
  Enchange: function(this: {message: any}){
    let kara:any = encodeURI(this.message)
    console.log(kara)
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${kara}&source=ja&target=en`)
         .then(function(res:any){
           console.log(res.data)
           this.items = res.data
             
           })
  }

    
  }
}
</script>

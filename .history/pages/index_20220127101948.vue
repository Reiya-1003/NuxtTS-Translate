<template>
　　　<div>
     <div>
     <form>英語訳
       <input type="text" v-model="japan">
       <button type="button" @click="Enchange">翻訳</button>
     </form>
     <div>翻訳結果：{{items.text}}</div>
     
     
     </div>
     <div>
     <form>日本語訳
       <input type="text" v-model="japan">
       <button type="button" @click="Enchange">翻訳</button>
     </form>
     <div>翻訳結果：{{items.text}}</div>
     
     
     </div>
     </div>
</template>

<script lang="ts">
import Vue from 'vue'
const axios = require('axios')
const kara:any = ""
console.log(kara)
const name = encodeURI(``)//日本語はエンコードURIしないとurlで使えない

interface TransInfo{
  japan: number | string,
  items: number | string | object

}

interface MethodType {
  someMethod(): void
  
}
export default {
    data():TransInfo{
      return{
        japan:"",
        items:{},
      }
    },








  methods:{
// 　　　　
  Enchange: function(this:any){
    let kara:any = encodeURI(this.japan)
    console.log(kara)
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${kara}&source=ja&target=en`)
         .then((res:any)=>{
           console.log(res.data)
           
           this.items = res.data
             
           })
  },
   Jachange: function(this:any){
    let kara:any = encodeURI(this.message)
    console.log(kara)
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${kara}&source=ja&target=en`)
         .then((res:any)=>{
           console.log(res.data)
           
           this.items = res.data
             
           })
  },

    
  }
}
</script>

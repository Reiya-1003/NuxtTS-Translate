<template>
　　　<div>
     <div>
     <form>英語訳
       <textarea v-model="japan"></textarea>
       <button type="button" @click="Enchange">翻訳</button>
     </form>
     <div>翻訳結果：{{english.text}}</div>
     
     
     </div>
     <div>
     <form>日本語訳
       <textarea v-model="english">{{english.text}}</textarea>
       <button type="button" @click="Jachange"></button>
     </form>
     <div>翻訳結果：{{japan.text}}</div>
     
     
     </div>
     </div>
</template>

<script lang="ts">
import Vue from 'vue'
const axios = require('axios')


interface TransInfo{
  japan: number | string,
  english: number | string,
  Enitems: number | string | object,
  Jaitems: number | string | object,

}

interface MethodType {
  someMethod(): void
  
}
export default {
    data():TransInfo{
      return{
        japan:"",
        english:"",
        Enitems:{},
        Jaitems:{},
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
           
           this.english = res.data
             
           })
  },
   Jachange: function(this:any){
    
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${this.english}&source=en&target=ja`)
         .then((res:any)=>{
           console.log(res.data)
           
           this.japan = res.data
             
           })
  },

    
  }
}
</script>

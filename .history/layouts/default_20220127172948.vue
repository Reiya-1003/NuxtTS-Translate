<template>

　　　<div>
        <Header/>
        <main>
     　　　　<div>
     　　　　　　<form>英語
      　　　　　　　　 <textarea v-model="japan"></textarea>
       　　　　　　　　<button type="button" @click="Enchange">日本語に翻訳</button>
     　　　　　　</form>
    　　　　　 <div>翻訳結果チェック：{{Enitems.text}}</div>
     　　　 </div>
    　　　　 <div>
     　　　　　　<form>日本語
       　　　　　　　　<textarea v-model="english"></textarea>
       　　　　　　　　<button type="button" @click="Jachange">英語に翻訳</button>
     　　　　　　</form>
     　　　　　　　<div>翻訳結果チェック：{{Jaitems.text}}</div>
     　　　　</div>
     <div class="res">レスポンシブ</div>

       </main>


     </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
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
 


  components: {
    Header,
  
  },

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
           this.Enitems = res.data
           this.english = res.data.text
             
           })
  },
   Jachange: function(this:any){
    
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${this.english}&source=en&target=ja`)
         .then((res:any)=>{
           console.log(res.data)
           this.Jaitems = res.data
           this.japan = res.data.text
             
           })
  },

    
  }
}
</script>
<style lang="scss">
  
</style>
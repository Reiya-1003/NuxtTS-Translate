<template>

　　<div>
        
        <main>
     　　　　<div>
     　　　　　　<form>日本語を入力
      　　　　　　　　 <textarea v-model="list.japan"></textarea>
       　　　　　　　　<button type="button" @click="Enchange">英語に翻訳</button>
     　　　　　　</form>
    　　　　　 <div>翻訳結果チェック：{{Enitems}}</div>
     　　　 </div>
    　　　　 <div>
     　　　　　　<form>英語を入力
       　　　　　　　　<textarea v-model="list.english"></textarea>
       　　　　　　　　<button type="button" @click="Jachange">日本語に翻訳</button>
     　　　　　　</form>
     　　　　　　　<div>翻訳結果チェック：{{Jaitems}}</div>
     　　　　 </div>
            <div class="res">レスポンシブ</div>

       </main>
      

     </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
const axios = require('axios')


interface TransInfo{
  list: object, 
  japan?: number | string,
  english?: number | string,
  Enitems: number | string | object,
  Jaitems: number | string | object,

}

interface MethodType {
    
  someMethod(): void
  
}
export default {
 


  

    data():TransInfo{
      return{
        list:{
          japan:"",
          english:"",
        },
       
        Enitems:"", //ただ表示とかに使うかも
        Jaitems:"",
      }
    },








  methods:{
// 　　　　
  Enchange: function(this:any){
    let kara:any = encodeURI(this.list.japan)
    console.log(kara)
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${kara}&source=ja&target=en`)
         .then((res:any)=>{
           console.log(res.data)
           this.Enitems = res.data.text
           this.list.english = res.data.text
             
           });
  
  },
   Jachange: function(this:any){
    const db = firebase.firestore()
    let dbLists = db.collection("list")   

    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${this.list.english}&source=en&target=ja`)
         .then((res:any)=>{
           console.log(res.data)
           this.Jaitems = res.data.text
           this.list.japan = res.data.text
             dbLists.add({
               japan: this.list.japan,
               english: this.list.english
                 })
               .then(ref =>{
                  console.log('Add ID: ', ref.id)
                   })
                         });
   
    
  },

    
  }
}
</script>
<style lang="scss">
  
</style>
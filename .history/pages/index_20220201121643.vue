<template>

　　<div>
        
        <main>
     　　　　<div>
     　　　　　　<form class="areaja" @submit.prevent="Enchange">
      　　　　　　　　 <input type="text" v-model="list.japan" placeholder="日本語を入力" class="areaja__textja">
       　　　　　　　  <p><mdiContentSaveMove/></p>
     　　　　　　</form>
    　　　　　
     　　　 </div>
      <div class="res">レスポンシブ</div>
    　　　　 <div>
     　　　　　　<form class="areaen" @submit.prevent="Jachange">
       　　　　　　　　<input type="text" v-model="list.english" placeholder="English" class="areaen__texten">
       　　　　　　　　
     　　　　　　</form>
     　　　　　　　
     　　　　 </div>
           

       </main>
      

     </div>
</template>

<script lang="ts">
import { mdiContentSaveMove } from '@mdi/js';
import Vue from 'vue'
import firebase from '@/plugins/firebase'
const axios = require('axios')
const db = firebase.firestore()



interface TransInfo{
  list: object, 
  japan?: number | string,
  english?: number | string,
  Enitems: number | string | object,
  Jaitems: number | string | object,
  username?: number | string | undefined | null,
  isLogin: any
  iconContentSaveMove :any

}

interface MethodType {
    
  someMethod(): void
  
}
export default {
 


  

  data():TransInfo{
      return{
        list:{
          japan:"",　//データのやり取りに使用
          english:"",
        },
       
        Enitems:"", //ただ表示とかに使うかも
        Jaitems:"",

        username:"",
        isLogin:false,
        iconContentSaveMove : mdiContentSaveMove,
      }
    },



 
   created: function() {
    let self:any =this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.displayName)
        self.username =user.displayName

      } else {
        
      }
    });
  },




  methods:{
　　　　
  Enchange: function(this:any){
    let kara:any = encodeURI(this.list.japan)　//urlに使えるように変換
    let dbLists = db.collection("users").doc(`${this.username}`).collection("list")   //コレクションの名前
    console.log(kara)
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${kara}&source=ja&target=en`)
         .then((res:any)=>{
           console.log(res.data)
           this.Enitems = res.data.text　//apiでとれた結果を格納
           this.list.english = res.data.text
           dbLists.add({　　//上の.thenに入れないと時間差になる
               english: this.list.english,
               japan: this.list.japan,　//firestoreに保存する
               
               //firestoreの名前: Nuxt側のデータの名前
                 })
               .then(ref =>{
                  console.log('Add ID: ', ref.id)
                   })
           });
           
  
  },
   Jachange: function(this:any){
    let dbLists = db.collection("users").doc(`${this.username}`).collection("list")   //コレクションの名前

    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${this.list.english}&source=en&target=ja`)
         .then((res:any)=>{
           console.log(res.data)
           this.Jaitems = res.data.text　//apiでとれた結果を格納
           this.list.japan = res.data.text
             dbLists.add({
               japan: this.list.japan,　//firestoreに保存する
               english: this.list.english
               //firestoreの名前: Nuxt側のデータの名前
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
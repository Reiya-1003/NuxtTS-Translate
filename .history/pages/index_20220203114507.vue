<template>

　　<div>
        
        <main v-if="this.kirikae === true" class="mainview">
     　　　　<div>
     　　　　　　<div class="areaja">
       　　　　　　　　<form @submit.prevent="Enchange">
      　　　　　　　　<input type="text" v-model="list.japan" placeholder="日本語を入力" class="areaja__textja">
                    </form>
                    <div class="iconarea">
       　　　　　　　  　<button class="save" @click="Save"></button>
                      <button class="toggle" @click="Change"></button>
                     </div>
     　　　　　　</div>
     　　　 </div>
    　　　　 <div>
     　　　　　　<form class="areaen" @submit.prevent="Jachange">
       　　　　　　　　<input type="text" v-model="list.english" placeholder="English" class="areaen__texten">
     　　　　　　</form>
     　　　　 </div>
       
       </main>
       <main v-if="this.kirikae === false" class="mainview">
    　　　　 <div>
     　　　　　　<div class="areaen">
                    <form @submit.prevent="Jachange">
       　　　　　　　　    <input type="text" v-model="list.english" placeholder="English" class="areaen__texten">
                    </form>
       　　　　　　　<div class="iconarea">
                      <button class="save" @click="Save"></button>
                      <button class="toggle" @click="Change"></button>
                   </div>
     　　　　　　</div>
     　　　　 </div>
            <div>
     　　　　　　<form class="areaja" @submit.prevent="Enchange">
      　　　　　　　　<input type="text" v-model="list.japan" placeholder="日本語を入力" class="areaja__textja">
                    <div class="iconarea">
       　　　　　　　  　
                     </div>
     　　　　　　</form>
     　　　 </div>
       </main>
      

     </div>
</template>

<script lang="ts">
import { mdiContentSaveMove , mdiArrowUpDownBold } from '@mdi/js';
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
  kirikae: any,
  iconContentSaveMove :any,
  iconArrowUpDownBold:any,

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
        kirikae:true,
        iconContentSaveMove : mdiContentSaveMove,
        iconArrowUpDownBold:mdiArrowUpDownBold  
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

    console.log(kara)
    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${kara}&source=ja&target=en`)
         .then((res:any)=>{
           console.log(res.data)
           this.Enitems = res.data.text　//apiでとれた結果を格納
           this.list.english = res.data.text
           
           });
           
  
  },
   Jachange: function(this:any){
  

    axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${this.list.english}&source=en&target=ja`)
         .then((res:any)=>{
           console.log(res.data)
           this.Jaitems = res.data.text　//apiでとれた結果を格納
           this.list.japan = res.data.text
            
                         });
   
    
  },

  Save: function(this:any){
    let dbLists = db.collection("users").doc(`${this.username}`).collection("list")   //コレクションの名前
    dbLists.add({
               japan: this.list.japan,　//firestoreに保存する
               english: this.list.english
               //firestoreの名前: Nuxt側のデータの名前
                 })
               .then(ref =>{
                  console.log('Add ID: ', ref.id)
                   });
  },

  Change: function(this:any){
    this.kirikae = !this.kirikae
    console.log(this.kirikae)
  }

    
  }
}
</script>
<style lang="scss">
  
</style>
<template>
  <div v-if="byouga">{{index}}:「{{ source.japan }}」 ⇨ 「{{source.english}}」<button @click="deleteItem">.×</button></div>
</template>

<!-- 表示される保存したデータの子コンポーネント -->

<script lang="ts">
import firebase from '@/plugins/firebase'
const db = firebase.firestore()

interface ItemInfo{ //data()の型定義
  username: string | number
  byouga:boolean

}

  export default {
    name: 'item-component',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {japan:"",english:"",id:""}
        type: Object, //子コンポーネントはpropsがある
        default () {
          return {}
        }
      }
    },
    data():ItemInfo{
        return{
       username:"",
       byouga:true
        }
    },
  created():void{   
  let self:any =this //thisの型推論飛ばす　ログインデータ取得
  const db = firebase.firestore()
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.username =user.displayName
        // console.log(self.username)
        
      } else {
        self.username = ""
      
      }
});

},


    methods:{
        deleteItem: function():void{   //削除処理
            const db = firebase.firestore()
       　　　let dbLists = db.collection("users").doc(`${this.username}`).collection("list") //コレクション指定
            let result =window.confirm("Delete？？？")　　//okを押すとtrueがはいる　キャンセルを押すと falseがはいる
　　　　　 if( result ) {
            //console.log('OKがクリックされました');
        　　　dbLists.doc(`${this.source.id}`).delete()　//doc("FBの自動設定データidの指定")
             this.byouga = false　//オブジェクトの変更があった際にNuxt側が認識するためにtrue→falseにかえる
            //  console.log(this.source) //これで各オブジェクトのidはとれる 
        } else {
        　　　　　　// console.log('キャンセルがクリックされました');
        }}
             
    },
    
  }
</script>
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
      source: { // here is: {uid: 'unique_1', text: 'abc'}
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
  let self:any =this
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
        
        deleteItem: function():void{  
            const db = firebase.firestore()
       　　　 let dbLists = db.collection("users").doc(`${this.username}`).collection("list") 
             dbLists.doc(`${this.source.id}`).delete()
             this.byouga = false
             console.log(this.source) //これで各オブジェクトのidはとれる 

            
            
        }
             
    },
    
  }
</script>
<template>
<main>
  <h1>保存した内容が見れる Page</h1>
  </main>
</template>
<script lang="ts">
import firebase from '@/plugins/firebase'
export default {
data(){
  return{
  items:[],
  username:"",
  }
},

created(){
  let self:any =this
  const db = firebase.firestore()
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.displayName)
        self.username =user.displayName
        console.log(self.username)
        let dbLists = db.collection("users").doc(`${self.username}`).collection("list") 
      } else {
        self.username = ""
      
      }
});
console.log(this.username)

let dbLists = db.collection("users").doc().collection("list") 
},


}
</script>
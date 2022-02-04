<template>
    <div>
    <div v-for="(item,key) in items" :key="key">
   
       <div>
         {{item.english}}
         {{item.japan}}</div>
     
    
   </div>
   </div>
</template>

<script lang="ts">
import firebase from '@/plugins/firebase'
export default {
    name:'item',
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
        dbLists.get().then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
            self.items.push(doc.data())
          })
          console.log(self.items)
          return self.items
        })
      } else {
        self.username = ""
      
      }
});

},
}
</script>
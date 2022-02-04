<template>
<main>
  <div>
    <virtual-list style="height: 360px; overflow-y: auto;" // make list scrollable
      :data-key="'uid'"
      :data-sources="items"
      :data-component="itemComponent"
    />
  </div>
     
   
  </main>
</template>
<script lang="ts">
import firebase from '@/plugins/firebase'
import Item from '~/components/item.vue'


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
<style lang="scss">
  
</style>

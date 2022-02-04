<template>
<main>
  <h1>保存した内容が見れる Page</h1>
   <div>
    <div class="wrapper">
      <virtual-list
        class="list"
        style="height: 360px; overflow-y: auto;"
        :data-key="'id'"
        :data-sources="items"
        :data-component="item"
       
      />
    </div>
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
  item:Item
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
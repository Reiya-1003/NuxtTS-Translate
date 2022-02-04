<template>
<main>
  <h1>保存した内容が見れる Page</h1>
   <div>
    <div class="wrapper">
     <RecycleScroller
    class="scroller"
    :items="items"
    :item-size="32"
    key-field=""
    v-slot="{ item }"
  >
    <div class="user">
      {{ item.japan }}
    </div>
  </RecycleScroller>
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
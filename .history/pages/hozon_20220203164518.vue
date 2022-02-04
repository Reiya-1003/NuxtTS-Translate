<template>
<main class="transpage">
  <h1 class="hozontitle">My Translation</h1>
  <div class="listarea">
    
    <virtual-list class="listarea__sorce"
      :data-key="'japan'"
      :data-sources="items"
      :data-component="itemComponent"
    />
  </div>
     
   
  </main>
</template>
<script lang="ts">
import firebase from '@/plugins/firebase'
import Item from '~/components/item.vue'
import VirtualList from 'vue-virtual-scroll-list'


export default {
  name: 'root',
data(){
  return{
  items:[],
  username:"",
  itemComponent: Item,
  
  
  }
},

components:{
  'virtual-list': VirtualList 
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
            self.items.$set({...doc.data(),id: doc.id});
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

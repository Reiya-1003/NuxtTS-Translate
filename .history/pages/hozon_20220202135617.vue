<template>
<main>
  <div>
    <virtual-list style="height: 360px; overflow-y: auto;" 
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
import VirtualList from 'vue-virtual-scroll-list'


export default {
  name: 'root',
data(){
  return{
  items:[],
  username:"",
  itemComponent: Item,
  zikken: [{uid: 'unique_1', text: 'abc'}, {uid: 'unique_2', text: 'xyz'}, {uid: 'unique_3', text: 'xyz'}, {uid: 'unique_4', text: 'xyz'}, {uid: 'unique_5', text: 'xyz'}, {uid: 'unique_6', text: 'xyz'}, {uid: 'unique_7', text: 'xyz'}, {uid: 'unique_8', text: 'xyz'}, {uid: 'unique_9', text: 'xyz'}, {uid: 'unique_10', text: 'xyz'}, {uid: 'unique_11', text: 'xyz'}, {uid: 'unique_12', text: 'xyz'}, {uid: 'unique_13', text: 'xyz'}, {uid: 'unique_14', text: 'xyz'}, {uid: 'unique_15', text: 'xyz'}, {uid: 'unique_16', text: 'xyz'}, {uid: 'unique_17', text: 'xyz'}, {uid: 'unique_18', text: 'xyz'}, {uid: 'unique_19', text: 'xyz'}, {uid: 'unique_20', text: 'xyz'}, {uid: 'unique_21', text: 'xyz'}, {uid: 'unique_22', text: 'xyz'}, ]
  
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

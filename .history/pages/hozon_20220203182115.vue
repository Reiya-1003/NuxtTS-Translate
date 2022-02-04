<template>
<main class="transpage">
  <h1 class="hozontitle">My Translation</h1>
  <div class="listarea">
    
    <virtual-list class="listarea__sorce"
      
    />
    
  </div>
     
   
  </main>
</template>
<script lang="js">
import firebase from '@/plugins/firebase'
import Item from '~/components/item.vue'
import VirtualList from 'vue-virtual-scroll-list'


const db = firebase.firestore()


export default {
  name: 'root',
data(){
  return{
  items:[], //datasourcesはこれぽい
  username:"",
  itemComponent: Item,
  
  
  }
},

    
components:{
  'virtual-list': VirtualList 
},

created(){
  let self =this
  const db = firebase.firestore()
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.displayName)
        self.username =user.displayName
        console.log(self.username)
        let dbLists = db.collection("users").doc(`${self.username}`).collection("list") 
        dbLists.get().then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
            self.items.push({...doc.data(),id: doc.id});
          })
          console.log(self.items)
          return self.items
        })
      } else {
        self.username = ""
      
      }
});

},
methods:{
  oya(){
    let dbLists = db.collection("users").doc(`${this.username}`).collection("list") 
               
              
            　
            //  dbLists.doc(this.items.id).delete()
             console.log('hozon.vue') //this.itemsは変わってない？ 
  }
}


}
</script>
<style lang="scss">
  
</style>
<!-- :data-key="'japan'"
      :data-sources="items"
      :data-component="itemComponent"
      @oyadelete="oya" -->
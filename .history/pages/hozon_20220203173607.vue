<template>
<main class="transpage">
  <h1 class="hozontitle">My Translation</h1>
  <div class="listarea">
    
    <virtual-list class="listarea__sorce"
      :data-key="'japan'"
      :data-sources="items"
      :data-component="itemComponent"
      @child-items="childData($event,items)"
    />
  </div>
     
   
  </main>
</template>
<script lang="js">
import firebase from '@/plugins/firebase'
import Item from '~/components/item.vue'
import VirtualList from 'vue-virtual-scroll-list'


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
  'virtual-list': VirtualList,
  Item
},

created(){
  let self:any =this
  const db = firebase.firestore()
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.displayName)
        self.username =user.displayName
        console.log(self.username)
        console.log(self.items)
        
      } else {
        self.username = ""
      
      }
});

},
methods:{
  childDate(items:[]){
    this.items = items
  }
}


}
</script>
<style lang="scss">
  
</style>

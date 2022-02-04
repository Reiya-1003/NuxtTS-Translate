<template>
  <div >{{index}}:「{{ source.japan }}」 ⇨ 「{{source.english}}」<button @click="deleteItem">.×</button></div>
</template>

<script>
import firebase from '@/plugins/firebase'
const db = firebase.firestore()
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
    data(){
        return{
       username:"",
        }
    },
  created(){
  let self =this
  const db = firebase.firestore()
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.displayName)
        self.username =user.displayName
        console.log(self.username)
        
      } else {
        self.username = ""
      
      }
});

},


    methods: {
        
         deleteItem: function(){
        let dbLists = db.collection("users").doc(`${self.username}`).collection("list") 
             dbLists.doc(this.items[this.index].id).delete()
             console.log(this.source.id) //this.itemsは変わってない？  
            console.log('item.vue')
            
        }
             
    },
    
  }
</script>
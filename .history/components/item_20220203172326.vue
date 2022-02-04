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
        type: Object,
        default () {
          return {}
        }
      }
    },
    data(){
        return{
       items:[],
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

    methods: {
        
         deleteItem: function(){
             let dbLists = db.collection("users").doc(`${this.username}`).collection("list") 
               //コレクションの名前
            //  alert('削除しますか？')
            　
             dbLists.doc(this.items[this.index].id).delete()
             console.log(this.items) //this.itemsは変わってない？  
            
        }
             
    },
    
  }
</script>
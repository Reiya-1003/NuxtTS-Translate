<template>
  <div >{{index}}:「{{ source.japan }}」 ⇨ 「{{source.english}}」<button @click="deleteItem()">.×</button></div>
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
    created: function() {
    let self =this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.displayName)
        self.username =user.displayName

      } else {
        
      }
    });
  },

    methods: {
        
         deleteItem(deleteId) {
             let dbLists = db.collection("users").doc(`${this.username}`).collection("list")   //コレクションの名前
              dbLists.doc().delete()
              console.log('削除')
    }
    },
  }
</script>
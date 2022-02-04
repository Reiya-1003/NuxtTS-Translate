<template>
  <div >{{index}}:「{{ source.japan }}」 ⇨ 「{{source.english}}」<button>.×</button></div>
</template>

<script>
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

    methods: {
        
         deleteItem(deleteId) {
             let dbLists = db.collection("users").doc(`${this.username}`).collection("list")   //コレクションの名前
           dbLists.doc(deleteId).delete()
    }
    },
  }
</script>
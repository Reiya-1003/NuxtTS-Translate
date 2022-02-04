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
       items:[], 
       username:"",
        }
    },



    methods: {
        
         deleteItem: function(){
            //  let dbLists = db.collection("users").doc(`${this.username}`).collection("list") 
            //    //コレクションの名前
            // //  alert('削除しますか？')
            // 　
            //  dbLists.doc(this.items[this.index].id).delete()
            //  console.log(this.items) //this.itemsは変わってない？  
            console.log('item.vue')
            this.$emit("oyadelete")
        }
             
    },
    
  }
</script>
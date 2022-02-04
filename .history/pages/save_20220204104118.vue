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


const db = firebase.firestore()

interface SaveInfo{ //data()の型定義
  username: string | number,
  items:string | number | never[],
  itemComponent:any //コンポーネントの型定義はとばす
}

export default {
  name: 'root',
data():SaveInfo{
  return{
  items:[], //datasources
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
      if (user) {　//ログインしていたら
        self.username =user.displayName
        // console.log(self.username)

        let dbLists = db.collection("users").doc(`${self.username}`).collection("list") 
        　dbLists.get().then((querySnapshot)=>{ //保存したデータの取得　
          　　querySnapshot.forEach((doc)=>{　//データの数分回るから重そうではある
           　 self.items.push({...doc.data(),id: doc.id});　//data()のitems = [{japan:"",english:"",id"doc.id"}]とする
         　　　 })
         　　　　 // console.log(self.items)
         　　　　 return self.items
       　　　 })
      } else {　//ログインしていなかったら
        self.username = ""
      
      }
});

},

}
</script>
<style lang="scss">
  
</style>

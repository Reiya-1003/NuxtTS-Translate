<template>
    <div class="item">
        <h1><b>Item {{ index }}</b></h1>
        {{data.text }}
    </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
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
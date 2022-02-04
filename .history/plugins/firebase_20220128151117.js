import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyAeB6Z0hxj-eTnFrCUF7ih2JxQsfnAWKOo",
    authDomain: "ttanslateproject-98752.firebaseapp.com",
    databaseURL: "",
    projectId: "ttanslateproject-98752",
    storageBucket: "ttanslateproject-98752.appspot.com",
    messagingSenderId: "701979590145",
    appId: "1:701979590145:web:00861821b1d9369bc94a00"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  
  const db = firebase.firestore()
  const settings = {}
  db.settings(settings)
  
  export default firebase
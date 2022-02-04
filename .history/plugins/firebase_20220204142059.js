import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

if (!firebase.apps.length) {
    firebase.initializeApp({
    apiKey: `${process.env.API_KEY}`,
    authDomain: "ttanslateproject-98752.firebaseapp.com",
    projectId: "ttanslateproject-98752",
    storageBucket: "ttanslateproject-98752.appspot.com",
    messagingSenderId: "701979590145",
    appId: "1:701979590145:web:00861821b1d9369bc94a00"
})
}

  
  export default firebase
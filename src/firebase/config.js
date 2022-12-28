import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAj98I7ydvNb7qKVW3wHxYfsnF4tVUs25A",
    authDomain: "sample-39dc5.firebaseapp.com",
    projectId: "sample-39dc5",
    storageBucket: "sample-39dc5.appspot.com",
    messagingSenderId: "453993242962",
    appId: "1:453993242962:web:829aab20b405b3a0b45a8b",
    measurementId: "G-224H296DQN"
  };

  export default firebase.initializeApp(firebaseConfig)
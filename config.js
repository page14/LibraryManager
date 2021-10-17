// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyCrkMsymF8kX36j7abUkl6zRQHZFH6eum0",
  authDomain: "librarymanager-fb866.firebaseapp.com",
  databaseUrl : 'https://librarymanager-fb866-default-rtdb.firebaseio.com/',
  projectId: "librarymanager-fb866",
  storageBucket: "librarymanager-fb866.appspot.com",
  messagingSenderId: "771723284425",
  appId: "1:771723284425:web:cf33647b4c5771dc4f6218"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCfVVQtRU1yEvQ9RgsPwGiEhTBPZb1WI1U",
    authDomain: "list-project-18cd5.firebaseapp.com",
    databaseURL: "https://list-project-18cd5.firebaseio.com",
    projectId: "list-project-18cd5",
    storageBucket: "list-project-18cd5.appspot.com",
    messagingSenderId: "860744323320",
    appId: "1:860744323320:web:7dc193f08017fd87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
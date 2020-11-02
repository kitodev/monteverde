import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAikI7uf_UYasoWJgerkx5sQPD8F_nZn0U",
    authDomain: "e-clone-cbab6.firebaseapp.com",
    databaseURL: "https://e-clone-cbab6.firebaseio.com",
    projectId: "e-clone-cbab6",
    storageBucket: "e-clone-cbab6.appspot.com",
    messagingSenderId: "1001936885306",
    appId: "1:1001936885306:web:54bff785b1a0e200f80703",
    measurementId: "G-CRVWKBTJNN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig );


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
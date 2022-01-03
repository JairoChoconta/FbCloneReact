import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVCeR4xJjjERhc3pPrHyZPXJMytBEAwNc",
    authDomain: "facebook-clone-bcc00.firebaseapp.com",
    projectId: "facebook-clone-bcc00",
    storageBucket: "facebook-clone-bcc00.appspot.com",
    appId: "1:831483450976:web:490f72fb019c5e0fadd505",
    measurementId: "G-JRHN8REKTG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
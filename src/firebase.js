import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCViqU1phqvDpm5x-fW7oVoGUh-4leZvVw",
    authDomain: "devcircleapp.firebaseapp.com",
    databaseURL: "https://devcircleapp-default-rtdb.firebaseio.com",
    projectId: "devcircleapp",
    storageBucket: "devcircleapp.appspot.com",
    messagingSenderId: "618352765880",
    appId: "1:618352765880:web:e2bf3d3584d2753a59bd4d"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
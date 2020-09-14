import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmOi5ickb1OhsrRe2q7Zb4XagignqAazQ",
  authDomain: "messenger-clone-97fb5.firebaseapp.com",
  databaseURL: "https://messenger-clone-97fb5.firebaseio.com",
  projectId: "messenger-clone-97fb5",
  storageBucket: "messenger-clone-97fb5.appspot.com",
  messagingSenderId: "669512432902",
  appId: "1:669512432902:web:817a1b038071966738f287",
});

const db = firebaseApp.firestore();

export default db;

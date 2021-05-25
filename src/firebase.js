import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCpM2a-YnQqIY07ubJWT4VEEF8psVIJJoU",
    authDomain: "show-streaming-react.firebaseapp.com",
    projectId: "show-streaming-react",
    storageBucket: "show-streaming-react.appspot.com",
    messagingSenderId: "377569825705",
    appId: "1:377569825705:web:adeea1e14b786e25296ab8",
    measurementId: "G-B770P94098"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
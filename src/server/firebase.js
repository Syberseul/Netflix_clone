import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAItyNNdnmKHowXgxanxMeOU7QENWOkwzg",
  authDomain: "netflix-clone-yiteng.firebaseapp.com",
  projectId: "netflix-clone-yiteng",
  storageBucket: "netflix-clone-yiteng.appspot.com",
  messagingSenderId: "396588917292",
  appId: "1:396588917292:web:1bda6b3156d5e5655d2789",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;

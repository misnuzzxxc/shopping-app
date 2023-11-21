import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxP887Eayf2sD5TVNB52g8w2Um3m-Eih8",
  authDomain: "fake-shop-app-c070e.firebaseapp.com",
  projectId: "fake-shop-app-c070e",
  storageBucket: "fake-shop-app-c070e.appspot.com",
  messagingSenderId: "28283371125",
  appId: "1:28283371125:web:dc8d1e7088e7c3d453823c",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();
const storage = firebase.storage();

export { app, auth, firestore, database, storage };

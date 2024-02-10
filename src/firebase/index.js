import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage"
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC6dGq3WRklhoroUTY1UcXMtubcQjknfOU",
  authDomain: "vstore-bb580.firebaseapp.com",
  databaseURL: "https://vstore-bb580-default-rtdb.firebaseio.com",
  projectId: "vstore-bb580",
  storageBucket: "vstore-bb580.appspot.com",
  messagingSenderId: "707856283312",
  appId: "1:707856283312:web:35a64aaa577cdc6daa6d75"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// link the app to the storage
const storage = getStorage(app, "gs://vstore-bb580.appspot.com")
const db = getFirestore(app)

export {auth, db, storage}
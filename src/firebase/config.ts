import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf9JsUd7uSedFT9dOb63J5q1ZubmGx9uU",
  authDomain: "thagaval-23229.firebaseapp.com",
  databaseURL:
    "https://thagaval-23229-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thagaval-23229",
  storageBucket: "thagaval-23229.appspot.com",
  messagingSenderId: "456919165595",
  appId: "1:456919165595:web:5b3303c267eba8a741f43e",
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

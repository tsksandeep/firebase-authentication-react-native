import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZcO7i_YGU34iktBMlZYRnwUTlJHCjKTo",
  authDomain: "thagaval-dbd6f.firebaseapp.com",
  projectId: "thagaval-dbd6f",
  storageBucket: "thagaval-dbd6f.appspot.com",
  messagingSenderId: "670329321676",
  appId: "1:670329321676:web:a2e5423d7c2a1e7602ea69",
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

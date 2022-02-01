import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "<your_app_api_key>",
  authDomain: "<your_app_auth_domain>",
  databaseURL: "<your_app_db_url>",
  projectId: "<your_app_project_id>",
  storageBucket: "<your_app_storage_bucket>",
  messagingSenderId: "<your_app_messaging_sender_id>",
  appId: "<your_app_id>",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getDatabase(FirebaseApp);

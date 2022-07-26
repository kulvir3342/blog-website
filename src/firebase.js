import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSvuUBIfgLsQHSX8MT7dLo2GHVqGw7jXU",
  authDomain: "blog-project-c5616.firebaseapp.com",
  projectId: "blog-project-c5616",
  storageBucket: "blog-project-c5616.appspot.com",
  messagingSenderId: "438139729413",
  appId: "1:438139729413:web:3ad7aac1fa60034892ce6c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


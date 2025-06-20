import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtToYK0Eaczt_OKWVICZVXbd-WSFh9LJI",
  authDomain: "reactchat-d786a.firebaseapp.com",
  projectId: "reactchat-d786a",
  storageBucket: "reactchat-d786a.firebasestorage.app",
  messagingSenderId: "504452787512",
  appId: "1:504452787512:web:31bd88fbad12e25cf325cd"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAniD3HN29H93G5MiC-tcbMwELFmkiY9hA",
  authDomain: "app-ejercicio-clase.firebaseapp.com",
  databaseURL: "https://app-ejercicio-clase-default-rtdb.firebaseio.com",
  projectId: "app-ejercicio-clase",
  storageBucket: "app-ejercicio-clase.appspot.com",
  messagingSenderId: "910621348192",
  appId: "1:910621348192:web:1cba2d5b5ed335d78bce05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
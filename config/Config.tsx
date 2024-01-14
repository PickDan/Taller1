import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
//import {getAuth} from 'firebase/auth'

//CORREGIR EL WARNING
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyCB9S79qDdB8sKPhzS-55DYk9uEO81Mwdg",
  authDomain: "prueba-vg.firebaseapp.com",
  databaseURL: "https://prueba-vg-default-rtdb.firebaseio.com",
  projectId: "prueba-vg",
  storageBucket: "prueba-vg.appspot.com",
  messagingSenderId: "944325477424",
  appId: "1:944325477424:web:937d7353189be9605ad9f5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
//export const auth=getAuth(app)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
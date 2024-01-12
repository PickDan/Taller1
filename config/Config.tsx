import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCaufu4QoA8eS4pee9rVYkvU_oSmL_mCcg",
  authDomain: "proyectof-e5382.firebaseapp.com",
  projectId: "proyectof-e5382",
  storageBucket: "proyectof-e5382.appspot.com",
  messagingSenderId: "419915887314",
  appId: "1:419915887314:web:80131428a9a40cdc50f30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0LD-oiJ9YWXE5mdt3h1uhvzD2HYGUeFM",
  authDomain: "todo-app-492b6.firebaseapp.com",
  projectId: "todo-app-492b6",
  storageBucket: "todo-app-492b6.appspot.com",
  messagingSenderId: "940675241740",
  appId: "1:940675241740:web:238027b45f07a6230d9b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

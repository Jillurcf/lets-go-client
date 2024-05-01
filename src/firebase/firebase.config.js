// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";cldr
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
  // apiKey: "AIzaSyB8Qkf48VE12a3qajyWWEUXxNhjUddbhJo",
  // authDomain: "assignment12-473b3.firebaseapp.com",
  // projectId: "assignment12-473b3",
  // storageBucket: "assignment12-473b3.appspot.com",
  // messagingSenderId: "349142019101",
  // appId: "1:349142019101:web:23367e5c00c13e31b5aaf4"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
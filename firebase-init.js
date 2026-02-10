// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDRap-H03u8lJFbkk1ANKR7X7w0YQY2g0",
  authDomain: "online-bookstore-aba86.firebaseapp.com",
  projectId: "online-bookstore-aba86",
  storageBucket: "online-bookstore-aba86.firebasestorage.app",
  messagingSenderId: "106138375230",
  appId: "1:106138375230:web:b4ba92331c61ca4d4eed6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
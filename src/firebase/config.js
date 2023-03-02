// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: "AIzaSyCgW4UUKUspJMhAQW-lxEKRomFXgHvjK94",
  authDomain: "reactfirebase-af4fc.firebaseapp.com",
  projectId: "reactfirebase-af4fc",
  storageBucket: "reactfirebase-af4fc.appspot.com",
  messagingSenderId: "1084993245178",
  appId: "1:1084993245178:web:4ec504b7395df8309a1e43",
  measurementId: "G-72E5BHWZV7"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
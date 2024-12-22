import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_1U9zgP4xqqqRBM5UTLjDhk4Jfy4-YdY",
  authDomain: "my-house-marketplace-app-ba36d.firebaseapp.com",
  projectId: "my-house-marketplace-app-ba36d",
  storageBucket: "my-house-marketplace-app-ba36d.firebasestorage.app",
  messagingSenderId: "94186395332",
  appId: "1:94186395332:web:a3d9b396824d5ad0bc5b91"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
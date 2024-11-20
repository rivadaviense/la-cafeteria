import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de usar getFirestore, no getFireStore

const firebaseConfig = {
  apiKey: "AIzaSyAYQJN2UI-lj6cZLpmgGVo-U5Acb6rOVOU",
  authDomain: "lacafeteria-c4a7e.firebaseapp.com",
  projectId: "lacafeteria-c4a7e",
  storageBucket: "lacafeteria-c4a7e.firebasestorage.app",
  messagingSenderId: "806422003600",
  appId: "1:806422003600:web:ed74a300a238a93045fd15",
  measurementId: "G-CRB5C2P1PH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Usa getFirestore en lugar de getFireStore

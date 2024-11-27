import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBivW8mLGWrldpM9w9wwgI1Guu9bmPWKyc",
  authDomain: "fir-i-3a9d9.firebaseapp.com",
  projectId: "fir-i-3a9d9",
  storageBucket: "fir-i-3a9d9.firebasestorage.app",
  messagingSenderId: "79065867602",
  appId: "1:79065867602:web:d96f064113a6be6369868b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

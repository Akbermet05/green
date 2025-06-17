import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB36PPlFHv4qg5uKP9tDRCmtlMVjd0CaO0",
  authDomain: "shop-46d8d.firebaseapp.com",
  projectId: "shop-46d8d",
  storageBucket: "shop-46d8d.firebasestorage.app",
  messagingSenderId: "721187486062",
  appId: "1:721187486062:web:7c4e70e60b59a0487aa97f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
    
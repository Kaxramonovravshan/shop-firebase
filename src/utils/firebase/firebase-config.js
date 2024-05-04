import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjekJ95KgBew5DpOzkdg9OHfVyR8sLdzk",
  authDomain: "alif-shop-42cec.firebaseapp.com",
  projectId: "alif-shop-42cec",
  storageBucket: "alif-shop-42cec.appspot.com",
  messagingSenderId: "900209889423",
  appId: "1:900209889423:web:c85a221cd27ba7e83aa0fa",
  measurementId: "G-BVKE8JPFXJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

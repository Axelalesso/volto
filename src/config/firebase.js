import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5pl9i3GW4qumKsA-gYrgf3c7iPgsf0mQ",
  authDomain: "volto-bcf36.firebaseapp.com",
  projectId: "volto-bcf36",
  storageBucket: "volto-bcf36.firebasestorage.app",
  messagingSenderId: "431211809024",
  appId: "1:431211809024:web:08bc9efdb8c02996a14be5",
  measurementId: "G-S2BM67N64X"
};


const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database
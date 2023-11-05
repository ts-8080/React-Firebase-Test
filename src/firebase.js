import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJF66rDTn7jBBznRfVrs5oVU_ThpaoLEU",
  authDomain: "fir-react-test-f11f0.firebaseapp.com",
  projectId: "fir-react-test-f11f0",
  storageBucket: "fir-react-test-f11f0.appspot.com",
  messagingSenderId: "1031769231181",
  appId: "1:1031769231181:web:19420a9aa427648fbb3104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
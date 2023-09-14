// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9KoQfOBABFEJkqPZfLlCyrHe0NUE2PYE",
  authDomain: "snaptrackr-55953.firebaseapp.com",
  databaseURL: "https://snaptrackr-55953-default-rtdb.firebaseio.com",
  projectId: "snaptrackr-55953",
  storageBucket: "snaptrackr-55953.appspot.com",
  messagingSenderId: "1020323011346",
  appId: "1:1020323011346:web:a735fd6e3d448ee08371cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
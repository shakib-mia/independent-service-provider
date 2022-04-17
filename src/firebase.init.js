// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBDKMyetTqykTAYJEadjow6DXS_vCqD1rk",
      authDomain: "samads-edu-care.firebaseapp.com",
      projectId: "samads-edu-care",
      storageBucket: "samads-edu-care.appspot.com",
      messagingSenderId: "944090663333",
      appId: "1:944090663333:web:8f924a04f7dab44411c04c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
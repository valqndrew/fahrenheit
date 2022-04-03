// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0etDy5Ecb3WoK3I0yFrr5LWZl9ngSEUc",
  authDomain: "fahrenheit-68ce4.firebaseapp.com",
  projectId: "fahrenheit-68ce4",
  storageBucket: "fahrenheit-68ce4.appspot.com",
  messagingSenderId: "435194638045",
  appId: "1:435194638045:web:6f734876d388620aeb7534",
  measurementId: "G-YWFME5S8V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq_mducVUECKcFOOU40fT3-fvEOMzbz3Y",
  authDomain: "test-web-c62dd.firebaseapp.com",
  projectId: "test-web-c62dd",
  storageBucket: "test-web-c62dd.appspot.com",
  messagingSenderId: "892046121251",
  appId: "1:892046121251:web:d4ff544e1d942c909a5496",
  measurementId: "G-54LM99R9B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Add the public key generated from the console here.
getToken(messaging, {vapidKey: "BNktbg4cLTgXfxS-U-7MBacrOSvgqA3AczaWYhgGRu4XY-gPiRtJNa410BQRc55IUxjX_TZujTgw0P3-9YaKSLc"});

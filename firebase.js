// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe2xVtPLXsoGAPNdZIq65jruXlJIR1CWY",
  authDomain: "ddabookings-a771d.firebaseapp.com",
  projectId: "ddabookings-a771d",
  storageBucket: "ddabookings-a771d.appspot.com",
  messagingSenderId: "639807726506",
  appId: "1:639807726506:web:de657c4920eac1295401d3",
  measurementId: "G-8VPFXCKQLV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// }else{
//     app = firebase.app()
// }
const auth = firebase.auth();
const db = firebase.firestore();

export default { 
  auth,
  db,
  firebase
 };
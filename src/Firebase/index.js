import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyALebUjVpjQRLM72gRVSn9d-NeBh5D1xgo",
    authDomain: "capstone-f41a7.firebaseapp.com",
    databaseURL: "https://capstone-f41a7.firebaseio.com",
    projectId: "capstone-f41a7",
    storageBucket: "capstone-f41a7.appspot.com",
    messagingSenderId: "546213154920",
    appId: "1:546213154920:web:60b130b7403a3782acabdd",
    measurementId: "G-LK49HMCN0Z"
  };

  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage= firebase.storage();


  export {storage , firebase as default};
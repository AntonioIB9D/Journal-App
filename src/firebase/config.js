// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwud8PkJGziUiAQU_3RKIBD36c8dQkz_w',
  authDomain: 'react-journey-cc64e.firebaseapp.com',
  projectId: 'react-journey-cc64e',
  storageBucket: 'react-journey-cc64e.appspot.com',
  messagingSenderId: '175996474562',
  appId: '1:175996474562:web:7818619fca8b306c7f175b',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

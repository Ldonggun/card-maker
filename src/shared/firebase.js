// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: 'AIzaSyBWYzufkuoixjS-Pnui5txXyZASjNm_z3o',
  authDomain: 'card-maker-a4005.firebaseapp.com',
  projectId: 'card-maker-a4005',
  storageBucket: 'card-maker-a4005.appspot.com',
  messagingSenderId: '437360725122',
  appId: '1:437360725122:web:4d90b36185900beebe789b',
  measurementId: 'G-GVBZSHTN6P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

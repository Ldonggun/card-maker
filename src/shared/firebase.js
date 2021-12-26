import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBWYzufkuoixjS-Pnui5txXyZASjNm_z3o',
  authDomain: 'card-maker-a4005.firebaseapp.com',
  projectId: 'card-maker-a4005',
  storageBucket: 'card-maker-a4005.appspot.com',
  messagingSenderId: '437360725122',
  appId: '1:437360725122:web:4d90b36185900beebe789b',
  measurementId: 'G-GVBZSHTN6P',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const apiKey = firebaseConfig.apiKey;
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export { apiKey, googleProvider, gitHubProvider, getAuth, signInWithPopup };

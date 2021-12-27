import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export { apiKey, googleProvider, gitHubProvider, getAuth, signInWithPopup };

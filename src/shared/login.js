import { app } from './firebase';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
  login(providerName) {
    let authProvider;
    const auth = getAuth();
    if (providerName === 'Google') authProvider = new GoogleAuthProvider();
    else authProvider = new GithubAuthProvider();
    return signInWithPopup(auth, authProvider);
  }

  logout() {}

  onAuthChange(onUserChanged) {}
}

export default AuthService;

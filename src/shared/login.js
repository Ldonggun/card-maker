import { app } from './firebase';
import {
  getAuth,
  signOut,
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

  logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  onAuthChange(onUserChanged) {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
      } else {
        console.log();
      }
    });
  }
}

export default AuthService;

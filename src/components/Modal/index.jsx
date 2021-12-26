import React, { useState } from 'react';
import style from './modal.module.css';
// components
import { Header, Footer } from '../index';
//lib
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { googleProvider, gitHubProvider } from '../../shared/firebase';
const Modal = () => {
  const [login, setLogin] = useState(sessionStorage.getItem('token'));
  const closeModal = e => {
    if (e.target !== e.currentTarget) return;
    if (login === null) return window.alert('로그인이 필요합니다.');
    else setLogin(true);
  };

  const googleSingIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem(
          'user',
          JSON.stringify({ userName: user.displayName }),
        );
        setLogin(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const gitHubSingIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem(
          'user',
          JSON.stringify({ userName: user.displayName }),
        );
        setLogin(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      {login ? null : (
        <div className={style.outer} onClick={closeModal}>
          <div className={style.container}>
            <Header></Header>
            <div className={style.contents}>
              <h1>Login</h1>
              <button onClick={googleSingIn}>Google</button>
              <button onClick={gitHubSingIn}>GitHub</button>
            </div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

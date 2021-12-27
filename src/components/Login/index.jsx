import React, { useState } from 'react';
import style from './login.module.css';
import { useHistory } from 'react-router-dom';
// components
import { Header, Footer } from '../index';

const Modal = ({ authService }) => {
  const history = useHistory();
  const Login = e => {
    authService //
      .login(e.currentTarget.textContent)
      .then(history.push('/maker'));
  };

  return (
    <>
      <div className={style.outer}>
        <div className={style.container}>
          <Header></Header>
          <div className={style.contents}>
            <h1>Login</h1>
            <button onClick={Login}>Google</button>
            <button onClick={Login}>GitHub</button>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Modal;

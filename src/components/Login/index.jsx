import React, { useEffect, useState } from 'react';
import style from './login.module.css';
import { useHistory } from 'react-router-dom';
// components
import { Header, Footer } from '../index';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMakerPage = userId => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };
  const Login = e => {
    authService //
      .login(e.currentTarget.textContent)
      .then(data => goToMakerPage(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMakerPage(user.uid);
    });
  });

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

export default Login;

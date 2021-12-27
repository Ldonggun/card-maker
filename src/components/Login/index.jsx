import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './login.module.css';
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
      .then(data => {
        console.log('로그인성공');
        goToMakerPage(data.user.uid);
      });
  };

  useEffect(() => {
    // authService.onAuthChange();
    // authService.onAuthChange(user => {
    //   user && goToMakerPage(user.uid);
    // });
    return;
  });

  return (
    <>
      <div className={style.outer}>
        <div className={style.container}>
          <Header />
          <div className={style.contents}>
            <h1>Login</h1>
            <button onClick={Login}>Google</button>
            <button onClick={Login}>GitHub</button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;

import React from 'react';
import style from './modal.module.css';
// components
import { Header, Footer } from '../index';
const Modal = props => {
  return (
    <div className={style.container}>
      <Header></Header>
      <section className={style.contents}>
        <h1>Login</h1>
        <button>Google</button>
        <button>GitHub</button>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Modal;

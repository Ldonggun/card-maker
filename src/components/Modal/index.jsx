import React from 'react';
import style from './modal.module.css';
// components
import { Header } from '../index';
const Modal = props => {
  return (
    <>
      <div className={style.container}>
        <Header></Header>
      </div>
    </>
  );
};

export default Modal;

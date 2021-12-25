import React from 'react';
import style from './header.module.css';
import logo from '../../assets/logo.png';
const Header = props => {
  return (
    <>
      <div className={style.header}>
        <img src={logo} alt='logo' className={style.logo} />
        <p className={style.title}>Business Card Maker</p>
      </div>
    </>
  );
};

export default Header;

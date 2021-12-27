import React from 'react';
import style from './header.module.css';
import logo from '../../assets/logo.png';
const Header = ({ onLogout }) => {
  const isLogin = true;
  return (
    <div className={style.header}>
      {isLogin && (
        <button className={style.logout} onClick={onLogout}>
          LOGOUT
        </button>
      )}
      <img src={logo} alt='logo' className={style.logo} />
      <p className={style.title}>Business Card Maker</p>
    </div>
  );
};

export default Header;

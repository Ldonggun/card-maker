import React, { memo } from 'react';
import style from './footer.module.css';
const Footer = memo(props => {
  return (
    <div className={style.container}>
      <p className={style.text}>Code your dream</p>
    </div>
  );
});

export default Footer;

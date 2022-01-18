import React from 'react';
import style from './cards.module.css';
import DEFAULT_IMAGE from '../../assets/default_logo.png';
const Cards = ({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${style.card} ${getStyles(theme)}`}>
      <img className={style.avatar} src={url} alt='profile_img' />
      <div className={style.info}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.company}>{company}</p>
        <p className={style.title}>{title}</p>
        <p className={style.email}>{email}</p>
        <p className={style.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  // eslint-disable-next-line default-case
  switch (theme) {
    case 'dark':
      return style.dark;
    case 'light':
      return style.light;
    case 'colorful':
      return style.colorful;
    default:
      throw new Error(`unKnown theme: ${theme}`);
  }
}
export default Cards;

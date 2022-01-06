import React from 'react';
import style from './cardpreview.module.css';
//components
import { Cards } from '../index';
const CardPreview = ({ cards }) => {
  return (
    <section className={style.cardPreview}>
      <h1 className={style.title}>Card Preview</h1>
      <ul className={style.cards}>
        {Object.keys(cards).map(key => {
          return <Cards card={cards[key]} key={key} />;
        })}
      </ul>
    </section>
  );
};

export default CardPreview;

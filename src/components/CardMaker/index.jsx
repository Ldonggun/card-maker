import React from 'react';
import style from './cardmaker.module.css';
//components
import { CardEditForm } from '../index';
const CardMaker = ({ cards }) => {
  return (
    <section className={style.cardMaker}>
      <h1 className={style.title}>Card Maker</h1>
      {cards.map(card => {
        return <CardEditForm card={card} key={card.id} />;
      })}
    </section>
  );
};

export default CardMaker;

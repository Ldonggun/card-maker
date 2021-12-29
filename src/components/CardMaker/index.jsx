import React from 'react';
import style from './cardmaker.module.css';
//components
import { CardEditForm, CardAdd } from '../index';
const CardMaker = ({ cards, onAdd }) => {
  return (
    <section className={style.cardMaker}>
      <h1 className={style.title}>Card Maker</h1>
      <div className={style.formContainer}>
        {cards.map(card => {
          return <CardEditForm card={card} key={card.id} />;
        })}
        <CardAdd onAdd={onAdd} />
      </div>
    </section>
  );
};

export default CardMaker;

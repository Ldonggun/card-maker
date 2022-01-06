import React from 'react';
import style from './cardmaker.module.css';
//components
import { CardEditForm, CardAdd } from '../index';
const CardMaker = ({ cards, onAdd, onUpdate, onDelete }) => {
  return (
    <section className={style.cardMaker}>
      <h1 className={style.title}>Card Maker</h1>
      <div className={style.formContainer}>
        {Object.keys(cards).map(key => {
          return (
            <CardEditForm
              card={cards[key]}
              key={key}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
        <CardAdd onAdd={onAdd} />
      </div>
    </section>
  );
};

export default CardMaker;

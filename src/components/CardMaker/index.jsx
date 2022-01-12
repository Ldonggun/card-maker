import React from 'react';
import style from './cardmaker.module.css';
//components
import { CardEditForm, CardAdd } from '../index';
const CardMaker = ({ FileInput, cards, onAdd, onUpdate, onDelete }) => {
  return (
    <section className={style.cardMaker}>
      <h1 className={style.title}>Card Maker</h1>
      <div className={style.formContainer}>
        {Object.keys(cards).map(key => {
          return (
            <CardEditForm
              FileInput={FileInput}
              card={cards[key]}
              key={key}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
        <CardAdd FileInput={FileInput} onAdd={onAdd} />
      </div>
    </section>
  );
};

export default CardMaker;

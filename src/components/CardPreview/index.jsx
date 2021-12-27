import React from 'react';
import style from './cardpreview.module.css';
const CardPreview = props => {
  return (
    <section className={style.cardPreview}>
      <h1 className={style.title}>Card Preview</h1>
    </section>
  );
};

export default CardPreview;

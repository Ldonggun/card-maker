import React from 'react';
import style from './cardeditform.module.css';
//components
import { Cards } from '../index';
const CardEditForm = ({ card }) => {
  return (
    <div>
      <h1>{card.id}</h1>
    </div>
  );
};

export default CardEditForm;

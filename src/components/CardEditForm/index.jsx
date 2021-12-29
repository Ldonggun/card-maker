import React from 'react';
import style from './cardeditform.module.css';
//components
import { Button, ImageFileInput } from '../index';
const CardEditForm = ({ card }) => {
  const { name, company, title, message, theme, fileName, fileURL, email } =
    card;
  const onSubmit = () => {};
  return (
    <form className={style.form}>
      <input
        className={style.input}
        type='text'
        name='name'
        defaultValue={name}
      />
      <input
        className={style.input}
        type='text'
        name='company'
        defaultValue={company}
      />
      <select className={style.select} name='theme' defaultValue={theme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={style.input}
        type='text'
        name='title'
        defaultValue={title}
      />
      <input
        className={style.input}
        type='text'
        name='email'
        defaultValue={email}
      />
      <textarea
        className={style.textarea}
        name='message'
        defaultValue={message}
      />
      <div className={style.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;

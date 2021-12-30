import React, { useRef } from 'react';
import style from './cardeditform.module.css';
//components
import { Button, ImageFileInput } from '../index';
const CardEditForm = ({ card, onUpdate }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const { name, company, title, message, theme, fileName, fileURL, email } =
    card;

  const onChange = e => {
    if (e.currentTarget === null) return;
    e.preventDefault();
    onUpdate({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = () => {};
  return (
    <form className={style.form}>
      <input
        className={style.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        className={style.input}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
        ref={companyRef}
      />
      <select
        className={style.select}
        name='theme'
        value={theme}
        ref={themeRef}
        onChange={onChange}
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={style.input}
        type='text'
        name='title'
        value={title}
        ref={titleRef}
        onChange={onChange}
      />
      <input
        className={style.input}
        type='text'
        name='email'
        value={email}
        ref={emailRef}
        onChange={onChange}
      />
      <textarea
        className={style.textarea}
        name='message'
        value={message}
        ref={messageRef}
        onChange={onChange}
      />
      <div className={style.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;

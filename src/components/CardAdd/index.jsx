import React, { useRef } from 'react';
import style from './cardadd.module.css';
//components
import { ImageFileInput, Button } from '../index';
const CardAdd = ({ onAdd }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const card = {
      id: new Date(), // uid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    onAdd(card);
  };

  return (
    <form className={style.form}>
      <input
        className={style.input}
        type='text'
        name='name'
        placeholder='name'
        ref={nameRef}
      />
      <input
        className={style.input}
        type='text'
        name='company'
        placeholder='company'
        ref={companyRef}
      />
      <select
        className={style.select}
        name='theme'
        placeholder='theme'
        ref={themeRef}
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={style.input}
        type='text'
        name='title'
        placeholder='title'
        ref={titleRef}
      />
      <input
        className={style.input}
        type='text'
        name='email'
        placeholder='email'
        ref={emailRef}
      />
      <textarea
        className={style.textarea}
        name='message'
        placeholder='message'
        ref={messageRef}
      />
      <div className={style.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='ADD' onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;

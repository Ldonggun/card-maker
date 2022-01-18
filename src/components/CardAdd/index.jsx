import React, { useRef, useState } from 'react';
import style from './cardadd.module.css';
//components
import { Button } from '../index';
const CardAdd = ({ FileInput, onAdd }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({ fileNmae: null, fileURL: null });

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    setFile({ fileNmae: null, fileURL: null });
    onAdd(card);
    nameRef.current.value = '';
    companyRef.current.value = '';
    nameRef.current.value = '';
    titleRef.current.value = '';
    messageRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <form className={style.form} ref={formRef}>
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
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name='ADD' onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;

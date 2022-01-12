import React, { useRef, useState } from 'react';
import style from './imagefileinput.module.css';
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const onButtonClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async e => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        ref={inputRef}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />

      {!loading && (
        <button
          className={`${style.button} ${name ? style.pink : style.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={style.loading}></div>}
    </div>
  );
};

export default ImageFileInput;

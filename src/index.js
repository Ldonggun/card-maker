import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './shared/login';
import ImageUploader from './shared/imageUpload';
import RealTimeDataBase from './shared/database';
import { ImageFileInput } from './components';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const dataBase = new RealTimeDataBase();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} dataBase={dataBase} />
  </React.StrictMode>,
  document.getElementById('root'),
);

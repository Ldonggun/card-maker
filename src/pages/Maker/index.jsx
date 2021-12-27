import React, { useEffect } from 'react';
import style from './maker.module.css';
//components
import { Header, Footer } from '../../components/index';
import { useHistory } from 'react-router-dom';
const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={style.Maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;

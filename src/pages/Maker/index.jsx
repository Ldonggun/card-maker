import React, { useEffect } from 'react';
import style from './maker.module.css';
//components
import { Header, Footer } from '../../components/index';
import { useHistory } from 'react-router-dom';
const Maker = ({ authService }) => {
  const history = useHistory();
  const user = history.location.state.id;
  const onLogout = () => {
    authService
      .logout() //
      .then(() => {
        console.log('로그아웃');
        history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
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
      <Header onLogout={onLogout} user={user} />
      <Footer />
    </section>
  );
};

export default Maker;

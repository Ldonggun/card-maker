import React, { useEffect, useState } from 'react';
import style from './maker.module.css';
//components
import { Header, Footer, CardMaker, CardPreview } from '../../components/index';
import { useHistory } from 'react-router-dom';
const Maker = ({ authService }) => {
  const [cards, setCarrds] = useState([
    {
      id: '1',
      name: 'donggun',
      company: 'Samsung',
      theme: 'dark',
      title: 'Sortware Engineer',
      email: 'ehdrjs130@gmail.com',
      message: 'go for it',
      fileName: 'donggun',
      fileURL: null,
    },
    {
      id: '2',
      name: 'donggun2',
      company: 'LG',
      theme: 'light',
      title: 'back Engineer',
      email: 'ehdrjs@gmail.com',
      message: 'go for it',
      fileName: 'donggun',
      fileURL: null,
    },
    {
      id: '3',
      name: 'donggun3',
      company: 'hyunDi',
      theme: 'colorful',
      title: 'front Engineer',
      email: 'ehdrjs15503@gmail.com',
      message: 'GG',
      fileName: 'donggun',
      fileURL: 'donggun.png',
    },
  ]);
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
      <section className={style.contents}>
        <CardMaker cards={cards} />
        <CardPreview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;

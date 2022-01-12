import React, { useEffect, useState } from 'react';
import style from './maker.module.css';
//components
import { Header, Footer, CardMaker, CardPreview } from '../../components/index';
import { useHistory } from 'react-router-dom';
const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

  const createOrUpdate = data => {
    // const updateData = cards.map(item => {
    //   if (item.id === data.id) {
    //     return { ...item, ...data };
    //   }
    //   return item;
    // });
    // setCards([...updateData]);

    setCards(cards => {
      const updateData = { ...cards };
      updateData[data.id] = data;
      return updateData;
    });
  };
  const deleteCard = card => {
    setCards(cards => {
      const updateData = { ...cards };
      delete updateData[card.id];
      return updateData;
    });
  };

  const history = useHistory();
  const user = history.location.state?.id;
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
        <CardMaker
          FileInput={FileInput}
          cards={cards}
          onAdd={createOrUpdate}
          onUpdate={createOrUpdate}
          onDelete={deleteCard}
        />
        <CardPreview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;

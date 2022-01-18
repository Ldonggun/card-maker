import React, { useEffect, useState } from 'react';
import style from './maker.module.css';
//components
import { Header, Footer, CardMaker, CardPreview } from '../../components/index';
import { useHistory } from 'react-router-dom';

const Maker = ({ FileInput, authService, dataBase }) => {
  const [cards, setCards] = useState({});
  const history = useHistory();
  const user = history.location.state?.id;
  const [userId, setUserId] = useState(user && user);
  const createOrUpdate = data => {
    setCards(cards => {
      const updateData = { ...cards };
      updateData[data.id] = data;
      return updateData;
    });
    dataBase.setData(userId, data);
  };
  const deleteCard = card => {
    setCards(cards => {
      const updateData = { ...cards };
      delete updateData[card.id];
      return updateData;
    });
    dataBase.deleteData(userId, card);
  };

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
    authService.onAuthChange(user);
    if (user) {
      setUserId(user);
    } else {
      history.push('/');
    }
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getData = dataBase.getDatafromDB(userId, cards => {
      setCards(cards);
    });
    return () => getData();
  }, [userId]);

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

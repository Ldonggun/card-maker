import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class RealTimeDataBase {
  setData(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}}`), card);
  }

  deleteData(userId, card) {
    const db = getDatabase();
    remove(ref(db, `${userId}/cards/${card.id}}`), card);
  }

  getDatafromDB(userId, onUpdate) {
    const db = getDatabase();
    const Ref = ref(db, `${userId}/cards/`);
    onValue(Ref, snapshot => {
      const data = snapshot.val();
      if (data) onUpdate(data);
      if (data === null) onUpdate('');
    });
    return () => off(Ref);
  }
}

export default RealTimeDataBase;

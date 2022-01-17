import { getDatabase, ref, set, remove } from 'firebase/database';
import { app } from './firebase';
class RealTimeDataBase {
  setData(userId, data) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards${data.id}}`), { data });
  }

  deleteData(userId, data) {
    const db = getDatabase();
    remove(ref(db, `${userId}/cards${data.id}}`), { data });
  }
}

export default RealTimeDataBase;

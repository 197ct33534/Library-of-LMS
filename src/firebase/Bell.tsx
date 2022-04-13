import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const BellCollectionRef = collection(db, 'Bell');

class Bell {
  addBell = (infoBell: any) => {
    return addDoc(BellCollectionRef, infoBell);
  };

  getAllBell = () => {
    return getDocs(BellCollectionRef);
  };
  updateBell = async (id: string, updatedBell: {}) => {
    return await updateDoc(doc(db, 'Bell', id), updatedBell);
  };
}
export default new Bell();

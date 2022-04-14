import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const BagCollectionRef = collection(db, 'Bag');

class Bag {
  addBag = (infoBag: any) => {
    return addDoc(BagCollectionRef, infoBag);
  };

  getAllBag = () => {
    return getDocs(BagCollectionRef);
  };
  updateBag = async (id: string, updatedBag: {}) => {
    return await updateDoc(doc(db, 'Bag', id), updatedBag);
  };
}
export default new Bag();

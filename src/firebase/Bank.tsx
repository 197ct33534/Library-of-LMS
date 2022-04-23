import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const BankCollectionRef = collection(db, 'Bank');

class Bank {
  addBank = (infoBank: any) => {
    return addDoc(BankCollectionRef, infoBank);
  };

  getAllBank = () => {
    return getDocs(BankCollectionRef);
  };
  updateBank = async (id: string, updatedBank: {}) => {
    return await updateDoc(doc(db, 'Bank', id), updatedBank);
  };
}
export default new Bank();

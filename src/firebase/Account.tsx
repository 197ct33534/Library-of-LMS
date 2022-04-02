import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
const AccountCollectionRef = collection(db, 'Auth');

class Account {
  getAllAccount = () => {
    return getDocs(AccountCollectionRef);
  };
  updateAccount = async (id: string, updatedUser: {}) => {
    return await updateDoc(doc(db, 'Auth', id), updatedUser);
  };
}
export default new Account();

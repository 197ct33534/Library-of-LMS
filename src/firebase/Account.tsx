import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
const AccountCollectionRef = collection(db, 'Auth');

class Account {
  getAllAccount = () => {
    return getDocs(AccountCollectionRef);
  };
}
export default new Account();

import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const ListDocumentCollectionRef = collection(db, 'ListDocument');

class ListDocument {
  addListDocument = (infoListDocument: any) => {
    return addDoc(ListDocumentCollectionRef, infoListDocument);
  };

  getAllListDocument = () => {
    return getDocs(ListDocumentCollectionRef);
  };
  updateListDocument = async (id: string, updatedListDocument: {}) => {
    return await updateDoc(doc(db, 'ListDocument', id), updatedListDocument);
  };
}
export default new ListDocument();

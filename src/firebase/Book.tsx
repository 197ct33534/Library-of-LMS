import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const BookCollectionRef = collection(db, 'Book');

class Book {
  addBook = (infoBook: any) => {
    return addDoc(BookCollectionRef, infoBook);
  };

  getAllBook = () => {
    return getDocs(BookCollectionRef);
  };
  updateBook = async (id: string, updatedBook: {}) => {
    return await updateDoc(doc(db, 'Book', id), updatedBook);
  };
}
export default new Book();

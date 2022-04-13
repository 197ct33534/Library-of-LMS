import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const FileDocumentCollectionRef = collection(db, 'FileDocument');

class FileDocument {
  addFileDocument = (infoFileDocument: any) => {
    return addDoc(FileDocumentCollectionRef, infoFileDocument);
  };

  getAllFileDocument = () => {
    return getDocs(FileDocumentCollectionRef);
  };
  updateFileDocument = async (id: string, updatedFileDocument: {}) => {
    return await updateDoc(doc(db, 'FileDocument', id), updatedFileDocument);
  };
}
export default new FileDocument();

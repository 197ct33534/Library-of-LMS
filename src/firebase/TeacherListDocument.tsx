import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const TeacherListCollectionRef = collection(db, 'TeacherList');

class TeacherList {
  addTeacherList = (infoTeacherList: any) => {
    return addDoc(TeacherListCollectionRef, infoTeacherList);
  };

  getAllTeacherList = () => {
    return getDocs(TeacherListCollectionRef);
  };
  updateTeacherList = async (id: string, updatedTeacherList: {}) => {
    return await updateDoc(doc(db, 'TeacherList', id), updatedTeacherList);
  };
}
export default new TeacherList();

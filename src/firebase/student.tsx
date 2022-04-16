import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const StudentCollectionRef = collection(db, 'Student');

class Student {
  addStudent = (infoStudent: any) => {
    return addDoc(StudentCollectionRef, infoStudent);
  };

  getAllStudent = () => {
    return getDocs(StudentCollectionRef);
  };
  updateStudent = async (id: string, updatedStudent: {}) => {
    return await updateDoc(doc(db, 'Student', id), updatedStudent);
  };
}
export default new Student();

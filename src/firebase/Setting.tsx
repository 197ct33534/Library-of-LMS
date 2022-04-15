import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
const SettingCollectionRef = collection(db, 'Setting');

class Setting {
  addSetting = (infoSetting: any) => {
    return addDoc(SettingCollectionRef, infoSetting);
  };

  getAllSetting = () => {
    return getDocs(SettingCollectionRef);
  };
  updateSetting = async (id: string, updatedSetting: {}) => {
    return await updateDoc(doc(db, 'Setting', id), updatedSetting);
  };
}
export default new Setting();

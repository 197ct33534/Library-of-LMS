import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBL-pmkS2-V9FgOjRxonZAP7S-NVQ-ykOs',
  authDomain: 'libary-lms-4baab.firebaseapp.com',
  projectId: 'libary-lms-4baab',
  storageBucket: 'libary-lms-4baab.appspot.com',
  messagingSenderId: '140281826538',
  appId: '1:140281826538:web:be973948b018027c839b93',
  measurementId: 'G-CET5Y4QXYL',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

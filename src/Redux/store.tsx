import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from '../Pages/Auth/authSlice';
import bagReducer from '../Pages/Bag/bagSlice';
import bellReducer from '../Pages/Bell/bellSlice';
import bookReducer from '../Pages/Book/bookSlice';
import fileReducer from '../Pages/File/fileSlice';
import settingReducer from '../Pages/Setting/settingSlice';
import studentReducer from '../Permission/Student/studentSlice';
import teacherReducer from '../Permission/Teacher/teacherSlice';
import commonReducer from './commonSlice';
const rootReducer = {
  auth: authReducer,
  book: bookReducer,
  bell: bellReducer,
  file: fileReducer,
  bag: bagReducer,
  setting: settingReducer,
  student: studentReducer,
  common: commonReducer,
  teacher: teacherReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from '../Pages/Auth/authSlice';
import bellReducer from '../Pages/Bell/bellSlice';
import bookReducer from '../Pages/Book/bookSlice';
const rootReducer = {
  auth: authReducer,
  book: bookReducer,
  bell: bellReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

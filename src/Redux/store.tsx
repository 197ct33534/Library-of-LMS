import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from '../Pages/Auth/authSlice';
const rootReducer = {
  auth: authReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

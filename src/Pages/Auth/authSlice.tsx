import { createSlice } from '@reduxjs/toolkit';
interface account {
  nameAccount: string;
  passAuth: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    listAuth: [{ nameAccount: '', passAccount: '', id: '' }],
    idlogin: '',
  },
  reducers: {
    authLogin: (state, action) => {
      state.idlogin = action.payload;
    },
    authFetchData: (state, action) => {
      state.listAuth = action.payload;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;
export const { authLogin, authFetchData } = actions;
export default authReducer;

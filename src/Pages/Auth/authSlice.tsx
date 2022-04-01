import { createSlice } from '@reduxjs/toolkit';

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
    authLogout: (state) => {
      state.idlogin = '';
    },
  },
});

const { actions, reducer: authReducer } = authSlice;
export const { authLogin, authFetchData, authLogout } = actions;
export default authReducer;

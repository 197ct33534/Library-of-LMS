import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    listAuth: [{ nameAccount: '', passAccount: '', id: '' }],
    idlogin: '',
    infoAuth: true,
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
    setInfoAuth: (state, action) => {
      state.infoAuth = action.payload;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;
export const { authLogin, authFetchData, authLogout, setInfoAuth } = actions;
export default authReducer;

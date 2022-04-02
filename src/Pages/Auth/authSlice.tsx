import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    listAuth: [
      {
        nameAccount: '',
        passAccount: '',
        id: '',
        address: '',
        phone: '',
        role: '',
        sex: 'Nam',
        email: '',
      },
    ],
    idlogin: {
      nameAccount: '',
      passAccount: '',
      id: '',
      address: '',
      phone: '',
      role: '',
      sex: 'Nam',
      email: '',
    },
    infoAuth: true,
    settingAuth: false,
  },
  reducers: {
    authLogin: (state, action) => {
      state.idlogin = action.payload;
    },
    authFetchData: (state, action) => {
      state.listAuth = action.payload;
    },
    authLogout: (state) => {
      state.idlogin = {
        nameAccount: '',
        passAccount: '',
        id: '',
        address: '',
        phone: '',
        role: '',
        sex: 'Nam',
        email: '',
      };
    },
    setInfoAuth: (state, action) => {
      state.infoAuth = action.payload;
    },
    setSettingAuth: (state, action) => {
      state.settingAuth = action.payload;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;
export const {
  authLogin,
  authFetchData,
  authLogout,
  setInfoAuth,
  setSettingAuth,
} = actions;
export default authReducer;

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
        permission: '',
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
      permission: '',
    },
    infoAuth: true,
    settingAuth: false,
    model: false,
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
        permission: '',
        email: '',
      };
    },
    setInfoAuth: (state, action) => {
      state.infoAuth = action.payload;
    },
    setSettingAuth: (state, action) => {
      state.settingAuth = action.payload;
    },
    setModel: (state, action) => {
      state.model = action.payload;
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
  setModel,
} = actions;
export default authReducer;

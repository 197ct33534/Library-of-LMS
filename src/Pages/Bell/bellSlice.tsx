import { createSlice } from '@reduxjs/toolkit';

const bellSlice = createSlice({
  name: 'bell',
  initialState: {
    isNotifySystem: true,
    isRead: false,
    addNotify: false,
    isNotifyRemove: false,
    fakeData: [{ key: 0, nameFriend: '', imgAvatarFriend: '', time: '' }],
  },
  reducers: {
    setIsNotifySystem: (state, action) => {
      state.isNotifySystem = action.payload;
    },
    setFakeData: (state, action) => {
      state.fakeData = action.payload;
    },
    setIsRead: (state, action) => {
      state.isRead = action.payload;
    },
    setAddNotify: (state, action) => {
      state.addNotify = action.payload;
    },
    setIsNotifyRemove: (state, action) => {
      state.isNotifyRemove = action.payload;
    },
  },
});
const { actions, reducer: bellReducer } = bellSlice;
export const {
  setIsNotifySystem,
  setFakeData,
  setIsRead,
  setAddNotify,
  setIsNotifyRemove,
} = actions;
export default bellReducer;

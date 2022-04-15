import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'settings',
  initialState: {
    hasUpdate: false,
    dataSetting: [],
    pageSize: 8,
    modalRole: false,
    modalRemove: false,
    modalNewExam: { type: false, record: [] },
    modalComment: false,
  },
  reducers: {
    setHasUpdate: (state, action) => {
      state.hasUpdate = action.payload;
    },
    setDataSetting: (state, action) => {
      state.dataSetting = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setModalRole: (state, action) => {
      state.modalRole = action.payload;
    },
    setModalRemove: (state, action) => {
      state.modalRemove = action.payload;
    },
    setModalNewExam: (state, action) => {
      state.modalNewExam.type = action.payload.type;
      state.modalNewExam.record = action.payload.record;
    },
    setModalComment: (state, action) => {
      state.modalComment = action.payload;
    },
  },
});
const { actions, reducer: settingReducer } = settingSlice;
export const {
  setHasUpdate,
  setDataSetting,
  setPageSize,
  setModalRole,
  setModalRemove,
  setModalNewExam,
  setModalComment,
} = actions;
export default settingReducer;

import { createSlice } from '@reduxjs/toolkit';

const bagSlice = createSlice({
  name: 'bag',
  initialState: {
    fakeDataBag: [],
    pageSize: 8,
    detailExam: {
      DocumentApproval: '',
      ExamForms: '',
      ExamName: '',
      ExamTime: '',
      Lecturers: '',
      id: '',
      imgSrc: '',
      status: '',
      subjectsName: '',
      typeFile: '',
    },
  },
  reducers: {
    setFakeDataBag: (state, action) => {
      state.fakeDataBag = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setDetailExam: (state, action) => {
      state.detailExam = action.payload;
    },
  },
});
const { actions, reducer: bagReducer } = bagSlice;
export const { setFakeDataBag, setPageSize, setDetailExam } = actions;
export default bagReducer;

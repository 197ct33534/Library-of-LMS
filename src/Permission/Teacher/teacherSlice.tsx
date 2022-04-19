import { createSlice } from '@reduxjs/toolkit';

const teacehrSlice = createSlice({
  name: 'teacher',
  initialState: {
    fakedataList: [],
    assignment: false,
    modalAddQuestion: false,
    updatebook: false,
    modalSucess: false,
  },
  reducers: {
    setFakedataList: (state, action) => {
      state.fakedataList = action.payload;
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    setModalAddQuestion: (state, action) => {
      state.modalAddQuestion = action.payload;
    },
    setUpdatebook: (state, action) => {
      state.updatebook = action.payload;
    },
    setModalSucess: (state, action) => {
      state.modalSucess = action.payload;
    },
  },
});
const { actions, reducer: teacherReducer } = teacehrSlice;

export const {
  setFakedataList,
  setAssignment,
  setModalAddQuestion,
  setUpdatebook,
  setModalSucess,
} = actions;
export default teacherReducer;

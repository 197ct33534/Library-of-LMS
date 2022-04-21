import { createSlice } from '@reduxjs/toolkit';

const teacehrSlice = createSlice({
  name: 'teacher',
  initialState: {
    fakedataList: [],
    assignment: false,
    modalAddQuestion: false,
    updatebook: false,
    modalSucess: false,
    TopicList: [],
    modalUpFile: false,
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
    setTopicList: (state, action) => {
      (state.TopicList as string[]).push(action.payload);
    },
    setModalUpFile: (state, action) => {
      state.modalUpFile = action.payload;
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
  setTopicList,
  setModalUpFile,
} = actions;
export default teacherReducer;

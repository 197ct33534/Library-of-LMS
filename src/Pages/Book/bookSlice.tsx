import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    listBook: [
      {
        Lecturers: '',
        StatusOfCourse: '',
        numberOfDocuments: '',
        dateOfSubmission: '',
        subjectID: '',
        subjectTitle: '',
      },
    ],
    isQuestion: false,
    listDocument: [
      {
        CategoryDocument: '',
        DocumentApproval: '',
        DocumentName: '',
        Lecturers: '',
        SentDate: '',
        id: '',
        status: '',
      },
    ],

    modelApproval: false,
    modelCancelDocument: false,
    seeAdd: false,
  },
  reducers: {
    bookFetchData: (state, action) => {
      state.listBook = action.payload;
    },
    listDocumentFetchData: (state, action) => {
      state.listDocument = action.payload;
    },
    setQuestion: (state, action) => {
      state.isQuestion = action.payload;
    },

    setModelApproval: (state, action) => {
      state.modelApproval = action.payload;
    },
    setModelCancelDocument: (state, action) => {
      state.modelCancelDocument = action.payload;
    },
    setSeeAdd: (state, action) => {
      state.seeAdd = action.payload;
    },
  },
});
const { actions, reducer: bookReducer } = bookSlice;
export const {
  bookFetchData,
  setQuestion,
  listDocumentFetchData,

  setModelApproval,
  setModelCancelDocument,
  setSeeAdd,
} = actions;
export default bookReducer;

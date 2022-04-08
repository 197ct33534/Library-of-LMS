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
  },
});
const { actions, reducer: bookReducer } = bookSlice;
export const { bookFetchData, setQuestion, listDocumentFetchData } = actions;
export default bookReducer;

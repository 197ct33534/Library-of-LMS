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
  },
  reducers: {
    bookFetchData: (state, action) => {
      state.listBook = action.payload;
    },
    setQuestion: (state, action) => {
      state.isQuestion = action.payload;
    },
  },
});
const { actions, reducer: bookReducer } = bookSlice;
export const { bookFetchData, setQuestion } = actions;
export default bookReducer;

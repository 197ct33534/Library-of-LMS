import { createSlice } from '@reduxjs/toolkit';

const teacehrSlice = createSlice({
  name: 'teacher',
  initialState: {
    fakedataList: [
      // {
      //   SentDate: '',
      //   approver: '',
      //   description: '',
      //   idSubject: '',
      //   key: 1,
      //   nameSubject: '',
      //   note: '',
      //   numberOfDocuments: '',
      //   statusL: '',
      //   typeDocument: '',
      // },
    ],
  },
  reducers: {
    setFakedataList: (state, action) => {
      state.fakedataList = action.payload;
    },
  },
});
const { actions, reducer: teacherReducer } = teacehrSlice;

export const { setFakedataList } = actions;
export default teacherReducer;

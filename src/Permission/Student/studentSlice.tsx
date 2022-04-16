import { createSlice } from '@reduxjs/toolkit';
export interface StudentProps {
  hasStart: boolean;
  idSubject: string;
  nameSubject: string;
  teacherSubject: string;
}
const studentSlice = createSlice({
  name: 'student',
  initialState: {
    pageSize: 5,
    studentData: [],
    tableForm: true,
  },
  reducers: {
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setStudentData: (state, action) => {
      state.studentData = action.payload;
    },
    setTableForm: (state) => {
      state.tableForm = !state.tableForm;
    },
  },
});
const { actions, reducer: studentReducer } = studentSlice;
export const { setPageSize, setStudentData, setTableForm } = actions;
export default studentReducer;

import { createSlice } from '@reduxjs/toolkit';

const teacehrSlice = createSlice({
  name: 'teacher',
  initialState: {
    fakedataList: [],
    assignment: false,
  },
  reducers: {
    setFakedataList: (state, action) => {
      state.fakedataList = action.payload;
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});
const { actions, reducer: teacherReducer } = teacehrSlice;

export const { setFakedataList, setAssignment } = actions;
export default teacherReducer;

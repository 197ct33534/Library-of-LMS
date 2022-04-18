import { createSlice } from '@reduxjs/toolkit';

const comonSlice = createSlice({
  name: 'common',
  initialState: { pageSize: 8, checkboxTable: [], isNotifyRemove: false },
  reducers: {
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setCheckboxTable: (state, action: { type: string; payload: string[] }) => {
      (state.checkboxTable as string[]) = action.payload;
    },
    resetCheckboxTable: (state) => {
      state.checkboxTable = [];
    },
    setIsNotifyRemove: (state, action) => {
      state.isNotifyRemove = action.payload;
    },
  },
});
const { actions, reducer: commonReducer } = comonSlice;
export const {
  setPageSize,
  setCheckboxTable,
  resetCheckboxTable,
  setIsNotifyRemove,
} = actions;
export default commonReducer;

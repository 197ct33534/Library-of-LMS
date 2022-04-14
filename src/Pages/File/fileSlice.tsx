import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
  name: 'file',
  initialState: {
    fetDataFile: [],
    pageSize: 8,
    isFileRemove: false,
    isFileRename: false,
    isFileDowload: false,
  },
  reducers: {
    setFetDataFile: (state, action) => {
      state.fetDataFile = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setIsFileRemove: (state, action) => {
      state.isFileRemove = action.payload;
    },
    setIsFileRename: (state, action) => {
      state.isFileRename = action.payload;
    },
    setIsFileDownload: (state, action) => {
      state.isFileDowload = action.payload;
    },
  },
});
const { actions, reducer: fileReducer } = fileSlice;
export const {
  setFetDataFile,
  setPageSize,
  setIsFileRemove,
  setIsFileRename,
  setIsFileDownload,
} = actions;
export default fileReducer;

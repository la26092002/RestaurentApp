import { configureStore } from '@reduxjs/toolkit';
import employeSlice from './employeSlice';

const store = configureStore({
  reducer: {
    employe: employeSlice.reducer,
  },
});

export default store;

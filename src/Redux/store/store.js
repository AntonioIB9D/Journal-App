import { configureStore } from '@reduxjs/toolkit';
import { journalSlice } from '../slice/journal/journalSlice';
import { authSlice } from '../slice/login/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
});

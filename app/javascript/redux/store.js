import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetingsSlice';

export default configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

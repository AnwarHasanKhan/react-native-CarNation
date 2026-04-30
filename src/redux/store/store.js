import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../slice/carSlice';

export const store = configureStore({
  reducer: {
    carlist: carReducer,
  },
});

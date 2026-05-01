import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../slice/carSlice';
import addressReducer from '../slice/addressSlice';
import userReducer from '../slice/userSlice';

export const store = configureStore({
  reducer: {
    carlist: carReducer,
    address: addressReducer,
    userinfo: userReducer
  },
});

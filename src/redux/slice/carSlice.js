import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Hyundai i10',
  license: 'UP31BR0393',
  isDefault: false,
};

const carSlice = createSlice({
  name: 'carlist',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.name = 'VirtusGT';
      // action.payload.car;
      state.license = 'Plate1';
      // action.payload.license;
      state.isDefault = true;
      // action.payload.isDefault || false;
    },

    removeCar: () => {
      return initialState;
    },
  },
});

export const { addCar, removeCar } = carSlice.actions;

export default carSlice.reducer;

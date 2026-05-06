// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

// const addressSlice = createSlice({
//   name: 'address',
//   initialState,
//   reducers: {
//     addAddress: (state, action) => {
//       state.push(action.payload);
//     },

//     deleteAddress: (state, action) => {
//       return state.filter((_, index) => index !== action.payload);
//     },

//     clearAddress: () => {
//       return [];
//     },
//   },
// });

// export const { addAddress, deleteAddress, clearAddress } = addressSlice.actions;

// export default addressSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [],
    selectedIndex: null,
  },
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    deleteAddress: (state, action) => {
      state.addresses.splice(action.payload, 1);
      if (state.selectedIndex === action.payload) {
        state.selectedIndex = null;
      }
    },
    clearAddress: (state) => {
      state.addresses = [];
      state.selectedIndex = null;
    },
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { addAddress, deleteAddress, clearAddress, setSelectedIndex } = addressSlice.actions;
export default addressSlice.reducer;
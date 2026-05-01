// import { createSlice } from '@reduxjs/toolkit'

// const initialState = []

// const addressSlice = createSlice({
//   name: 'address',
//   initialState,
//   reducers: {
//     addAddress: (state)=>{
//       [...state, payload];}
//     deleteAddress: (state)=>{
//       const deleteArray1 = state.filter((item, index) => {
//         index !== payload;
//       });
//      return deleteArray1;}
//     clearAddress:(state)=>{
//       state:[];}
//   }
// });

// export const {addAddress,deleteAddress,clearAddress} = addressSlice.actions

// export default addressSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
                      building: 'B4',
                      locality: 'Viraj Khand',
                      city: 'Lucknow',
                    }
];

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.push(action.payload);
    },

    deleteAddress: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },

    clearAddress: () => {
      return [];
    },
  },
});

export const { addAddress, deleteAddress, clearAddress } = addressSlice.actions;

export default addressSlice.reducer;
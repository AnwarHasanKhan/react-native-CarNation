import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:'',
    license:'',
    default:null
}

const carSlice = createSlice({
  name: 'carlist',
  initialState,
  reducers:  {
    addCar: (state)=>{
        state.name = 'Hyundai i20';
        state.license = 'UP32AZ8998'
    },
    removeCar: (state)=>{
        state=[];
    }
  },
});

export const {addCar,removeCar} = carSlice.actions

export default carSlice.reducer
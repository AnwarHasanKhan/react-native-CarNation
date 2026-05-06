import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Anwar Khan',
  phoneNo: '7237XXXXXX',
};

const userSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   if (action.payload.userName !== undefined)
    //     state.userName = action.payload.userName;
    //   if (action.payload.phoneNo !== undefined)
    //     state.phoneNo = action.payload.phoneNo;
    // },

    addUser: (state, action) => {
      state.userName = action.payload.userName;
      state.phoneNo = action.payload.phoneNo;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

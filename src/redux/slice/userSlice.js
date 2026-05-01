import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: 'Anwar Khan',
  phoneNo: '7237XXXXXX',
}

const userSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = 'Anwar';
      // action.payload.car;
      state.phoneNo = '7237906353';
      // action.payload.license;
    },

    removeUser: () => {
      return initialState;
    },
  },
});

export const {addUser , removeUser} = userSlice.actions

export default userSlice.reducer
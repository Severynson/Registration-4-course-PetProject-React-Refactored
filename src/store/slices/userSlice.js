import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  password: null,
  name: null,
  picture: null,
  instagram: null,
  gmail: null,
  textarea: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      addUser(state, action) {
          state.username = action.payload.username;
          state.password = action.payload.password;
      },
      addUserInfo(state, action) {
          state.name = action.payload.name;
          state.picture = action.payload.picture;
          state.instagram = action.payload.instagram;
          state.gmail = action.payload.gmail;
          state.aboutUser = action.payload.aboutUser;
      },
      logout(state) {
          state = initialState;
      },
      clearData(state) {
          state= initialState;
      }
  },
});

export default userSlice;
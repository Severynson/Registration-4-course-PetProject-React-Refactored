import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  password: null,
  name: null,
  picture: null,
  instagram: null,
  gmail: null,
  textarea: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logIn(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.name = action.payload.name;
      state.instagram = action.payload.instagram;
      state.gmail = action.payload.gmail;
      state.aboutUser = action.payload.aboutUser;
      state.status = action.payload.status;
    },
    addUserInfo(state, action) {
      state.name = action.payload.name;
      state.picture = action.payload.picture;
      state.instagram = action.payload.instagram;
      state.gmail = action.payload.gmail;
      state.aboutUser = action.payload.aboutUser;
      state.status = action.payload.status;
    },
    logout(state) {
      state = initialState;
    },
    clearData(state) {
      state = initialState;
    },
  },
});

export default userSlice;

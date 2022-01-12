import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  password: null,
  name: null,
  pictur: null,
  instagram: null,
  gmail: null,
  textarea: null,
};

const userSlice = createSlice({
  name: userSlice,
  initialState,
  reducers: {
      addUser() {}
  },
});

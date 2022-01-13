import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addUsers(state, action) {
    
      for (const key of Object.keys(action.payload)) {
        action.payload[key].key = key;
        state.push(action.payload[key]);
      }
    },
  },
});


export const accountsActions = accountsSlice.actions;
export default accountsSlice;
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import accountsSlice from "./slices/accountSlice";

const store = configureStore({
    reducer: {user: userSlice.reducer, accounts: accountsSlice.reducer},
});

export const userActions = userSlice.actions;
export const accountsActions = accountsSlice.actions;

export default store;
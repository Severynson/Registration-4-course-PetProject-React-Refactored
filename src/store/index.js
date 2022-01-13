import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import accountsSlice from "./slices/accountsSlice";

const store = configureStore({
    reducer: {user: userSlice.reducer, accounts: accountsSlice.reducer},
});

export default store;
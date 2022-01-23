import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice";
console.log(userReducer, "Tanay")
export const store = configureStore({
    reducer: {
        user: userReducer
    }

})
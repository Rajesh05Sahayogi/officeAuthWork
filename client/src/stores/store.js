import { configureStore } from "@reduxjs/toolkit";
import userVerySlice from "./userVerySlice";
import authSlice from "./authSlice";
const store=configureStore({
    reducer:{
        userVery:userVerySlice,
        auth:authSlice
    }
})

export default store
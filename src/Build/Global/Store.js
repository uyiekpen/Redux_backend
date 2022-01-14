import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./MainGlobal"
import InputReducer from "./InputReducer";
import BackEndReducer from "./BackEndReducer";

export const store= configureStore({
    reducer:{myReducer,InputReducer,BackEndReducer}
})
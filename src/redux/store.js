import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter"; // `counterSlice`ni import qilish
import {api} from "../redux/api"; // `api`ni default import qilish

export const store = configureStore({
  reducer: {
    counterSlice, // `counterSlice`ni reducerga qo'shish
    [api.reducerPath]: api.reducer, // `api.reducerPath`ni reducerga qo'shish
  },
 
});

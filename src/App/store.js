import { configureStore } from "@reduxjs/toolkit/dist";
import  catReducer  from "../components/cats/catsSlice";
import dogsReducer from "../components/dogs/dogsSlice";

export const store = configureStore({
  reducer: {
    cats: catReducer,
    dogs: dogsReducer
  },
});
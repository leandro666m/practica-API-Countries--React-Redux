import { configureStore } from "@reduxjs/toolkit";
import { CountriesSlice } from "../Slices/CountriesSlice";

export const store = configureStore({
  reducer: { 
    countries: CountriesSlice.reducer 
  },
});

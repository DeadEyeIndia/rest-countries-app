import { configureStore } from "@reduxjs/toolkit";

import { countriesApi } from "../services/countriesApi";
import filterReducer from "../services/filterSlice";

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

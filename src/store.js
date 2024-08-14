import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApiSlice";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    searchFilter: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchFilter",
  initialState: {
    query: "",
    category: "all",
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setSearchFilterCategoryQuery(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchFilterCategoryQuery } =
  searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  rating: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortByPrice(state, action) {
      state.sort = action.payload;
    },
    filterByRating(state, action) {
      state.rating = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const {sortByPrice,filterByRating} = filterSlice.actions;

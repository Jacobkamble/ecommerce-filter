import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  rating: 0,
  searchQuery: "",
  isOutOfStock: false,
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
    filterBySearch(state, action) {
      state.searchQuery = action.payload;
    },
    filterByStock(state) {
      state.isOutOfStock = !state.isOutOfStock;
    },
  },
});

export default filterSlice.reducer;

export const { sortByPrice, filterByRating, filterBySearch, filterByStock } =
  filterSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../data/dummy";
import { Product } from "../../types/product";

interface fetchType {
  isLoading: boolean;
  error: string;
  products: Product[];
}

const initialState: fetchType = {
  isLoading: false,
  products: [],
  error: "",
};

const fetchProduct = createAsyncThunk("products/fetch", async () => {
  try {
    const res = (await axios.get(URL)).data;
    return res.products;
  } catch (error: any) {
    return error.message;
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state,action){
        state.products=action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action: any) => {
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
export const {} = productSlice.actions;

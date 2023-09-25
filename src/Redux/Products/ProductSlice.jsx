import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchPopularProducts,
  fetchTrendingProducts,
  fetchProductsByID,
  fetchBrandedProducts,
} from "./ProductAPI";

const initialState = {
  product: [],
  category: {
    popular: [],
    trending: [],
    brandedProducts: [],
  },
  productId: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

// Category
export const fetchPopularProductsAsync = createAsyncThunk(
  "product/fetchPopularProducts",
  async () => {
    const response = await fetchPopularProducts();
    return response.data;
  }
);
export const fetchTrendingProductsAsync = createAsyncThunk(
  "product/fetchTrendingProducts",
  async () => {
    const response = await fetchTrendingProducts();
    return response.data;
  }
);
export const fetchBrandedProductsAsync = createAsyncThunk(
  "product/fetchBrandedProducts",
  async () => {
    const response = await fetchBrandedProducts();
    return response.data;
  }
);

// Product Details
export const fetchProductsByIDAsync = createAsyncThunk(
  "product/fetchProductsByID",
  async (id) => {
    const response = await fetchProductsByID(id);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(fetchPopularProductsAsync.fulfilled, (state, action) => {
        state.category.popular = action.payload.filter(
          (item) => item.popular === true
        );
      })
      .addCase(fetchTrendingProductsAsync.fulfilled, (state, action) => {
        state.category.trending = action.payload.filter(
          (item) => item.trending === true
        );
      })
      .addCase(fetchProductsByIDAsync.fulfilled, (state, action) => {
        state.productId = action.payload;
      })
      .addCase(fetchBrandedProductsAsync.fulfilled, (state, action) => {
        state.category.brandedProducts = action.payload.filter(
          (item) => item.brandedProducts === true
        );
      });
  },
});

export default productSlice.reducer;

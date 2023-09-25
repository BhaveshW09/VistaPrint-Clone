import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSmartPhones,
  fetchFragrances,
  fetchLaptops,
  fetchSkincare,
} from "./FilterCategory";

const initialState = {
  filterCategory: {
    all: [],
    SmartPhones: [],
    Fragrances: [],
    Laptops: [],
    Skincare: [],
  },
};

export const fetchFilterCategoryAsync = createAsyncThunk(
  "filterCategory/fetchSmartPhones",
  async () => {
    const response = await fetchSmartPhones();
    return response.data;
  }
);

// SmartPhones
export const fetchSmartPhonesAsync = createAsyncThunk(
  "SmartPhones/fetchSmartPhones",
  async () => {
    const response = await fetchSmartPhones();
    return response.data;
  }
);

// Fragrances
export const fetchFragrancesAsync = createAsyncThunk(
  "Fragrances/fetchFragrances",
  async () => {
    const response = await fetchFragrances();
    return response.data;
  }
);

// Laptops
export const fetchLaptopsAsync = createAsyncThunk(
  "Laptops/fetchLaptops",
  async () => {
    const response = await fetchLaptops();
    return response.data;
  }
);

// Skincare
export const fetchSkincareAsync = createAsyncThunk(
  "Skincare/fetchSkincare",
  async () => {
    const response = await fetchSkincare();
    return response.data;
  }
);

const filterCategory = createSlice({
  name: "filterCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterCategoryAsync.fulfilled, (state, action) => {
        state.filterCategory.all = action.payload;
      })
      .addCase(fetchSmartPhonesAsync.fulfilled, (state, action) => {
        state.filterCategory.SmartPhones = action.payload.filter(
          (item) => item.category === "smartphones"
        );
      })
      .addCase(fetchFragrancesAsync.fulfilled, (state, action) => {
        state.filterCategory.Fragrances = action.payload.filter(
          (item) => item.category === "fragrances"
        );
      })
      .addCase(fetchLaptopsAsync.fulfilled, (state, action) => {
        state.filterCategory.Laptops = action.payload.filter(
          (item) => item.category === "laptops"
        );
      })
      .addCase(fetchSkincareAsync.fulfilled, (state, action) => {
        state.filterCategory.Skincare = action.payload.filter(
          (item) => item.category === "skincare"
        );
      });
  },
});

export default filterCategory.reducer;

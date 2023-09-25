import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchCart, quantityUpdate, removeItem } from "./CartApi";

const initialState = {
  value: 0,
  cart: [],
};

// Add to Cart
export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

// Fetch all item in cart
export const fetchCartAsync = createAsyncThunk("cart/fetchCart", async () => {
  const response = await fetchCart();
  return response.data;
});

// Quantity Update
export const quantityUpdateAsync = createAsyncThunk(
  "cart/quantityUpdate",
  async (item) => {
    const response = await quantityUpdate(item);
    return response.data;
  }
);

// removeItem
export const removeItemAsync = createAsyncThunk(
  "cart/removeItem",
  async (itemId) => {
    const response = await removeItem(itemId);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.cart.push(action.payload);
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(quantityUpdateAsync.fulfilled, (state, action) => {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart[index] = action.payload;
      })

      .addCase(removeItemAsync.fulfilled, (state, action) => {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart.splice(index, 1);
      });
  },
});

export default cartSlice.reducer;

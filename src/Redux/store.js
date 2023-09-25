import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products/ProductSlice";
import cartSlice from "./Cart/CartSlice";
import filterCategory from "./CategoryFilter/FilterCategorySlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    carts: cartSlice,
    category: filterCategory,
  },
});

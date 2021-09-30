import { configureStore } from "@reduxjs/toolkit";
import productReduser from "./Product/product-reduser";

const store = configureStore({
  reducer: {
    products: productReduser,
  },
});

export { store };

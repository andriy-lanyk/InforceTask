import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as productActions from "./product-actions";

const InitialState = {
  items: [],
  isLoading: false,
  error: "",
};

const productsItems = createReducer(InitialState, {
  [productActions.getProduct]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [productActions.addProduct]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),
  [productActions.deleteProduct]: (state, { payload }) => ({
    ...state,
    items: state.items.filter((elem) => elem.id !== payload),
  }),
  [productActions.fetchProductRequest]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [productActions.fetchProductSuccess]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [productActions.fetchProductError]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});

const filter = createReducer("", {
  [productActions.filterProduct]: (_, { payload }) => payload,
});

export default combineReducers({
  productsItems,
  filter,
});

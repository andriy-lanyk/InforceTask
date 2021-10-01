import { createAction } from "@reduxjs/toolkit";

const addProduct = createAction(
  "product/add",
  ({ id, imageUrl, name, count, size, weight, comments = [] }) => {
    return {
      payload: {
        id,
        imageUrl,
        name,
        count,
        size,
        weight,
        comments,
      },
    };
  }
);

const getProduct = createAction("product/get");
const deleteProduct = createAction("product/delete");
const filterProduct = createAction("product/filter");
const sortProduct = createAction("product/sort");
const getProductId = createAction("product/getId");
const patchProduct = createAction(
  "product/patch",
  ({ id, imageUrl, name, count, size, weight, comments = [] }) => {
    return {
      payload: {
        id,
        imageUrl,
        name,
        count,
        size,
        weight,
        comments,
      },
    };
  }
);

const fetchProductRequest = createAction("product/fetchRequest");
const fetchProductSuccess = createAction("product/fetchSuccess");
const fetchProductError = createAction("product/fetchError");

export {
  addProduct,
  getProduct,
  getProductId,
  deleteProduct,
  filterProduct,
  sortProduct,
  patchProduct,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
};

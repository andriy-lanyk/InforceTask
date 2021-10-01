import { createSelector } from "reselect";

const getAllProducts = (state) => state.products.productsItems.items;
const getFilter = (state) => state.products.filter;
const getSortOrder = (state) => state.products.sortOrder;
const getLoading = (state) => state.products.productsItems.isLoading;
const getProduct = (state) => state.products.productsItems.product;

const getFilteredProducts = createSelector(
  [getAllProducts, getFilter],
  (products, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return products.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export {
  getAllProducts,
  getFilter,
  getFilteredProducts,
  getLoading,
  getProduct,
  getSortOrder,
};

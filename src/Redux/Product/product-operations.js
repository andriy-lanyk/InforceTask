import axios from "axios";
import * as productActions from "./product-actions";

axios.defaults.baseURL = "http://localhost:3030";

export const fetchGetProduct = () => async (dispatch) => {
  dispatch(productActions.fetchProductRequest());

  try {
    const { data } = await axios.get("/products");
    dispatch(productActions.getProduct(data));
    dispatch(productActions.fetchProductSuccess());
  } catch (error) {
    dispatch(productActions.fetchProductError(error));
  }
};

export const fetchPostProduct = (product) => async (dispatch) => {
  dispatch(productActions.fetchProductRequest());

  try {
    const { data } = await axios.post("/products", product);
    dispatch(productActions.addProduct(data));
    dispatch(productActions.fetchProductSuccess());
  } catch (error) {
    dispatch(productActions.fetchProductError(error));
  }
};

export const fetchDeleteProduct = (id) => async (dispatch) => {
  const productId = id.toString();
  dispatch(productActions.fetchProductRequest());

  try {
    await axios.delete(`/products/${productId}`);
    dispatch(productActions.deleteProduct(id));
    dispatch(productActions.fetchProductSuccess());
  } catch (error) {
    dispatch(productActions.fetchProductError(error));
  }
};

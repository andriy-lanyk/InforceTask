import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as productOperations from "../../Redux/Product/product-operations";
import {
  getAllProducts,
  getFilteredProducts,
  getSortOrder,
} from "../../Redux/Product/product-selectors";
import * as productActions from "../../Redux/Product/product-actions";
import ProductItem from "../ProductItem";

import styled from "@emotion/styled";

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const ProductList = () => {
  const location = useLocation();
  const products = useSelector(getAllProducts);
  const visibleProducts = useSelector(getFilteredProducts);
  const sortOrder = useSelector(getSortOrder);
  const [sortedProducts, setSortedProducts] = useState(visibleProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productOperations.fetchGetProduct());
  }, [dispatch]);

  useEffect(() => {
    if (location.search === "") {
      dispatch(productActions.sortProduct("ascending"));
    }
  }, [location, dispatch]);
  console.log("sortOrder: ", sortOrder);

  useEffect(() => {
    setSortedProducts(() =>
      [...visibleProducts].sort((a, b) => {
        return sortOrder === "ascending"
          ? a.name > b.name
            ? 1
            : -1
          : a.name > b.name
          ? -1
          : 1;
      })
    );
  }, [sortOrder, visibleProducts]);

  console.log("sortedProducts: ", sortedProducts);

  return (
    products.length > 0 && (
      <List>
        {sortedProducts.map(
          ({ id, imageUrl, name, count, size, weight, comments }) => (
            <ProductItem
              key={id}
              id={id}
              imageUrl={imageUrl}
              name={name}
              count={count}
              size={size}
              weight={weight}
              comments={comments}
            />
          )
        )}
      </List>
    )
  );
};

export default ProductList;

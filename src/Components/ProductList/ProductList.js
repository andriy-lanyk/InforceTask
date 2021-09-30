import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productOperations from "../../Redux/Product/product-operations";
import {
  getAllProducts,
  getFilteredProducts,
} from "../../Redux/Product/product-selectors";
import ProductItem from "../PropuctItem";

import styled from "@emotion/styled";

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const ProductList = ({ click }) => {
  const products = useSelector(getAllProducts);
  const visibleProducts = useSelector(getFilteredProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productOperations.fetchGetProduct());
  }, [dispatch]);

  return (
    products.length > 0 && (
      <List>
        {visibleProducts.map(
          ({ id, imageUrl, name, count, size, weight, comments }) => (
            <ProductItem
              id={id}
              imageUrl={imageUrl}
              name={name}
              count={count}
              size={size}
              weight={weight}
              comments={comments}
              deleteCard={() =>
                dispatch(productOperations.fetchDeleteProduct(id))
              }
              openModal={click}
            />
            // <li key={id}>
            //   <div onClick={click}>
            //     <h2>{name}</h2>
            //     <img src={imageUrl} alt={name} />
            // <p>{count}</p>
            // <p>{size.width}</p>
            // <p>{size.height}</p>
            // <p>{weight}</p>
            //   </div>
            //   <button
            //     type="button"
            //     onClick={() =>
            //       dispatch(productOperations.fetchDeleteProduct(id))
            //     }
            //   >
            //     Delete
            //   </button>
            // </li>
          )
        )}
      </List>
    )
  );
};

export default ProductList;

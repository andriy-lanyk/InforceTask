import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../Redux/Product/product-actions";
import {
  getAllProducts,
  getFilter,
} from "../../Redux/Product/product-selectors";

import TextField from "@material-ui/core/TextField";
// import { Message } from './Filter.styles';

const Filter = () => {
  const filter = useSelector(getFilter);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(productActions.filterProduct(e.target.value));
  };

  return products.length !== 0 ? (
    <TextField
      margin="none"
      size="small"
      label="Find product by name"
      type="text"
      name="Find product"
      value={filter}
      onChange={handleChange}
    />
  ) : (
    <TextField
      disabled
      margin="none"
      size="small"
      label="Find product by name"
      type="text"
      name="Find product"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;

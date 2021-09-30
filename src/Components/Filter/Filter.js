import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../Redux/Product/product-actions";
import {
  getAllProducts,
  getFilter,
} from "../../Redux/Product/product-selectors";

// import { Label, Message } from './Filter.styles';

const Filter = () => {
  const filter = useSelector(getFilter);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(productActions.filterProduct(e.target.value));
  };

  return products.length !== 0 ? (
    <label>
      Find product by name
      <input
        type="text"
        name="Find product"
        value={filter}
        onChange={handleChange}
      />
    </label>
  ) : (
    <p>
      Our shop doesn`t have any products in current time. Please, visit us later
    </p>
  );
};

export default Filter;

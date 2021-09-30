import { useState } from "react";
import { useDispatch } from "react-redux";
import * as productOperations from "../../Redux/Product/product-operations";
// import { getAllProducts } from '../../Redux/Product/product-selectors';

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [count, setCount] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  //   const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "image":
        setImage(value);
        break;
      case "count":
        setCount(value);
        break;
      case "width":
        setWidth(value);
        break;
      case "height":
        setHeight(value);
        break;
      case "weight":
        setWeight(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const size = { width, height };

    dispatch(
      productOperations.fetchPostProduct({ name, image, count, size, weight })
    );
    reset();
  };

  const reset = () => {
    setName("");
    setImage("");
    setCount("");
    setWidth("");
    setHeight("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Enter name of a product"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        Image
        <input
          type="text"
          name="image"
          title="Enter URL of a product"
          required
          onChange={handleChange}
          value={image}
        />
      </label>
      <label>
        Count
        <input
          type="number"
          name="count"
          title="Enter count of a product"
          required
          onChange={handleChange}
          value={count}
        />
      </label>
      <label>
        Width of a product
        <input
          type="number"
          name="width"
          title="Enter count of a product"
          required
          onChange={handleChange}
          value={width}
        />
      </label>
      <label>
        Height of a product
        <input
          type="number"
          name="height"
          title="Enter height of a product"
          required
          onChange={handleChange}
          value={height}
        />
      </label>
      <label>
        Weight
        <input
          type="number"
          name="weight"
          title="Enter weight of a product"
          required
          onChange={handleChange}
          value={weight}
        />
      </label>
      <button type="submit">Add product</button>
    </form>
  );
};

export default AddProductForm;

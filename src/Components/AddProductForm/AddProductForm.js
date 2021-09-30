import { useState } from "react";
import { useDispatch } from "react-redux";
import * as productOperations from "../../Redux/Product/product-operations";

import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Form } from "./AddProductForm.styles";

const AddProductForm = () => {
  const [openForm, setOpenForm] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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
      case "imageUrl":
        setImageUrl(value);
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
    const comments = [];

    dispatch(
      productOperations.fetchPostProduct({
        name,
        imageUrl,
        count,
        size,
        weight,
        comments,
      })
    );
    toast.success(`${name} was added to shop`, {
      theme: "colored",
      autoClose: 2500,
    });
    reset();
  };

  const reset = () => {
    setName("");
    setImageUrl("");
    setCount("");
    setWidth("");
    setHeight("");
    setWeight("");
  };

  function toggleForm() {
    setOpenForm(!openForm);
  }

  return (
    <>
      <Button onClick={toggleForm} variant="outlined" size="medium">
        {openForm ? "Close add product form" : "Open add product form"}
      </Button>
      {openForm && (
        <Form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
            size="small"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Image URL"
            type="text"
            name="imageUrl"
            value={imageUrl}
            required
            onChange={handleChange}
            size="small"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Count"
            type="number"
            name="count"
            value={count}
            required
            onChange={handleChange}
            size="small"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Width of a product"
            type="number"
            name="width"
            value={width}
            required
            onChange={handleChange}
            size="small"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Height of a product"
            type="number"
            name="height"
            value={height}
            required
            onChange={handleChange}
            size="small"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Weight"
            type="number"
            name="weight"
            value={weight}
            required
            onChange={handleChange}
            size="small"
          />
          <Button type="submit" variant="contained">
            Add product
          </Button>
        </Form>
      )}
    </>
  );
};

export default AddProductForm;

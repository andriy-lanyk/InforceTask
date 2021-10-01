import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productOperations from "../../Redux/Product/product-operations";
import { createPortal } from "react-dom";
import { getProduct } from "../../Redux/Product/product-selectors";

import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "./ChangeProduct.module.css";

const modalRoot = document.querySelector("#modal-root");

function ChangeProduct({ closeModal, id }) {
  const product = useSelector(getProduct);
  const [name, setName] = useState(product.name);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [count, setCount] = useState(product.count);
  const [width, setWidth] = useState(product.size.width);
  const [height, setHeight] = useState(product.size.height);
  const [weight, setWeight] = useState(product.weight);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const dispatch = useDispatch();

  function handleKeyDown(e) {
    if (e.code === "Escape") {
      closeModal();
    }
  }

  function handleClickOnBackdrop(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

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
      productOperations.fetchPatchProductId(
        {
          name,
          imageUrl,
          count,
          size,
          weight,
          comments,
        },
        id
      )
    );
    toast.success(`Product ${name} was changed`, {
      theme: "colored",
      autoClose: 2500,
    });
    closeModal();
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClickOnBackdrop}>
      <div className={styles.mainContainer}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>,
    modalRoot
  );
}

export default ChangeProduct;

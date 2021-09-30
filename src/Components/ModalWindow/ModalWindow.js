import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as productOperations from "../../Redux/Product/product-operations";
import { Button } from "@material-ui/core";
import { createPortal } from "react-dom";
import styles from "./ModalWindow.module.css";

const modalRoot = document.querySelector("#modal-root");

function ModalWindow({ closeModal, name, id }) {
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

  return createPortal(
    <div className={styles.overlay} onClick={handleClickOnBackdrop}>
      <div className={styles.mainContainer}>
        <h2>Please, confirm delete product {name}</h2>
        <div className={styles.btnContainer}>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => dispatch(productOperations.fetchDeleteProduct(id))}
          >
            Yes, delete product
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={closeModal}
          >
            No, go back
          </Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default ModalWindow;

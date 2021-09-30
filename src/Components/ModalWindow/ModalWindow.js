import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from "./ModalWindow.module.css";

const modalRoot = document.querySelector("#modal-root");

function ModalWindow({ closeModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

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
      <form></form>
    </div>,
    modalRoot
  );
}

ModalWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalWindow;

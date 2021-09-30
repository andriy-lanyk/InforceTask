import { useState } from "react";

import ProductList from "../Components/ProductList";
import Filter from "../Components/Filter";
import ModalWindow from "../Components/ModalWindow";
import AddProductForm from "../Components/AddProductForm";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [modal, setModal] = useState(false);

  function openModal(e) {
    // const elementId = +e.target.dataset.id;
    // const modalImg = photos.filter((photo) => {
    //   return photo.id === elementId;
    // });
    // modalImg?.forEach((elem) => {
    //   setLargeUrl(elem.largeImageURL);
    //   setAlt(elem.tags);
    // });
    setModal(true);
  }

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div className="App">
      <h1>Test shop application</h1>
      <Filter />
      <h2>Products</h2>
      <ProductList click={openModal} />
      <AddProductForm />
      {modal && <ModalWindow closeModal={toggleModal} />}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;

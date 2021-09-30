import { useState } from "react";

import ProductList from "../Components/ProductList";
import Filter from "../Components/Filter";
import ModalWindow from "../Components/ModalWindow";
import AddProductForm from "../Components/AddProductForm";
import "./App.css";

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
    </div>
  );
}

export default App;

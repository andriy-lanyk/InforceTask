import { useState } from "react";
import ProductsListView from "../Views/ProductsListView";
import ModalWindow from "../Components/ModalWindow";
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
      <ProductsListView openModal={openModal} />

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

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import * as productOperations from "../../Redux/Product/product-operations";
import { getProduct } from "../../Redux/Product/product-selectors";
import { Button } from "@material-ui/core";
import ChangeProduct from "../../Components/ChangeProduct";
import styles from "./ProductView.module.css";

function ProductView() {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const productId = location?.state?.productId ?? 1;

  const product = useSelector(getProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productOperations.fetchGetProductId(productId));
  }, [dispatch, productId]);

  function openModal() {
    setModal(true);
  }

  function toggleModal() {
    setModal(!modal);
  }

  function goToBack() {
    history.push(location?.state?.from ?? "/InforceTask");
  }

  return (
    <>
      <div className={styles.container}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          aria-label="Go back"
          onClick={goToBack}
        >
          Go to product list
        </Button>

        <>
          {product && (
            <>
              <div className={styles.productContainer}>
                <div className={styles.productImage}>
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className={styles.productDescription}>
                  <h2>{product.name}</h2>
                  <p>Count: {product.count}</p>
                  <p>Weight: {product.weight}</p>
                  <h3>Product size</h3>
                  <p>Width: {product.size?.width}</p>
                  <p>Height: {product.size?.height}</p>
                  <h3>Comments</h3>
                  <ul>
                    {product?.comments?.map((comment, i) => (
                      <li key={i}>{comment}</li>
                    ))}
                  </ul>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="secondary"
                    aria-label="Open edit product window"
                    onClick={openModal}
                  >
                    Edit product
                  </Button>
                </div>
              </div>
            </>
          )}
        </>
      </div>
      {modal && <ChangeProduct closeModal={toggleModal} id={productId} />}
    </>
  );
}

export default ProductView;

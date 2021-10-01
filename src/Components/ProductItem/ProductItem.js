import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActionArea, CardActions } from "@material-ui/core";

import ModalWindow from "../ModalWindow";
import styles from "./ProductItem.module.css";

// import styled from '@emotion/styled';

// const DivContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

export default function ProductItem({
  id,
  imageUrl,
  name,
  count,
  size,
  weight,
  comments,
}) {
  const [modal, setModal] = useState(false);

  const location = useLocation();

  function confirmDeleteCard() {
    setModal(true);
  }

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }} key={id}>
        <Link
          className={styles.link}
          to={{
            pathname: `/InforceTask/${id}`,
            state: { from: location, productId: id },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography
                component={"span"}
                variant="body2"
                color="text.secondary"
              >
                <div className={styles.divContainer}>
                  <span>Count: {count}</span>
                  {/* <span>Weight: {weight}</span>
                  <span>Width: {size.width}</span>
                  <span>Height: {size.height}</span> */}
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions>
          <Button size="small" color="primary" onClick={confirmDeleteCard}>
            Delete
          </Button>
        </CardActions>
      </Card>
      {modal && <ModalWindow closeModal={toggleModal} name={name} id={id} />}
    </>
  );
}

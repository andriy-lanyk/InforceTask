import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActionArea, CardActions } from "@material-ui/core";

import ModalWindow from "../ModalWindow";

import styled from "@emotion/styled";

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ProductItem({
  id,
  imageUrl,
  name,
  count,
  size,
  weight,
  comments,
  openModal,
}) {
  const [modal, setModal] = useState(false);

  function confirmDeleteCard() {
    setModal(true);
  }

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }} key={id}>
        <CardActionArea onClick={openModal}>
          <CardMedia component="img" height="140" image={imageUrl} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              component={"span"}
              variant="body2"
              color="text.secondary"
            >
              <DivContainer>
                <span>Count: {count}</span>
                <span>Weight: {weight}</span>
                <span>Width: {size.width}</span>
                <span>Height: {size.height}</span>
              </DivContainer>
              {/* {comments.length > 0 &&
              comments.map((comment, i) => <p key={comment + i}>{comment}</p>)} */}
            </Typography>
          </CardContent>
        </CardActionArea>
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

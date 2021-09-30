import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActionArea, CardActions } from "@material-ui/core";

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
  deleteCard,
  openModal,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardActionArea onClick={openModal}>
        <CardMedia component="img" height="140" image={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <DivContainer>
              <p>Count: {count}</p>
              <p>Weight: {weight}</p>
              <p>Width: {size.width}</p>
              <p>Height: {size.height}</p>
            </DivContainer>
            {comments.length > 0 && comments.map((comment) => <p>{comment}</p>)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteCard}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

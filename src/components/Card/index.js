// material ui
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// react redux
import { useDispatch } from "react-redux";

// actions thunks
import { addProductThunk, removeProductThunk } from "../../store/modules/cart/thunks";
//---------------------------------------
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 275,
    minWidth: 275,
  },
  media: {
    height: 140,
  },
});
//---------------------------------------
const ProductCard = ({ product, remove = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box m={1.5}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              R$ {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {remove ? (
            <Box display="flex" alignItems="center">
              <Button size="small" color="primary" mx={1.5} onClick={() => dispatch(removeProductThunk(product.id))}>
                Remover
              </Button>
              <Box mx={1.5}>
                <Typography>x {product.quantity}</Typography>
              </Box>
            </Box>
          ) : (
            <Button
              onClick={() => dispatch(addProductThunk(product))}
              size="small"
              color="primary"
            >
              Adicionar
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;

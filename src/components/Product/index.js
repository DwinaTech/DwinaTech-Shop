import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./style.css";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);
  console.log("product.media.source =======>>>>>>>>", product.media.source);

  return (
    <Card className="product-card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="280"
          image={product.media.source}
          title="Contemplative Reptile"
        />
        <CardContent className="content">
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description.replace("<p>", "").replace("</p>", "")}
          </Typography>
          <Typography
            className="price"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.price.formatted_with_symbol}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="large"
          className="custom-button"
          onClick={handleAddToCart}
        >
          <ShoppingCart /> Add to basket
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

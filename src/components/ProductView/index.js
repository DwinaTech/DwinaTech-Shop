import { Grid, Button, Container, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";

import "./style.css";

const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = ({ addProduct, updateProduct, RemoveItemFromBasket }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    console.log({ response });
    const { name, price, media, quantity, description } = response;
    setProduct({
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  return (
    <Container className="product-view">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className="image-wrapper">
          <img
            onLoad={() => {
              setLoading(false);
            }}
            src={product.src}
            alt={product.name}
          />
        </Grid>
        <Grid item xs={12} md={4} className="text">
          <Typography variant="h2">{product.name}</Typography>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h3">Price: {product.price}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                size="small"
                variant="contained"
                className="increase-product-quantity"
                onClick={() => {
                  updateProduct(product.id, product.quantity + 1);
                }}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography> Quantity: {product.quantity}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => {
                  updateProduct(product.id, product.quantity - 1);
                }}
              >
                -
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                className="custom-button"
                onClick={() => {
                  addProduct(product.id, 1);
                }}
              >
                <ShoppingCart /> Add to basket
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {loading && <Spinner />}
    </Container>
  );
};

export default ProductView;

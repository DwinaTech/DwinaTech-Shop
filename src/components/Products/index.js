import React from "react";
import { Grid, Container } from "@material-ui/core";
import Product from "../Product";
import Banner from "../Banner";
import "./style.css";

const Products = ({ products, updateCart }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <>
      <Banner />
      <Container id="products">
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} updateCart={updateCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Products;

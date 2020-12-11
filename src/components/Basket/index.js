import React from "react";
import { Grid, Container } from "@material-ui/core";
import CustomCard from "../CustomCard";
import "./style.css";

const Basket = ({ basketData, updateProduct, RemoveItemFromBasket }) => {
  if (!basketData.line_items || !basketData.line_items.length)
    return <p id="basket">Loading...</p>;
  return (
    <Container id="basket">
      <Grid container justify="center" spacing={4}>
        {basketData.line_items.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <CustomCard
                basket
                product={item}
                updateProduct={updateProduct}
                RemoveItemFromBasket={RemoveItemFromBasket}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Basket;

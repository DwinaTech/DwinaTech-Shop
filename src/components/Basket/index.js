import React from "react";
import { Grid, Button, Container } from "@material-ui/core";
import CustomCard from "../CustomCard";
import Banner from "./Banner";

import "./style.css";

const Basket = ({
  basketData,
  updateProduct,
  handleEmptyBasket,
  RemoveItemFromBasket,
}) => {
  if (!basketData.line_items || !basketData.line_items.length)
    return <Banner />;
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
      <div className="actions">
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleEmptyBasket}
        >
          Empty Basket
        </Button>
      </div>
    </Container>
  );
};

export default Basket;

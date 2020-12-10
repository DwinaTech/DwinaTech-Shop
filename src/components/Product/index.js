import React from "react";
import CustomCard from "../CustomCard";

const Product = ({
  basket,
  product,
  updateBasketData,
  RemoveItemFromBasket,
}) => (
  <CustomCard
    basket={basket}
    product={product}
    updateBasketData={updateBasketData}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);

export default Product;

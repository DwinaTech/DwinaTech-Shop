import CustomCard from "../CustomCard";

const Product = ({ basket, product, addProduct, RemoveItemFromBasket }) => (
  <CustomCard
    basket={basket}
    product={product}
    addProduct={addProduct}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);

export default Product;

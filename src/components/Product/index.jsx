import CustomCard from "../CustomCard";

const Product = ({
  basket,
  product,
  addProduct,
  categoryName,
  RemoveItemFromBasket,
}) => (
  <CustomCard
    basket={basket}
    product={product}
    addProduct={addProduct}
    categoryName={categoryName}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);

export default Product;

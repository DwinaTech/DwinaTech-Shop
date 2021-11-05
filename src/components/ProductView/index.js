import { Button, Container, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import styled from "styled-components";

const createMarkup = (text) => {
  return { __html: text };
};

const Wrapper = styled.div`
  display: grid;
  min-height: 75vh;
  margin-top: 12vh;
  grid-gap: 15px;
  padding-bottom: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImgWrapper = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const TextWrapper = styled.div``;
const Contents = styled.div``;
const Actions = styled.div`
  display: flex;
  margin: 15px 0;
  > button,
  h5 {
    margin-right: 10px;
  }
`;
const AddToBasketButton = styled(Button)`
  color: #000;
  background-color: #bb86fc;
  &:hover {
    color: #c9d1d9;
    background-color: #bb86fc;
  }
  svg {
    margin-right: 10px;
  }
`;

const ProductView = ({ addProduct }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, media, quantity, description } = response;
    setProduct({
      id,
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

  const handleQuantity = (param) => {
    if (param === "decries" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (param === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <img
            onLoad={() => {
              setLoading(false);
            }}
            src={product.src}
            alt={product.name}
          />
        </ImgWrapper>
        <TextWrapper>
          <Typography variant="h4">{product.name}</Typography>
          <Typography
            variant="h6"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h5">Price: {product.price}</Typography>
          <Contents>
            <Actions>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  handleQuantity("increase");
                }}
              >
                +
              </Button>

              <Typography variant="h5">Quantity: {quantity}</Typography>

              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => {
                  handleQuantity("decries");
                }}
              >
                -
              </Button>
            </Actions>
            <AddToBasketButton
              size="large"
              onClick={() => {
                addProduct(product.id, quantity);
              }}
            >
              <ShoppingCart /> Add to basket
            </AddToBasketButton>
          </Contents>
        </TextWrapper>
        {loading && <Spinner />}
      </Wrapper>
    </Container>
  );
};

export default ProductView;

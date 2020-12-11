import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Basket from "./components/Basket";

const App = () => {
  const [products, setProducts] = useState([]);
  const [basketData, setBasketData] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasketData(response);
  };

  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setBasketData(response);
  };

  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setBasketData(response);
  };

  useEffect(() => {
    if (!products.length) {
      fetchProducts();
    }
    if (!basketData.total_items) {
      fetchBasketData();
    }
  }, [products, basketData, basketData.total_items]);

  return (
    <Router>
      <div>
        <CssBaseline />
        <NavBar
          basketItems={basketData.total_items}
          totalCost={
            (basketData.subtotal &&
              basketData.subtotal.formatted_with_symbol) ||
            "00.00"
          }
        />
        <Switch>
          <Route exact path="/">
            <Products products={products} addProduct={addProduct} />
          </Route>
          <Route exact path="/basket">
            <Basket
              basketData={basketData}
              updateProduct={updateProduct}
              RemoveItemFromBasket={RemoveItemFromBasket}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

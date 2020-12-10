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

  const updateBasketData = async (productId) => {
    const response = await commerce.cart.add(productId, 1);
    setBasketData(response);
  };

  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId, 1);
    setBasketData(response);
  };

  useEffect(() => {
    if (!products.length) {
      fetchProducts();
    }
    fetchBasketData();
  }, [products, basketData]);

  return (
    <Router>
      <div>
        <CssBaseline />
        <NavBar basketItems={basketData.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} updateBasketData={updateBasketData} />
          </Route>
          <Route exact path="/basket">
            <Basket
              basketData={basketData}
              RemoveItemFromBasket={RemoveItemFromBasket}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

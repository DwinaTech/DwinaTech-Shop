import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <Router>
      <div>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route to="/">
            <Products products={products} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

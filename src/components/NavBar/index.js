import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "./DwinaTech-logo.png";
import "./style.css";

const NavBar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className="custom-title"
              color="inherit"
            >
              <img
                src={logo}
                alt="DwinaTech logo"
                height="25px"
                className="logo"
              />
            </Typography>
            {location.pathname === "/" && (
              <div className="cart-wrapper">
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart contents"
                  color="inherit"
                >
                  <Badge badgeContent={2} color="secondary">
                    <ShoppingCart className="custom-cart" />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;

import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./sony-tv.png";
import "./style.css";

const Banner = () => {
  return (
    <Container className="banner">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography className="title" variant="h1">
            Welcome to DwinaTech Shop
          </Typography>
          <Button className="shopping-button" href="#products">
            Shopping
          </Button>
        </Grid>
        <Grid className="brand" item xs={12} sm={6}>
          <img src={logo} alt="Brand-tv" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;

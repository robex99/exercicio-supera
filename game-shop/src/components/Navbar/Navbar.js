import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

export default function Navbar({ totalItems }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Link className={classes.link} to="/">
            <Typography
              variant="h6"
              className={classes.title}
              color="secondary"
            >
              <img
                src={logo}
                alt="logo"
                height="25px"
                className={classes.image}
              />
              GameShop
            </Typography>
          </Link>
          <div className={classes.grow} />
          <Link to="/cart">
            <div className={classes.button}>
              <IconButton aria-label="Ver carrinho" color="secondary">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

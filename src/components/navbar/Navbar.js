/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
  },
  logo: {
    color: "black",
    margin: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar variant="dense">
          <Typography className={classes.logo} variant="h6">
            Cryptocurrencies.com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

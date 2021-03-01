import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    nav: {
        marginBottom: '1rem',
    },
    cart:{
      flexGrow: 1
    }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Typography variant="h6">Ecommerce</Typography>
          </IconButton>
          <Typography variant="h6" className={classes.cart}>
            News
          </Typography>
          <ShoppingCart />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

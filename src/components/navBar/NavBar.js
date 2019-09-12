import React from 'react'
import { Link } from "react-router-dom";
import { 
  AppBar,
  Toolbar,
  Typography,
  Icon,
  IconButton
} from '@material-ui/core';
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    color: "#FF5252",
    marginRight: theme.spacing(3)
  },
  back: {
    backgroundColor: fade(theme.palette.common.white, 0.15)
  },  
  subTitle: {
    position: 'relative',
    color: "#707070",
    fontSize: 13
  },
  iconStyle: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: "#FF5252",
  }
}));

const NavBAr = () => {
  const classes = useStyles()
  return(
    <div className={classes.grow}>
      <AppBar className={classes.back} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/categorias" style={{ textDecoration: 'none', color: '#FF5252' }}> i<strong>Food</strong> </Link>
          </Typography>          
          <div className={classes.grow} />
          <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              className={classes.iconStyle}
          >
            <Icon > description </Icon>
          </IconButton>
          <Link to="/carrito" style={{ textDecoration: 'none', color: '#FF5252' }}> 
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.iconStyle}
            >
              <Icon > shopping_cart </Icon>
            </IconButton>
          </Link>
          <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              className={classes.iconStyle} 
            >
              <Icon > account_circle </Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBAr

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "#FF5252"
  },
}));

const CarritoVacio = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Typography className={classes.title} component="h1" variant="h3">
        Tú carrito está vacío!! :(
      </Typography>
      
    </div>
  )
}

export default CarritoVacio;

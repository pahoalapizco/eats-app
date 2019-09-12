import React, { useState, useEffect } from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {
  Icon,
  IconButton,
  MuiThemeProvider
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  card: {
    width: "85%", 
    margin: theme.spacing(5, 3, 0)
  },
  removeButtom: {
    fontSize: 30,
    color: '#FF5252',
    margin: theme.spacing(0, 7, 0, 5)
  },
  addButtom: {
    fontSize: 12,
    color: '#FF5252',
    margin: theme.spacing(0, 4, 0, 7)
  },
  title: {
    fontSize: 20,
    color: '#FF5252',
  },
  submit: {
    width: "85%", 
    margin: theme.spacing(2, 3, 0)
  }
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF5252",
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

const Agregar = ({ price, handleClick }) => {
  const [cantidad, setCantidad] = useState(1)
  const [total, setTotal] = useState(price)
  
  useEffect(() => {
    setTotal(price*cantidad)
  }, [cantidad]);

  const classes = useStyles();
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardActions>
            <IconButton 
              size="small" 
              className={classes.removeButtom}
              onClick={() => setCantidad(cantidad <= 1 ? 1 : cantidad-1)}
              disabled={(cantidad<=1) ? true : false}
            >
              <Icon> remove_circle </Icon>
            </IconButton>
            <Typography className={classes.title}>
              {cantidad}
            </Typography>
            <IconButton 
              size="small" 
              className={classes.addButtom}
              onClick={() => setCantidad(cantidad + 1)}
              >
              <Icon >
              add_circle
              </Icon>
            </IconButton>
          </CardActions>
        </Card>
        <Button
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary"
          onClick={() => handleClick({ cantidad, importe: total })}
        >
          Añadir al carrito 
          Total $ {total} MXN
        </Button>
      </MuiThemeProvider>
    </div>
  );
}

export default Agregar;
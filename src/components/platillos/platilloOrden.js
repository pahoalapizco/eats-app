import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {
  MuiThemeProvider
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    width: "90%", 
    margin: theme.spacing(1, 2, 0)
  },
  title: {
    color: '#FF5252',
    margin: theme.spacing(0, 2, 0)
  },
  platillo: {
    margin: theme.spacing(0, 2, 3)
  },
  importe: {
    display: 'flex',
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

const PlatilloOrden = ({ cantidad, platillo, importe }) => {
  
  const classes = useStyles();
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <strong className={classes.title}> {cantidad}x </strong> 
            <span className={classes.platillo}> {platillo} </span>
            <span className={classes.platillo}> $ {importe} </span>
          </Typography>
        </Card>
      </MuiThemeProvider>
    </div>
  );
}

export default PlatilloOrden;

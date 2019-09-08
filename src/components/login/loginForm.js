import React from "react";
import Button from "@material-ui/core/Button";
import { createMuiTheme , makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {  MuiThemeProvider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundColor: "#FF5252"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 0)
  },
  title: {
    color: "#FF5252"
  },
  SubRoot: {
    height: "80vh",
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

const LoginForm = ({ handlePassChange, handleEmailChange }) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        className={classes.root}
        alignItems={"center"}
        direction={"column"}
        justify={"center"}
      >
        <Grid className={classes.SubRoot} item xs={10} sm={8} md={5} component={Paper} elevation={10}>
          <div className={classes.paper}>
            <Typography className={classes.title} component="h1" variant="h5">
              i<strong>Food</strong> 
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePassChange}
              />
              <Button
                fullWidth
                variant="contained"
                className={classes.submit}
                color="primary"
              >
                Login
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Registrarse
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default LoginForm;

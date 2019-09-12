import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NavBAr from '../components/navBar/NavBar';
import Login from '../components/login/loginForm';
import Categorias from '../components/categorias/categorias';
import Platillos from '../components/platillos/index';
import { Scrollbars } from 'react-custom-scrollbars'
import DetallePlatillo from './../components/platillos/platillo';
import Carrito from './../components/carrito';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => <Component {...props} />}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      rest.userLogged === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
}


class Routing extends React.Component {
  render () {
    const { userLogged, handleLogged } = this.props
    const alto = userLogged ? 'calc(100vh - 64px)' : 'calc(100vh)'
    return(
      <Router>
        { userLogged && <NavBAr /> }
        <Scrollbars  style={{width: '100%', height:alto}}>
          <Switch>
            <PublicRoute
              exact
              path='/'
              component={() =>  <Login handleLogged={handleLogged} />}
            />
            <PublicRoute
              exact
              path='/platillo'
              component={() =>  <DetallePlatillo />}
            />
            <PublicRoute
              exact
              path='/carrito'
              component={() =>  <Carrito />}
            />
            <PrivateRoute
              path="/categorias"
              userLogged={userLogged}
              component={() => <Categorias />}
            />
            <PrivateRoute
              path="/platillos"
              userLogged={userLogged}
              component={() => <Platillos />}
            />
          </Switch>
        </Scrollbars>
      </Router>
    );
  }
}

export default Routing;
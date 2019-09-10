import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NavBAr from '../components/navBar/NavBar';
import Login from '../components/login/loginForm';
import Categorias from '../components/categorias/categorias';
import Platillos from '../components/platillos/platillos';
import { Scrollbars } from 'react-custom-scrollbars'
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => <Component {...props} />}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.usserLogged === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);


class Routing extends React.Component {
  render () {
    const { usserLogged } = this.props
    const alto = usserLogged ? 'calc(100vh - 64px)' : 'calc(100vh)'
    return(
      <Router>
        { usserLogged && <NavBAr /> }
        <Scrollbars  style={{width: '100%', height:alto}}>
          <Switch>
            <PublicRoute
              exact
              path='/'
              component={() =>  <Login />}
            />
            <PrivateRoute
              path="/categorias"
              usserLogged={usserLogged}
              component={() => <Categorias />}
            />
            <PrivateRoute
              path="/platillos"
              usserLogged={usserLogged}
              component={() => <Platillos />}
            />
          </Switch>
        </Scrollbars>
      </Router>
    );
  }
}

export default Routing;
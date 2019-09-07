import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Erro404 from './components/404/error404';
import Login from './components/login/login';
import Registro from './components/registro/registro';
import Inicio from './components/inicio/inicio';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registro" component={Registro} />
          <Route path="/inicio" component={Inicio} />
          <Route component={Erro404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

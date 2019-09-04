import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Categorias from './components/categorias/categorias';
import Restaurantes from './components/restaurantes/restaurantes';
import Erro404 from './components/404/error404';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Categorias} />
          <Route path="/restaurantes" component={Restaurantes} />
          <Route component={Erro404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

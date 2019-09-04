import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurantes from './../restaurantes/restaurantes';
import Categorias from './../categorias/categorias';
import Erro404 from './../404/error404';
import NavBar from '../navBar/NavBar';
import { Scrollbars } from 'react-custom-scrollbars';

const Inicio = () => (
    <div >
      <NavBar />
      <Route render={()=> (
        <Scrollbars  style={{width: '100%', height:'calc(100vh - 64px)'}}>
          <Switch>
            <Route exact path="/inicio/categorias" component={Categorias} />
            <Route exact path="/inicio/restaurantes" component={Restaurantes} />
            <Route exact path="/inicio/**" component={Erro404} />
          </Switch>
        </Scrollbars>
      )} />
        
    </div>
);

export default Inicio

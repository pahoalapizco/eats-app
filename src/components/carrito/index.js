import React from 'react';
import { withRouter } from "react-router";
import CarritoVacio from '../utils/carritoVacio';
import Carrito from './carrito';

/**
 * @TODO: Query para obtener carrito guardado (buzón)
 * @TODO: Si hay carrito agregar nuevos elementos agregados 
 * @TODO: Hacer la mutation addCarrito.
 * @TODO: Finalizar pedido.
 * @TODO: -- EN PEDIDOR: Hacer componentes para pedidos y repartidor!!!
 * @TODO: Sigen pendientes las rutas publicas y privadas >..<
 */
const CarritoContainer = ({ history }) => {
  const carritoRender = history.location.state ?  <Carrito /> : <CarritoVacio />
  return(
    <div>
      {carritoRender}
    </div>
  );
}

export default withRouter(CarritoContainer);

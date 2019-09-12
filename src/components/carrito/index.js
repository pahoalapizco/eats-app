import React from 'react';
import { withRouter } from "react-router";
import CarritoVacio from '../utils/carritoVacio';
import Carrito from './carrito';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../utils/loading';

const GET_CARRITO =  gql`
{
  getCarrito {
    _id
    total
    restaurant{
      _id
      name
      open
      closed
      address
    }
    detail {
      platillo {
        _id
      }
      cantidad
      importe
    }
  }
}
`;

/**
 * @TODO: Si hay carrito agregar nuevos elementos agregados 
 * @TODO: Hacer la mutation addCarrito.
 * @TODO: Finalizar pedido.
 * @TODO: -- EN PEDIDOR: Hacer componentes para pedidos y repartidor!!!
 * @TODO: Sigen pendientes las rutas publicas y privadas >..<
 */
const CarritoContainer = ({ history }) => {
  const { loading, error, data } = useQuery(GET_CARRITO);
  let carrito;

  if (loading) return (<Loading />);

  if (data.getCarrito && history.location.state) {
    carrito = {
      restaurant: data.getCarrito.restaurant._id,
      total: data.getCarrito.total,
      detail: []
    };
    // Agrega el detallado de BD al nuevo carrito
    data.getCarrito.detail.forEach(d => {
      carrito.detail.push({
        platillo: d.platillo._id,
        cantidad: d.cantidad,
        importe: d.importe
      });
    });    

    // Agrega detallado seleccionado
    history.location.state.carrito.detail.forEach(d => {
      carrito.detail.push({
        platillo: d.platillo,
        cantidad: d.cantidad,
        importe: d.importe
      });
    });    
    // calcula el nuevo total.
    carrito.total +=  history.location.state.carrito.total
  }  else {
    carrito = history.location.state ? history.location.state.carrito : data.getCarrito;
  }

  console.log('carrito: ',  carrito);
  console.log('state-carrito', history.location.state.carrito);

  const carritoRender = carrito ?  <Carrito /> : <CarritoVacio />
  return(
    <div>
      {carritoRender}
    </div>
  );
}

export default withRouter(CarritoContainer);

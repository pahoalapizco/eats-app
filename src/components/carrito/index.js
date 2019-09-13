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
        name
      }
      cantidad
      importe
    }
  }
}
`;

/**
 * @TODO: Hacer la mutation addCarrito.
 * @TODO: Finalizar pedido.
 * @TODO: -- EN PEDIDOR: Hacer componentes para pedidos y repartidor!!!
 * @TODO: Sigen pendientes las rutas publicas y privadas >..<
 */
const CarritoContainer = ({ history }) => {
  const { loading, data, error } = useQuery(GET_CARRITO);

  let carrito = null;

  if (loading) return (<Loading />);
  if (error) return (<p> Ocurrió un error ... :c </p>);

  if (data.getCarrito && history.location.state) {
    carrito = {
      ...data.getCarrito
    };
    // Agrega detallado seleccionado
    history.location.state.carrito.detail.forEach(d => {
      carrito.detail.push(d);
    });    
    // calcula el nuevo total.
    carrito.total +=  history.location.state.carrito.total
  }  else {
    carrito = history.location.state ? history.location.state.carrito : data.getCarrito;
  }

  const carritoRender = carrito ?  <Carrito carrito={carrito}/> : <CarritoVacio />
  return(
    <div>
      {carritoRender}
    </div>
  );
}

export default withRouter(CarritoContainer);

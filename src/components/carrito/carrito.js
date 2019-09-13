import React from 'react';
import Restaurante from '../restaurante/restaurante';
import PlatilloOrden from '../platillos/platilloOrden';

const Carrito = ({ carrito }) => {
  const { restaurant, total, detail } = carrito;
  return(
    <div>
      <Restaurante 
        name={restaurant.name}
        address={restaurant.address}
        open={restaurant.open}
        closed={restaurant.closed}
      />
      {
        detail.map(p => {
          return (
            <PlatilloOrden 
              key={p.platillo._id}
              cantidad={p.cantidad}
              platillo={p.platillo.name}
              importe={p.importe}
            />
          );
        })
      }
    </div>
  )
}

export default Carrito;
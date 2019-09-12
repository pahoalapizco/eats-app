import React from 'react';
import Restaurante from '../restaurante/restaurante';
import PlatilloOrden from '../platillos/platilloOrden';

const Carrito = () => {
  const carrito = {
    "data": {
      "getCarrito": {
        "_id": "5d79f2656d4ea065ef46bec7",
        "usuario": {
          "name": "test"
        },
        "restaurant": {
          "name": "La Mexicana",
          "address": "La Palma, Navolato",
          "open": "10:00 hrs",
          "closed": "17:00 hrs",
          "phonenumber": null
        },
        "total": 200,
        "detail": [
          {
            "platillo": {
              "_id": "5d6851143f0409452458aef9",
              "name": "Tacos dorador",
              "price": 80
            },
            "cantidad": 1,
            "importe": 80
          },
          {
            "platillo": {
              "_id": "5d6851ad3f0409452458aefa",
              "name": "Tacos al pastor",
              "price": 60
            },
            "cantidad": 2,
            "importe": 120
          }
        ]
      }
    }
  };
  const { restaurant, total, detail } = carrito.data.getCarrito;
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
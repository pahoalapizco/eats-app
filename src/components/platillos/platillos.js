import React from 'react'
import Platillo from './platillo';

const Platillos = () => { 
   return (
    <div>
      {
        platillos.data.getPlatillos.map(platillo => {
          return (
            <Platillo 
              key={platillo._id}
              name={platillo.name}
              description={platillo.description}
              price={platillo.price}
              img={platillo.img}
            />
          )
        })
      }
    </div>
  )
}

export default Platillos

/**
 * 
 */
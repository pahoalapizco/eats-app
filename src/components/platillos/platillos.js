import React from 'react'
import Platillo from './platillo';
import { withRouter } from "react-router";

const Platillos = ({ location }) => { 
  const platillos = location.state.platillos;
   return (
    <div>
      {
        platillos.map(platillo => {
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

export default withRouter(Platillos);

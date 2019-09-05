import React from 'react'
import Categoria from './categoria';

const Categorias = () => {
    return (
      <div> 
        {
          categorias.data.getCategoria.map(categoria => {
            return (
              <Categoria 
                key={categoria._id}
                img={categoria.img}
                name={categoria.name}
              />
            );
          })
        }     
        
      </div>
    )
}

export default Categorias

import React from 'react'
import Categoria from './categoria';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../utils/loading';

const GET_CATEGORIAS = gql`
  {
    getCategoria {
      _id
      name
      img
    }
  }
`;

const Categorias = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIAS);
  
  if (loading) return <Loading />
  if (error) return <p> A ocurrido un error.. </p>

    return (
      <div> 
        {
          data.getCategoria.map(categoria => {
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
    );
}

export default Categorias

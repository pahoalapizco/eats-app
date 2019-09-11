import React, { useEffect } from 'react';
import Routing from './config/router';
import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
import { Query } from 'react-apollo';
import client from './apollo';
import Loading from './components/utils/loading'
// import { Redirect } from 'react-router-dom'

const USER_LOGED_QUERY = gql`
query {
  loginState @client {
    userLogged
  }
}
`;

class App extends React.Component {
  handleLogged = (usuarioLogeado = true) => {
    client.mutate({
      mutation: gql`
        mutation setUserLogged($logged: Boolean) {
          setUserLogged(logged: $logged) @client{
              data
          }
        }
      `,
      variables: { logged: usuarioLogeado }
    })
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    if (token) this.handleLogged();
  }
  render(){
    return (
      <div>
       <Query query={USER_LOGED_QUERY}>
       {
         ({ data, loading }) => {
            if (loading) return <Loading />
            return (
              <Routing 
                  handleLogged={this.handleLogged}
                  userLogged={data.loginState.userLogged}
              />
            );
          }
        }
        </Query>
      </div>
    );
  }
}

export default App;

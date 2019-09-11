import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
// Manejo de cache
import { withClientState } from 'apollo-link-state';
import defaults from './defaults';
import resolvers from './resolvers';

const HTTP_HOST = 'http://eats-server-deploy.gv9q3edike.us-west-2.elasticbeanstalk.com/graphql';
const cache = new InMemoryCache();
const httpLink = new createUploadLink({
  uri: HTTP_HOST,
});
const stateLink = withClientState({
  cache,
  defaults,
  resolvers
});

const AuthLink = (operation, next) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    operation.setContext(context => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: token,
      },
    }));
  }
  return next(operation);
};

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path, extensions }) => {
          if (extensions.code === 'UNAUTHENTICATED') {
            localStorage.removeItem('jwt');
            client.resetStore()
          }
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }
    }),
    stateLink,
    AuthLink,
    httpLink,
  ]),
  cache,
});

export default client;
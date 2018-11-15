import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Root from './Root';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  request: async operation => {
    const token = await localStorage.getItem('token');
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

const App = () => (
  <ApolloHooksProvider client={client}>
    <Root />
  </ApolloHooksProvider>
);
export default App;

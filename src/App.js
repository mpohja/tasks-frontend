import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Tasks from './components/tasks/Tasks';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

const App = () => (
  <ApolloHooksProvider client={client}>
    <div>
      <h2>Tasks</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Tasks />
      </Suspense>
    </div>
  </ApolloHooksProvider>
);
export default App;

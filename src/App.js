import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Tasks from './components/tasks/Tasks';
import { Pane, Heading } from 'evergreen-ui';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

const App = () => (
  <ApolloHooksProvider client={client}>
    <Pane padding={16}>
      <Heading>Tasks</Heading>
      <Suspense fallback={<div>Loading...</div>}>
        <Tasks />
      </Suspense>
    </Pane>
  </ApolloHooksProvider>
);
export default App;

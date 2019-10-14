import React from 'react';
import {WebSocketLink} from 'apollo-link-ws';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import Conversations from './screens/conversations';

export default props => {
  const wsLink = new WebSocketLink({
    uri: 'ws://192.168.43.194:4100/graphql',
    options: {
      reconnect: true,
    },
  });

  const client = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
    resolvers: {},
  });
  console.log('props:', props);
  return (
    <ApolloProvider client={client}>
      <Conversations {...props} client={client} />
    </ApolloProvider>
  );
};

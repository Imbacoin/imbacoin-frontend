import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

function getHttpLink(httpURL, token) {
  if (token) {
    return new HttpLink({
      uri: httpURL,
      fetch,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return new HttpLink({
      uri: httpURL,
      fetch,
    });
  }
}

function getWsLink(wssURL, token) {
  const wsLink = new WebSocketLink({
    uri: wssURL,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  });

  return wsLink;
}

function getSplittedLink(wssURL, httpURL, token) {
  const wsLink = getWsLink(wssURL, token);
  const httpLink = getHttpLink(httpURL, token);
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  );

  return splitLink;
}

export default function makeApolloClient(httpURL, wssURL, splitted, token) {
  let finalLink;
  if (splitted) finalLink = getSplittedLink(wssURL, httpURL, token);
  else finalLink = getHttpLink(httpURL, token);
  const client = new ApolloClient({
    link: finalLink,
    cache: new InMemoryCache(),
  });

  return client;
}

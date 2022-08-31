import { split, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

function getHttpLink(httpURL, token) {
  const httpLink = new HttpLink({
    uri: httpURL,
    fetch,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return httpLink;
}

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function makeApolloClient(token = null, httpURL) {
  let finalLink = getHttpLink(httpURL, token);

  let client = new ApolloClient({
    link: finalLink,
    cache: new InMemoryCache(),
  });

  return client;
}

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

function getHttpLink(httpURL) {
  return new HttpLink({
    uri: httpURL,
    fetch,
    // headers: {
    //   'x-hasura-admin-secret': process.env.PAYMENT_API_JWT_SECRET,
    // },
  });
}

export default function makeApolloClient(httpURL) {
  const httpLink = getHttpLink(httpURL);
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return client;
}

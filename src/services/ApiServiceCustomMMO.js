import makeApolloClient from './makeApolloClient.js';
import gql from 'graphql-tag';

const GET_SHOP_CONFIG_BY_CUSTOMERID = gql`
  query GetShopConfigByCustomerId($customerId: String!) {
    getShopConfigByCustomerId(customerId: $customerId) {
      coinRate
      customerId
      facebookUrl
      gmailUrl
      instagramUrl
      name
      telegramUrl
      twitterUrl
      viberUrl
      whatsappUrl
    }
  }
`;

class ApiService {
  client;

  constructor(client) {
    this.client = client;
  }

  getShopConfigByCustomerId = async (customerId) => {
    try {
      const result = await this.client.query({
        query: GET_SHOP_CONFIG_BY_CUSTOMERID,
        variables: {
          customerId,
        },
      });
      return result.data.getShopConfigByCustomerId;
    } catch (err) {
      console.log(err);
    }
  };
}

const client = makeApolloClient(
  process.env.REACT_APP_MMO_URL,
  null,
  false,
  null
);
const apiService = new ApiService(client);
export { client, apiService };

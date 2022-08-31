import gql from 'graphql-tag';

class ApiServiceHasura {
  constructor(client) {
    this.client = client;
  }

  GET_ORDERS = gql`
    query Orders {
      Order {
        id
        customerEmail
        orderSize
        status
        recipientCredentials {
          id
          login
          gauth
          backups
          password
          customerId
        }
      }
    }
  `;

  getOrders = async () => {
    try {
      const result = await this.client.query({
        query: this.GET_ORDERS,
      });
      return result.data.Order;
    } catch (err) {
      console.log('ERROR:', err);
    }
  };
}

export default ApiServiceHasura;

import gql from 'graphql-tag';
import makeApolloClient from './utils/makeApolloClient';

class ApiService {
  constructor(client) {
    this.client = client;
  }

  LOGIN_USER = gql`
    mutation LoginUser($token: String!, $email: String) {
      loginUser(token: $token, email: $email) {
        id
        token
        customerId
        isBanned
        permissions
      }
    }
  `;

  loginUser = async (token, email) => {
    try {
      const result = await this.client.mutate({
        mutation: this.LOGIN_USER,
        variables: {
          token,
          email,
        },
      });
      console.log(result);
      return result.data.loginUser;
    } catch (err) {
      console.log('ERROR:', err);
    }
  };
}

console.log(process.env.REACT_APP_MMO_URL);
const client = makeApolloClient(null, process.env.REACT_APP_MMO_URL);
const apiService = new ApiService(client);
export default apiService;

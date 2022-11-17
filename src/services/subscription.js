import gql from 'graphql-tag';

const SUBSRIBE_ORDER_BY_PAYMENT_ID = gql`
  subscription SubscribeOrderByPaymentId($paymentId: String!) {
    Order(where: { paymentId: { _eq: $paymentId } }) {
      id
      orderSize
      paymentId
      customerId
    }
  }
`;

export default SUBSRIBE_ORDER_BY_PAYMENT_ID;
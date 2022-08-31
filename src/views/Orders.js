import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trans, t } from '@lingui/macro';
import login from '../services/utils/loginUser';
import makeApolloClient from '../services/utils/makeApolloClient';
import ApiServiceHasura from '../services/ApiHasuraService';

const Orders = () => {
  let renderedOrders = [];
  const [email, setEmail] = useState('');
  const [auth = false, setAuth] = useState();
  const [orders = [], setOrders] = useState();
  const [id = '', setId] = useState();

  useEffect(async () => {
    if (localStorage.getItem('user')) {
      await checkOrders();
      setAuth(true);
    }
  });

  const checkOrders = async () => {
    const token = JSON.parse(localStorage.user).token;
    const did = JSON.parse(localStorage.user).did;
    setId(did);
    const client = makeApolloClient(
      token,
      process.env.REACT_APP_HASURA_MMO_URL
    );
    const apiService = new ApiServiceHasura(client);
    const curOrders = await apiService.getOrders();
    if (orders.length == 0) setOrders(curOrders);

    console.log(orders);
  };

  const payWithCard = async () => {
    await login(email);
    if (localStorage.getItem('user')) await checkOrders();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleInputEmail = async (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <div className="d-grid gap-2" show={auth}>
        <Button
          className="modalButton"
          variant="primary"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Buy coins
        </Button>
      </div>
      {!auth ? (
        <Form className="Form" noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <Trans>{t`Enter your email`}</Trans>
            </Form.Label>
            <Form.Control
              disabled={auth}
              type="email"
              onChange={handleInputEmail}
              value={email}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              className="modalButton"
              variant="primary"
              onClick={payWithCard}
            >
              Login
            </Button>
          </div>
        </Form>
      ) : null}
      {auth ? <h5>Orders:</h5> : null}
      {auth
        ? orders.forEach((order) => {
            console.log(order);
            renderedOrders.push(
              <Card style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title>{order.status}</Card.Title>
                  <Card.Text>
                    <a
                      target="_blank"
                      href={`https://chattest.mmo.delivery/order/${id}/${order.id}`}
                    >
                      Check your order
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })
        : null}
      {renderedOrders}
    </div>
  );
};

export default Orders;

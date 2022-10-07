import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Trans, t } from '@lingui/macro';
import { activate } from '../services/utils/activate';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const WrapperMain = () => {
  return <PageFunction />;
};

const PageFunction = () => {
  const [coinsAmount = 100000, setCoinsAmount] = useState();
  const [toPay = 10, setToPay] = useState();
  const [email, setEmail] = useState('');
  const [formFilled = false, setFormFilled] = useState();

  const changeLanguage = async (language) => {
    await activate(language);
  };

  // const paySuccessful = async (email, toPay) => {
  //   let data = {
  //     email,
  //     amount: toPay,
  //   };
  //   const request = fetch(
  //     `${process.env.REACT_APP_PAYMENT_SERVER}successPayment`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   ).then((response) => {
  //     return response.json();
  //   });

  //   let response = await request;
  // };

  const payWithCard = async () => {
    setFormFilled(true);
  };

  const handleInputCoins = async (event) => {
    setCoinsAmount(event.target.value);
    setToPay(Math.ceil(event.target.value / 10000));
  };

  const handleInputEmail = async (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <div className="d-grid gap-2" show={formFilled}>
        <Button
          className="modalButton"
          variant="primary"
          onClick={() => {
            window.location.href = '/orders';
          }}
        >
          Show my orders
        </Button>
      </div>
      <Form className="Form" noValidate>
        <Form.Group className="mb-3">
          <div>
            <img
              onClick={() => changeLanguage('en', true)}
              src="/united-kingdom.png"
              className="country-icons"
              alt="..."
            />
            <img
              src="/russia.png"
              onClick={() => changeLanguage('ru', true)}
              className="country-icons"
              alt="..."
            />
            <img
              src="/germany.png"
              onClick={() => changeLanguage('de', true)}
              className="country-icons"
              alt="..."
            />
          </div>
          <Form.Label>The coins you will get</Form.Label>
          <Form.Control
            disabled={formFilled}
            type="number"
            value={coinsAmount}
            onChange={handleInputCoins}
            placeholder="Fifa coins"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>The money you will pay</Form.Label>
          <Form.Control disabled type="number" value={toPay} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter your email</Form.Label>
          <Form.Control
            disabled={formFilled}
            type="email"
            onChange={handleInputEmail}
            value={email}
          />
        </Form.Group>
        {!formFilled ? (
          <div className="d-grid gap-2">
            <Button
              className="modalButton"
              variant="primary"
              onClick={payWithCard}
            >
              Pay with card
            </Button>
          </div>
        ) : null}
        {/* <div className="cardInput" id="card-element"></div> */}
        {formFilled ? (
          <PayPalScriptProvider
            options={{
              'client-id': process.env.REACT_APP_PAYPAL_ID,
              vault: true,
            }}
          >
            <PayPalButtons
              createOrder={async (data, actions) => {
                const res = await fetch(
                  process.env.REACT_APP_PAYMENT_SERVER +
                    'orders/create/' +
                    toPay,
                  {
                    method: 'post',
                  }
                );
                const orderData = await res.json();
                console.log('orderData: ', orderData);
                return orderData.id;
              }}
              onApprove={async (data, actions) => {
                const res = await fetch(
                  process.env.REACT_APP_PAYMENT_SERVER +
                    'orders/' +
                    data.orderID +
                    '/capture/' +
                    email,
                  {
                    method: 'post',
                  }
                );
                const orderData = await res.json();
                var errorDetail =
                  Array.isArray(orderData.details) && orderData.details[0];
                if (
                  errorDetail &&
                  errorDetail.issue === 'INSTRUMENT_DECLINED'
                ) {
                  return actions.restart(); // Recoverable state, per:
                }
                if (errorDetail) {
                  var msg = 'Sorry, your transaction could not be processed.';
                  if (errorDetail.description)
                    msg += '\n\n' + errorDetail.description;
                  if (orderData.debug_id)
                    msg += ' (' + orderData.debug_id + ')';
                  return alert(msg); // Show a failure message (try to avoid alerts in production environments)
                }
                var transaction =
                  orderData.purchase_units[0].payments.captures[0];
                alert(
                  'Transaction ' +
                    transaction.status +
                    ': ' +
                    transaction.id +
                    '\n\nSee console for all available details'
                );
              }}
            />
          </PayPalScriptProvider>
        ) : null}
        {/* {formFilled ? (
          <div className="d-grid gap-2" show={formFilled}>
            <Button className="modalButton" variant="primary" type="submit">
              Purchase
            </Button>
          </div>
        ) : null} */}
      </Form>
    </div>
  );
};

export default WrapperMain;

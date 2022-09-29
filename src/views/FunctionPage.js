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
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: toPay,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  console.log(details.purchase_units[0].amount.value);
                  // paySuccessful(email, details.purchase_units[0].amount.value);
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                });
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

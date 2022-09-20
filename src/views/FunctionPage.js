import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { Trans, t } from '@lingui/macro';
import { activate } from '../services/utils/activate';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
} from '@paypal/react-paypal-js';

const clientSecret =
  'pk_test_51IY80XGdYFPvGwAahWAIdlKSo0PX60zvqEXKp8tBrJ43Sk4VxLMdF8LfTczCsq0neAddo1hTCPsWJAmnpQJFn9Mk00UVSjHAhO';

const stripePromise = loadStripe(clientSecret);

const WrapperMain = () => {
  return (
    <Elements stripe={stripePromise}>
      <PageFunction />
    </Elements>
  );
};

let card;

const PageFunction = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [coinsAmount = 100000, setCoinsAmount] = useState();
  const [toPay = 10, setToPay] = useState();
  const [email, setEmail] = useState('');
  const [formFilled = false, setFormFilled] = useState();

  const changeLanguage = async (language) => {
    await activate(language);
  };

  const paySuccessful = async (email) => {
    let data = {
      email,
      amount: coinsAmount,
    };
    const request = fetch('http://localhost:4242/successPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    });

    let response = await request;
  };

  const payWithCard = async () => {
    setFormFilled(true);
    // await apiService.loginUser()
    card = elements.create('card');
    card.mount('#card-element');
    console.log(card);
  };

  const getClientSecret = async (purchase) => {
    const request = fetch('http://localhost:4242/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchase),
    }).then((response) => {
      return response.json();
    });

    let response = await request;
    console.log(response.clientSecret);
    return response.clientSecret;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    let purchase = {
      coins: toPay,
    };

    const clientSecret = await getClientSecret(purchase);

    console.log(clientSecret);
    console.log(card);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      })
      .then(function (result) {
        if (result.error) {
          // Show error to your customer
          console.log('Error: ' + result.error.message);
        } else {
          // The payment succeeded!
          console.log('Success: ' + result.paymentIntent.id);
          paySuccessful(email);
        }
      });
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
      <Form className="Form" noValidate onSubmit={handleSubmit}>
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
          <Form.Label>
            <Trans>{t`The coins you will get`}</Trans>
          </Form.Label>
          <Form.Control
            disabled={formFilled}
            type="number"
            value={coinsAmount}
            onChange={handleInputCoins}
            placeholder="Fifa coins"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <Trans>{t`The money you will pay`}</Trans>
          </Form.Label>
          <Form.Control disabled type="number" value={toPay} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <Trans>{t`Enter your email`}</Trans>
          </Form.Label>
          <Form.Control
            disabled={formFilled}
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
            <Trans>{t`Pay with card`}</Trans>
          </Button>
        </div>
        <div className="cardInput" id="card-element"></div>
        <PayPalScriptProvider options={{ 'client-id': 'test' }}>
          <PayPalButtons style={{ layout: 'horizontal' }} />
        </PayPalScriptProvider>
        <PayPalScriptProvider
          options={{
            'client-id': 'your-client-id',
            'data-client-token': 'your-data-client-token',
          }}
        >
          <PayPalHostedFieldsProvider
            createOrder={() => {
              // Here define the call to create and order
              return fetch('/your-server-side-integration-endpoint/orders')
                .then((response) => response.json())
                .then((order) => order.id)
                .catch((err) => {
                  // Handle any error
                });
            }}
          >
            <PayPalHostedField
              id="card-number"
              hostedFieldType="number"
              options={{ selector: '#card-number' }}
            />
            <PayPalHostedField
              id="cvv"
              hostedFieldType="cvv"
              options={{ selector: '#cvv' }}
            />
            <PayPalHostedField
              id="expiration-date"
              hostedFieldType="expirationDate"
              options={{
                selector: '#expiration-date',
                placeholder: 'MM/YY',
              }}
            />
            {formFilled ? (
              <div className="d-grid gap-2" show={formFilled}>
                <Button className="modalButton" variant="primary" type="submit">
                  Purchase with paypal
                </Button>
              </div>
            ) : null}
          </PayPalHostedFieldsProvider>
        </PayPalScriptProvider>
        {formFilled ? (
          <div className="d-grid gap-2" show={formFilled}>
            <Button className="modalButton" variant="primary" type="submit">
              <Trans>{t`Purchase`}</Trans>
            </Button>
          </div>
        ) : null}
      </Form>
    </div>
  );
};

export default WrapperMain;

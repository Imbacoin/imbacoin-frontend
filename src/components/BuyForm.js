import React, { useEffect, useRef, useState } from 'react';
 import {PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer} from '@paypal/react-paypal-js';
import bg_card_under_player from '../images/bg_card_under_player.png';
import bg_card_under_player_bg from '../images/bg_card_under_player_bg.png';
import { NumericFormat } from 'react-number-format';
// import back_icon from '../images/back_icon.svg';
import coins_img from '../images/coins.svg';
import dollar from '../images/lang/dollar.svg';
import payopLogo from '../images/payoplogo.svg';
import { apiService } from '../services/ApiService';
import { Snackbar } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {invoiceOptions, signatureOptions} from './InvoiceOptions';
import fetchUrl from '../services/fetchUrl';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';
// import paypal from '../images/paypal.png';
// import gsap from 'gsap';
// import SearchBar from './searchBar';

function BuyForm({back_to_main}) {
  const payOpForm  = useRef(null)
  const formik_wrapper_Ref = useRef();
  let location = useLocation();
  // const tl_formik_wrapper = useRef();
  const maxCoins = 20000000
  const minMoney = 1
  const [coinAmount, setAmount] = useState(0);
  const [coinRate, setRate] = useState(0);
  const [moneyAmount, setMoneyAmount] = useState(10);
  const [shopConfig, setShopConfig] = useState(''); 
  const [alertOpen, setAlertOpen] =  useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [transition, setTransition] = useState(undefined);
  const [backdropOpen, setBackdropOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const vertical = 'top'
  const horizontal = 'center'

  useEffect(() => {

      // React advises to declare the async function directly inside useEffect
      async function getShopConfig() {
        const shopConfigFromApi = await apiService.getShopConfigByCustomerId(
          process.env.REACT_APP_CUSTOMER_ID
        );
        setShopConfig(shopConfigFromApi);
        setRate(shopConfigFromApi.coinRate);
        console.log('coinrate is ?',  shopConfigFromApi.coinRate)
        setAmount(shopConfigFromApi.coinRate * minMoney)
        setMoneyAmount(minMoney)
      }
  
      // You need to restrict it at some point
      // This is just dummy code and should be replaced by actual
      if (!shopConfig) {
        getShopConfig();
      }
    // tl_formik_wrapper.current = gsap.timeline({ paused: true });
    // tl_formik_wrapper.current.to(formik_wrapper_Ref.current, {
    //   x: -50,
    //   autoAlpha: 0,
    //   ease: 'power3.inOut',
    // });
    // tl_formik_wrapper.current.to('.options_wrapper', {
    //   left: '50px',
    //   autoAlpha: 1,
    //   ease: 'power3.inOut',
    // });
    // tl_formik_wrapper.current.to('.paymentEl', {
    //   x: 0,
    //   opacity: 1,
    //   duration: 1,
    //   ease: 'power2.out',
    // });
  }, [coinRate]);

  // const showAllOptions = () => {
  //   if (!formik_wrapper_Ref.current.classList.contains('active')) {
  //     formik_wrapper_Ref.current.classList.add('active');
  //     tl_formik_wrapper.current.timeScale(1).play();
  //   } else {
  //     formik_wrapper_Ref.current.classList.remove('active');
  //     tl_formik_wrapper.current.timeScale(2).reverse();
  //   }
  // };
  // const closeAllOptions = () => {
  //   formik_wrapper_Ref.current.classList.remove('active');
  //   tl_formik_wrapper.current.timeScale(2).reverse();
  // };

  // const payments = [
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  //   { name: 'Paypal', img: paypal },
  // ];
  const amountRef = useRef(coinAmount);
  const moneyAmountRef = useRef(moneyAmount);

  useEffect(() => {
    amountRef.current = coinAmount;
    moneyAmountRef .current = moneyAmount;
  }, [coinAmount, moneyAmount]);
   
  let coins =  minMoney  * coinRate
  let money = minMoney

 


  const handleAlert = (Transition) => {
     
    setTransition(() => Transition);
    setAlertOpen(true);
  };


  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const prepareAmount = (myAmount, type)=> {
    
    const numonly = /^[0-9\b]+$/;

    if (myAmount === '' || numonly.test(myAmount)) {
        
      if (type === 'money') { 
        coins = myAmount * coinRate
        money = myAmount
      }
       
      else { 
        coins = myAmount 
        money = myAmount / coinRate
      }

   if (coins >  maxCoins) { 
      coins =  maxCoins
      money = coins / coinRate
   }

 /*  if (money <  minMoney) { 
    coins =   minMoney * coinRate
    money = minMoney

    } */
    
    setAmount(coins)
    setMoneyAmount(money)
    }   
  }

  function TransitionUp(props) {
    return <Slide {...props} direction="up" vertical="bottom"  horizontal="right"/>;
  }

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }
  


  const sendPayment = async (e) => { 
    
    console.log('sending payment')
    if(moneyAmount < minMoney) { 
      
      setValidationMessage('Minimum amount is $' + minMoney)
      handleAlert(TransitionDown) 
      return
  }

  if(buyerEmail.length < 1) { 
     
    setValidationMessage('Please enter your  E-mail address')
    handleAlert(TransitionDown) 
    return
}

const emailpattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

if( !emailpattern.test(buyerEmail)) {

  setValidationMessage('This is not a valid e-mail.')
    handleAlert(TransitionDown) 
    return
}
 

 
    setBackdropOpen(true)
    

    invoiceOptions.amount =    '' + moneyAmount 
    invoiceOptions.email =  buyerEmail
    invoiceOptions.domain = 'https://' + window.location.hostname
    console.log( JSON.stringify(invoiceOptions))

  let invoiceID = await  fetchUrl(invoiceOptions,  process.env.REACT_APP_PAYOP_CREATE_INVOICE_URL )

  
  
  console.log( invoiceID.invoiceId)

  if(invoiceID.invoiceId){ 
      window.location = "https://checkout.payop.com/en/payment/invoice-preprocessing/" +  invoiceID.invoiceId
  setBackdropOpen(false)
   }
  else  { 

    setValidationMessage('There was an error while preparing your order')
    handleAlert(TransitionDown) 
    setBackdropOpen(false)
  }
}

 
  

  return (
    <div className="buy_form_wrap">
      <div className="posr">
        <div className="bg_ball_top"></div>
        <div className="bg_ball_bottom"></div>
        <div className="middle_box">
          <div className="col p50">
            <div className="card">
              <img
                src={bg_card_under_player_bg}
                alt=""
                style={{ height: '102%', top: '28vh' }}
              />
              <img src={bg_card_under_player} alt="" />
            </div>
          </div>
          <div className="col p50">
            <div
                className="back_to_main"
                onClick={back_to_main}
            >
              <span></span>
              <span></span>
            </div>
           
            <div className="formik_wrapper" ref={formik_wrapper_Ref}>
                    <form>
                      <div>The coins you will get</div>
                      <div className="coins_value_wrap">
                        <div className="coins_value">
                        <NumericFormat value={coinAmount} displayType="text"  thousandSeparator="," />
                           </div>
                        <div className="coins">
                          <img src={coins_img} alt="" />
                        </div>
                      </div>
                      <input
                        type="range"
                        id="coins"
                        name="coins"
                        min={coinRate * minMoney}
                        max={maxCoins}
                        step="100"
                        value={coinAmount}
                        onChange={(e) => {prepareAmount(e.target.value, 'coins')}}
                      />
                      <label htmlFor="money">The money you want to pay</label>
                      <div className="money_wrap">
                        <input  className="inputField" value={moneyAmount} onChange={(e) => {prepareAmount(e.target.value, 'money')}}  />
                        <img className="dollar" src={dollar} alt=""/>
                      </div>
                      <label htmlFor="money">The coins you want to buy</label>
                      <div className="money_wrap">
                      <input     className="inputField" value={coinAmount} onChange={(e) => {prepareAmount(e.target.value, 'coins')}}  />
                      </div>
                      
                     <div  className="payment-form-wrapper">
                      
                   

      
                        <label htmlFor="money">Your e-mail</label>
                        <div className="money_wrap">
                        <input  className="inputField" value={buyerEmail}  onChange={(e) => { setBuyerEmail(e.target.value)   } }  />
                        </div>

                      <div className='money_wrap payop-button' onClick={(e)=>{sendPayment(e)}} >
                         Pay With <img className='payop-logo' src={payopLogo} />  
                      </div>

                     </div>

         <Snackbar
        open={alertOpen}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical, horizontal }}
        TransitionComponent={transition}
        autoHideDuration={6000}
        key={transition ? transition.name : ''}>
      <Alert severity="warning" sx={{ width: '100%' }}>{validationMessage}</Alert>
      </Snackbar>

                     {/*} <PayPalScriptProvider
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
                                moneyAmountRef.current,
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
                                'mail@mail.com',
                              {
                                method: 'post',
                              }
                            );
                            const orderData = await res.json();
                            var errorDetail =
                              Array.isArray(orderData.details) &&
                              orderData.details[0];
                            if (
                              errorDetail &&
                              errorDetail.issue === 'INSTRUMENT_DECLINED'
                            ) {
                              return actions.restart();
                            }
                            if (errorDetail) {
                              var msg =
                                'Sorry, your transaction could not be processed.';
                              if (errorDetail.description)
                                msg += '\n\n' + errorDetail.description;
                              if (orderData.debug_id)
                                msg += ' (' + orderData.debug_id + ')';
                              return alert(msg);
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
                        </PayPalScriptProvider> */}
                    </form>
            </div>
            {/*<div className="options_wrapper">*/}
            {/*  <div className="back" onClick={closeAllOptions}>*/}
            {/*    <div className="back_icon">*/}
            {/*      <img src={back_icon} alt="" />*/}
            {/*    </div>*/}
            {/*    <div className="back_text">Back</div>*/}
            {/*  </div>*/}
            {/*  <SearchBar />*/}
            {/*  <div className="options">*/}
            {/*    <ul>*/}
            {/*      {payments.map((el, index) => (*/}
            {/*        <li key={index} className="paymentEl">*/}
            {/*          <div className="payment_wrap">*/}
            {/*            <div className="payment_img">*/}
            {/*              <img src={el.img} alt="" />*/}
            {/*            </div>*/}
            {/*            <div className="name">{el.name}</div>*/}
            {/*          </div>*/}
            {/*        </li>*/}
            {/*      ))}*/}
            {/*    </ul>*/}
            {/*  </div>*/}
            {/*</div>*/}

 
            <Backdrop
               sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
               open={backdropOpen}
              //onClick={handleClose}
               >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyForm;

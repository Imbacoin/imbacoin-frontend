import React, { useEffect, useRef, useState } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import bg_card_under_player from '../images/bg_card_under_player.png';
import bg_card_under_player_bg from '../images/bg_card_under_player_bg.png';
// import back_icon from '../images/back_icon.svg';
import coins_img from '../images/coins.svg';
import dollar from '../images/lang/dollar.svg';
import { apiService } from '../services/ApiServiceCustomMMO';
import SUBSRIBE_ORDER_BY_PAYMENT_ID from '../services/subscription';
import makeApolloClient from '../services/makeApolloClient';
// import paypal from '../images/paypal.png';
// import gsap from 'gsap';
// import SearchBar from './searchBar';

function BuyForm({ back_to_main }) {
  const formik_wrapper_Ref = useRef();
  // const tl_formik_wrapper = useRef();

  const [shopConfig, setShopConfig] = useState('');
  const [amount, setAmount] = useState(10000);
  const [token, setToken] = useState('');

  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getShopConfig() {
      const shopConfigFromApi = await apiService.getShopConfigByCustomerId(
        process.env.REACT_APP_CUSTOMER_ID
      );
      setShopConfig(shopConfigFromApi);
      setAmount(shopConfigFromApi.coinRate);
    }

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!shopConfig) {
      getShopConfig();
    }
  }, []);

  useEffect(() => {
    async function getUserToken(paymentId) {
      // token for this paymentId
      const res = await fetch(
        process.env.REACT_APP_PAYMENT_SERVER + 'token/' + paymentId,
        {
          method: 'get',
        }
      );

      const response = await res.json();
      setToken(response.token);

      // initializing client for subscription
      const client = makeApolloClient(
        process.env.REACT_APP_HASURA_MMO_URL,
        process.env.REACT_APP_HASURA_MMO_WS,
        true,
        response.token
      );

      // subscription
      const observerUpdate = client.subscribe({
        query: SUBSRIBE_ORDER_BY_PAYMENT_ID,
        variables: {
          paymentId,
        },
      });

      observerUpdate.subscribe({
        next(data) {
          // here is the order, from this we will redirect
          // console.log(data);
        },
        error(err) {
          console.log(err);
        },
      });
    }

    if (!token) {
      getUserToken('awd3g34y5');
    }
  }, []);

  useEffect(() => {
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
  }, []);

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

  const amountRef = useRef(amount);
  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

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
            <div className="back_to_main" onClick={back_to_main}>
              <span></span>
              <span></span>
            </div>
            <div className="formik_wrapper" ref={formik_wrapper_Ref}>
              <form>
                {/* <div>The coins you will get</div>
                <div className="coins_value_wrap">
                  <div className="coins_value">{amount}</div>
                  <div className="coins">
                    <img src={coins_img} alt="" />
                  </div>
                </div>
                <input
                  type="range"
                  id="coins"
                  name="coins"
                  min="0"
                  max="50000"
                  step="10000"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <label htmlFor="money">The money you will pay</label>
                <div className="money_wrap">
                  <input disabled className="inputField" value={amount / 50} />
                  <img className="dollar" src={dollar} alt="" />
                </div> */}
                <h1>To get free coins please contact us</h1>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/imbacoin/"
                    style={{ marginRight: '10px' }}
                  >
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55 27.5C55 12.3121 42.6878 -2.86102e-05 27.5 -2.86102e-05C12.3122 -2.86102e-05 0 12.3121 0 27.5C0 41.226 10.0564 52.6028 23.2031 54.6659V35.4492H16.2207V27.5H23.2031V21.4414C23.2031 14.5492 27.3087 10.7422 33.5903 10.7422C36.599 10.7422 39.7461 11.2793 39.7461 11.2793V18.0468H36.2784C32.8622 18.0468 31.7969 20.1667 31.7969 22.3414V27.5H39.4238L38.2046 35.4492H31.7969V54.6659C44.9436 52.6028 55 41.226 55 27.5Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M38.2046 35.4492L39.4238 27.5H31.7969V22.3414C31.7969 20.1667 32.8622 18.0469 36.2784 18.0469H39.7461V11.2793C39.7461 11.2793 36.599 10.7422 33.5903 10.7422C27.3087 10.7422 23.2031 14.5492 23.2031 21.4414V27.5H16.2207V35.4492H23.2031V54.6659C24.6032 54.8856 26.0382 55 27.5 55C28.9618 55 30.3968 54.8856 31.7969 54.6659V35.4492H38.2046Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/imbacoin"
                    style={{ marginRight: '10px' }}
                  >
                    <svg
                      width="57"
                      height="47"
                      viewBox="0 0 57 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.1645 11.7005C51.1993 12.2104 51.1993 12.7204 51.1993 13.235C51.1993 28.9155 39.4357 47 17.9255 47V46.9906C11.5714 47 5.34918 45.153 0 41.6705C0.923949 41.7833 1.85253 41.8397 2.78343 41.8421C8.04924 41.8468 13.1645 40.0538 17.3073 36.7523C12.3031 36.656 7.91493 33.345 6.38196 28.5114C8.13492 28.8544 9.94113 28.784 11.6617 28.3069C6.20597 27.1884 2.28093 22.3242 2.28093 16.6752C2.28093 16.6235 2.28093 16.5741 2.28093 16.5248C3.90652 17.4436 5.72663 17.9535 7.58842 18.0099C2.44997 14.5251 0.866057 7.58829 3.96904 2.16483C9.9064 9.57861 18.6665 14.0856 28.0704 14.5626C27.128 10.441 28.4155 6.12198 31.4536 3.22461C36.1637 -1.2683 43.5715 -1.03802 47.999 3.73923C50.618 3.21521 53.1282 2.24003 55.4254 0.858313C54.5524 3.60529 52.7253 5.93869 50.2846 7.42145C52.6026 7.14417 54.8673 6.51441 57 5.55332C55.43 7.94077 53.4524 10.0204 51.1645 11.7005Z"
                        fill="#1D9BF0"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/imbacoin_bot"
                    style={{ marginRight: '10px' }}
                  >
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55Z"
                        fill="url(#paint0_linear_6_32)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.465 27.2002C20.4751 23.6877 25.8294 21.4175 28.4852 20.3038C36.1098 17.134 37.6947 16.5771 38.7227 16.5771C38.9369 16.5771 39.4509 16.62 39.7936 16.877C40.0506 17.0912 40.1363 17.391 40.1791 17.6052C40.222 17.8194 40.2648 18.2905 40.222 18.6761C39.7936 23.0024 38.0374 33.5826 37.095 38.4229C36.7095 40.479 35.9385 41.1644 35.2103 41.25C33.6254 41.3786 32.3832 40.1792 30.8411 39.194C28.4424 37.6091 27.0717 36.6239 24.7157 35.0818C22.0171 33.2828 23.7734 32.2976 25.3154 30.7127C25.7009 30.2843 32.7687 23.9019 32.8972 23.3022C32.8972 23.2166 32.94 22.9595 32.7687 22.831C32.5974 22.7025 32.3832 22.7454 32.2118 22.7882C31.9548 22.831 28.0997 25.4011 20.6036 30.4557C19.4899 31.2267 18.5047 31.5694 17.6051 31.5694C16.6199 31.5694 14.7352 31.0125 13.3217 30.5413C11.6083 29.9845 10.2375 29.6846 10.3661 28.7423C10.4946 28.2282 11.1799 27.7142 12.465 27.2002Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6_32"
                          x1="0.0407788"
                          y1="27.4801"
                          x2="55.001"
                          y2="27.4801"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#2AABEE" />
                          <stop offset="1" stop-color="#229ED9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/imbacoin/"
                    style={{ marginRight: '10px' }}
                  >
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.4811 12.8214C45.4811 10.9935 43.9996 9.51756 42.1786 9.51756C40.3574 9.51756 38.8746 10.9935 38.8746 12.8214C38.8746 14.6426 40.3574 16.1185 42.1786 16.1185C43.9996 16.1185 45.4811 14.6426 45.4811 12.8214"
                        fill="url(#paint0_linear_7_20)"
                      />
                      <path
                        d="M49.8817 38.611C49.7594 41.2925 49.3109 42.7494 48.9385 43.717C48.4384 45 47.8418 45.9173 46.8742 46.8796C45.9173 47.8418 45 48.437 43.717 48.9317C42.7494 49.3096 41.287 49.7594 38.6056 49.8872C35.7067 50.0149 34.8478 50.0421 27.4966 50.0421C20.1522 50.0421 19.2864 50.0149 16.3876 49.8872C13.7062 49.7594 12.2506 49.3096 11.2829 48.9317C9.9932 48.437 9.08266 47.8418 8.12044 46.8796C7.1514 45.9173 6.5548 45 6.06146 43.717C5.68901 42.7494 5.23379 41.2925 5.1182 38.611C4.97693 35.7121 4.95104 34.8396 4.95104 27.5034C4.95104 20.1522 4.97693 19.2864 5.1182 16.3876C5.23379 13.7062 5.68901 12.2506 6.06146 11.2748C6.5548 9.9932 7.1514 9.08123 8.12044 8.11902C9.08266 7.15822 9.9932 6.56153 11.2829 6.06146C12.2506 5.68228 13.7062 5.23919 16.3876 5.11147C19.2864 4.98365 20.1522 4.95104 27.4966 4.95104C34.8478 4.95104 35.7067 4.98365 38.6056 5.11147C41.287 5.23919 42.7494 5.68228 43.717 6.06146C45 6.56153 45.9173 7.15822 46.8742 8.11902C47.8418 9.08123 48.4384 9.9932 48.9385 11.2748C49.3109 12.2506 49.7594 13.7062 49.8817 16.3876C50.0162 19.2864 50.0489 20.1522 50.0489 27.5034C50.0489 34.8396 50.0162 35.7121 49.8817 38.611V38.611ZM54.8328 16.162C54.6983 13.2318 54.2361 11.2299 53.5498 9.4863C52.8513 7.67735 51.9149 6.14433 50.3819 4.61131C48.8557 3.08511 47.3226 2.14868 45.5137 1.442C43.7633 0.762437 41.7681 0.294883 38.8366 0.167165C35.9051 0.0257885 34.9688 -1.25512e-06 27.4966 -1.25512e-06C20.0312 -1.25512e-06 19.0881 0.0257885 16.1566 0.167165C13.2318 0.294883 11.2381 0.762437 9.47947 1.442C7.67735 2.14868 6.14433 3.08511 4.61813 4.61131C3.08511 6.14433 2.14868 7.67735 1.44333 9.4863C0.76376 11.2299 0.301712 13.2318 0.160336 16.162C0.0326175 19.0935 0 20.0312 0 27.5034C0 34.9688 0.0326175 35.9051 0.160336 38.8366C0.301712 41.7614 0.76376 43.7618 1.44333 45.5137C2.14868 47.3158 3.08511 48.8557 4.61813 50.3819C6.14433 51.9081 7.67735 52.8513 9.47947 53.5567C11.2381 54.2361 13.2318 54.6983 16.1566 54.8328C19.0881 54.9674 20.0312 55 27.4966 55C34.9688 55 35.9051 54.9674 38.8366 54.8328C41.7681 54.6983 43.7633 54.2361 45.5137 53.5567C47.3226 52.8513 48.8557 51.9081 50.3819 50.3819C51.9149 48.8557 52.8513 47.3158 53.5498 45.5137C54.2361 43.7618 54.6983 41.7614 54.8328 38.8366C54.9674 35.9051 55 34.9688 55 27.5034C55 20.0312 54.9674 19.0935 54.8328 16.162V16.162Z"
                        fill="url(#paint1_linear_7_20)"
                      />
                      <path
                        d="M27.4966 36.6621C22.4368 36.6621 18.331 32.5631 18.331 27.5033C18.331 22.4354 22.4368 18.3311 27.4966 18.3311C32.5578 18.3311 36.6689 22.4354 36.6689 27.5033C36.6689 32.5631 32.5578 36.6621 27.4966 36.6621V36.6621ZM27.4966 13.3732C19.6969 13.3732 13.38 19.7037 13.38 27.5033C13.38 35.2963 19.6969 41.62 27.4966 41.62C35.2962 41.62 41.62 35.2963 41.62 27.5033C41.62 19.7037 35.2962 13.3732 27.4966 13.3732Z"
                        fill="url(#paint2_linear_7_20)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7_20"
                          x1="0.496066"
                          y1="54.4313"
                          x2="50.4191"
                          y2="4.50854"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFD521" />
                          <stop offset="0.05" stop-color="#FFD521" />
                          <stop offset="0.501119" stop-color="#F50000" />
                          <stop offset="0.95" stop-color="#B900B4" />
                          <stop offset="0.950079" stop-color="#B900B4" />
                          <stop offset="1" stop-color="#B900B4" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_7_20"
                          x1="0.496092"
                          y1="54.4998"
                          x2="50.46"
                          y2="4.53588"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFD521" />
                          <stop offset="0.05" stop-color="#FFD521" />
                          <stop offset="0.501119" stop-color="#F50000" />
                          <stop offset="0.95" stop-color="#B900B4" />
                          <stop offset="0.950079" stop-color="#B900B4" />
                          <stop offset="1" stop-color="#B900B4" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_7_20"
                          x1="0.509029"
                          y1="54.5012"
                          x2="50.4609"
                          y2="4.54923"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFD521" />
                          <stop offset="0.05" stop-color="#FFD521" />
                          <stop offset="0.501119" stop-color="#F50000" />
                          <stop offset="0.95" stop-color="#B900B4" />
                          <stop offset="0.950079" stop-color="#B900B4" />
                          <stop offset="1" stop-color="#B900B4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="viber://pa/info?uri=imbacoin"
                  >
                    <svg
                      width="55"
                      height="57"
                      viewBox="0 0 55 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48.7917 5.55968C47.3506 4.25269 41.5267 0.0973669 28.5545 0.0409133C28.5545 0.0409133 13.2569 -0.865765 5.79958 5.85734C1.64839 9.93825 0.188083 15.9095 0.0340458 23.3126C-0.119992 30.7157 -0.319284 44.5896 13.2874 48.3515H13.3004L13.2917 54.0918C13.2917 54.0918 13.2047 56.4158 14.7616 56.8897C16.6449 57.4645 17.7501 55.6982 19.5481 53.7941C20.535 52.7489 21.8978 51.2135 22.9247 50.04C32.2305 50.8098 39.3876 49.0503 40.2004 48.7903C42.0793 48.1915 52.7114 46.8521 54.4406 32.9799C56.2256 18.6809 53.5773 9.63631 48.7917 5.55968V5.55968ZM50.3686 31.9543C48.9092 43.5375 40.2857 44.2655 38.6957 44.7667C38.0195 44.9805 31.7336 46.5176 23.8289 46.0104C23.8289 46.0104 17.939 52.9944 16.0992 54.8103C15.812 55.0943 15.4744 55.2089 15.249 55.1524C14.9322 55.0763 14.8451 54.7077 14.8486 54.1688C14.8539 53.399 14.8991 44.6298 14.8991 44.6298C14.8991 44.6298 14.8921 44.6298 14.8991 44.6298C3.38893 41.489 4.05991 29.6808 4.19045 23.4974C4.32099 17.314 5.50281 12.2486 9.01348 8.84168C15.3212 3.22626 28.3152 4.06537 28.3152 4.06537C39.2884 4.11241 44.5465 7.36021 45.7658 8.44822C49.8143 11.8551 51.8768 20.0075 50.3686 31.9509V31.9543Z"
                        fill="#7360F2"
                      />
                      <path
                        d="M34 23C33.8698 20.4613 32.5365 19.128 30 19"
                        stroke="#7360F2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M37.9968 24C38.0594 21.5212 37.2024 19.4502 35.4257 17.787C33.6409 16.1179 31.1704 15.1988 28 15"
                        stroke="#7360F2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M42 26C41.9632 21.3627 40.5162 17.7104 37.6593 15.0433C34.8023 12.3761 31.2492 11.0283 27 11"
                        stroke="#7360F2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.4423 33.0565C29.4423 33.0565 30.4674 33.143 31.0194 32.4631L32.0955 31.1094C32.6146 30.4381 33.8672 30.01 35.0939 30.6933C36.0132 31.2176 36.9056 31.7874 37.7679 32.4009C38.5819 32.9995 40.249 34.3904 40.2542 34.3904C41.0483 35.0608 41.2317 36.0452 40.691 37.0832C40.691 37.0892 40.6867 37.0996 40.6867 37.1048C40.0912 38.137 39.3352 39.0679 38.447 39.8625C38.4366 39.8677 38.4366 39.8729 38.4271 39.878C37.6554 40.5228 36.8973 40.8892 36.1528 40.9775C36.0432 40.9967 35.9317 41.0036 35.8206 40.9982C35.4923 41.0014 35.1656 40.9512 34.8534 40.8495L34.8292 40.814C33.6821 40.4905 31.7668 39.6808 28.5772 37.9214C26.7315 36.9152 24.9743 35.7545 23.3244 34.4518C22.4975 33.7992 21.7087 33.0997 20.9619 32.3568L20.8823 32.2772L20.8027 32.1976L20.7231 32.118C20.6963 32.0921 20.6703 32.0652 20.6435 32.0384C19.9005 31.2917 19.2009 30.5029 18.5483 29.6761C17.2456 28.0265 16.0849 26.2698 15.0784 24.4246C13.3188 21.2344 12.5091 19.321 12.1856 18.1723L12.1501 18.148C12.0487 17.8358 11.9987 17.5092 12.0022 17.1809C11.9961 17.0698 12.0028 16.9584 12.0221 16.8488C12.1149 16.1054 12.482 15.3468 13.1233 14.5729C13.1285 14.5634 13.1337 14.5634 13.1389 14.553C13.9333 13.6649 14.8643 12.9092 15.8968 12.3144C15.902 12.3144 15.9124 12.3092 15.9184 12.3092C16.9565 11.7686 17.941 11.9519 18.6106 12.7417C18.6157 12.7469 20.0042 14.4138 20.6003 15.2277C21.2138 16.0908 21.7837 16.984 22.3079 17.9041C22.9914 19.1298 22.5631 20.385 21.8918 20.9022L20.538 21.9783C19.8546 22.5302 19.9445 23.5552 19.9445 23.5552C19.9445 23.5552 21.9498 31.144 29.4423 33.0565V33.0565Z"
                        fill="#7360F2"
                      />
                    </svg>
                  </a>
                </div>

                {/* <PayPalScriptProvider
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
                                amountRef.current/50,
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyForm;

import React, { useEffect, useRef, useState } from 'react';
//import { apiService } from '../services/ApiService';
import { apiService } from '../services/ApiServiceCustomMMO';
import SUBSRIBE_ORDER_BY_PAYMENT_ID from '../services/subscription';
import makeApolloClient from '../services/makeApolloClient';
import { Routes, Route, useParams }  from "react-router-dom";
import { CircularProgress } from '@mui/material';

function Result (){

     const [subscriptionMesssage, setSubscriptionMesssage] = useState('')
    const [token, setToken] = useState('');
    let  { invoiceid } = useParams();
    
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
               console.log(JSON.stringify(data));
               if (data &&  data.data.Order.length > 0) { 

                 let orderId =  data.data.Order[0].id 
                 let customerId = data.data.Order[0].customerId
                 console.log("payment ID:" +  data.data.Order[0].paymentId + " orderID:" +  data.data.Order[0].id )
                 window.location = 'https://chat.mmo.delivery/order/'+customerId+'/'+orderId

               }
            },
            error(err) {
              console.log(err);
            },
          });
        }
           
           if(invoiceid && !token) { 
            getUserToken(invoiceid)
            setSubscriptionMesssage('Please wait a moment while we are preapring your order' )

           }
           else { 

            setSubscriptionMesssage(' <a href="/"> Home <a/> '   )

           }
         

   }, [] )


    return (<div className='result-main-wrapper'>
              
               <div className='result-status'>              
               { subscriptionMesssage }
               </div>
               <div className='result-circularprogress'>
               <CircularProgress />
               </div>
           </div>)
   }
     
   export default Result;
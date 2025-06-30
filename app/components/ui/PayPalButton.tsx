'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAIMZVeyOeTrYrIRiRwCWw_q10by-ECSH_XxNpT9feElKdfXddATAxMrnaTa0NYOl1pWRjhRqP59LFSiY&currency=USD";
    script.async = true;
    script.onload = () => {
      window.paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: '20.00' }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then(function(details: any) {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }
      }).render('#paypal-button-container');
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div id="paypal-button-container" />
    </div>
  );
};

export default PayPalButton;

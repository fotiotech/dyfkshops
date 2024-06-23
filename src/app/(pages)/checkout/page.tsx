"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "test",
  currency: "USD",
  intent: "capture",
};

const page = () => {
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={{ layout: "horizontal" }} />
      </PayPalScriptProvider>
    </div>
  );
};

export default page;

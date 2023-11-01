import React, { useEffect } from "react";

const NewPricing = () => {
  useEffect(() => {
    // Load the Stripe script
    const stripeScript = document.createElement("script");
    stripeScript.src = "https://js.stripe.com/v3/pricing-table.js";
    stripeScript.async = true;
    document.body.appendChild(stripeScript);

    // Cleanup function
    return () => {
      document.body.removeChild(stripeScript);
    };
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "50px" }}></div>
      <stripe-pricing-table
        pricing-table-id="prctbl_1O48i3JCMgay6huUmuUjxkNB"
        publishable-key="pk_live_51N3MYEJCMgay6huUOUBvatIbpLSR6gnYSDsUrPY8OwAVcz9yB6PA7I7xSuCUwho7NXhW3pDoJq942nAQywickLmV00DUXpqbcf"
      ></stripe-pricing-table>
    </div>
  );
};

export default NewPricing;

import React, { useEffect, useState } from "react";

const NewPricing = () => {
  const [storeUrl, setStoreUrl] = useState(true);
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
  useEffect(() => {
    console.log(window.location.href);
  }, []);

  useEffect(() => {
    const selectedUrl = localStorage.getItem("selectedUrl");
    if (selectedUrl) {
      setStoreUrl(false);
      window.location.href = selectedUrl;
    } else {
      setStoreUrl(false);
    }
  }, []);
  const queryParams = new URLSearchParams(window.location.href);
  const id = queryParams.get("get");
  console.log("ID: ", id);
  return (
    <>
      {!storeUrl && (
        <div>
          <div style={{ height: "100vh" }}>
            <div style={{ height: "50px" }}></div>
            <stripe-pricing-table
              pricing-table-id="prctbl_1O48i3JCMgay6huUmuUjxkNB"
              publishable-key="pk_live_51N3MYEJCMgay6huUOUBvatIbpLSR6gnYSDsUrPY8OwAVcz9yB6PA7I7xSuCUwho7NXhW3pDoJq942nAQywickLmV00DUXpqbcf"
            ></stripe-pricing-table>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPricing;

import React, { useEffect, useState } from "react";

const PricingWithCookie = () => {
  const [iframeUrl, setIframeUrl] = useState("");
  const urlList = [
    { keyword: "try", url: "https://buy.stripe.com/cN24iFeZzfrl0Xm00l" },
    { keyword: "try-now", url: "https://buy.stripe.com/9AQ5mJg3Denh7lK5kG" },
    {
      keyword: "try-for-now",
      url: "https://buy.stripe.com/9AQ4iF4kV0wr49y14r",
    },
    { keyword: "try-it", url: "https://buy.stripe.com/7sI02p4kV7YT21q9AY" },
    {
      keyword: "try-it-now",
      url: "https://buy.stripe.com/5kA6qN18Jfrl6hGaF3",
    },
  ];

  //   useEffect(() => {
  //     const urlSegments = window.location.href
  //       .split("/")
  //       .filter((segment) => segment !== "");
  //     const lastSegment = urlSegments.pop();

  //     // Find the URL that matches the lastSegment
  //     const matchingURL = urlList.find((item) => item.keyword === lastSegment);
  //     console.log("Match url: ", matchingURL);
  //     if (matchingURL) {
  //       // Store the matching URL in local storage
  //       localStorage.setItem("selectedUrl", matchingURL.url);
  //       window.location.href = matchingURL.url;
  //     }
  //   }, []);
  //   useEffect(() => {
  //     const urlSegments = window.location.href
  //       .split("/")
  //       .filter((segment) => segment !== "");
  //     const priceIndex = urlSegments.findIndex((segment) => segment === "price");

  //     let redirectUrl = null;

  //     if (priceIndex !== -1 && priceIndex < urlSegments.length - 1) {
  //       // Get the keyword after 'price'
  //       const keyword = urlSegments[priceIndex + 1];

  //       // Find the URL that matches the keyword
  //       const matchingURL = urlList.find((item) => item.keyword === keyword);
  //       if (matchingURL) {
  //         redirectUrl = matchingURL.url;
  //         localStorage.setItem("selectedUrl", matchingURL.url);
  //       }
  //     } else {
  //       // Load the previously selected URL from local storage
  //       redirectUrl = localStorage.getItem("selectedUrl");
  //     }

  //     if (redirectUrl) {
  //       window.location.href = redirectUrl;
  //     }
  //   }, []);

  return (
    <>
      <div></div>
    </>
  );
};
export default PricingWithCookie;

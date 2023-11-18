import React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import LiveChat from "./Components/LiveChat";
import LiveChat from "./Components/LiveChat";
const FullHeightPaper = styled(Paper)`
  // background: #fafafa; // light grey to give a paper-like feel
`;
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
const WrapperComponent = ({ children }) => {
  const dataContext = useContext(DataContext);

  const urlList = [
    { keyword: "try", url: "https://buy.stripe.com/cN24iFeZzfrl0Xm00l" },
    { keyword: "ai", url: "https://buy.stripe.com/9AQ5mJg3Denh7lK5kG" },
    {
      keyword: "seo",
      url: "https://buy.stripe.com/9AQ4iF4kV0wr49y14r",
    },
    { keyword: "start", url: "https://buy.stripe.com/7sI02p4kV7YT21q9AY" },
    {
      keyword: "get-started",
      url: "https://buy.stripe.com/5kA6qN18Jfrl6hGaF3",
    },
  ];
  useEffect(() => {
    // Load the Google Tag Manager script dynamically
    const gtagScript = document.createElement("script");
    gtagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-11300698155";
    gtagScript.async = true;
    document.body.appendChild(gtagScript);

    gtagScript.onload = () => {
      // Initialize Google Tag Manager once the script has loaded
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-11300698155");
    };

    // Cleanup function
    return () => {
      document.body.removeChild(gtagScript);
    };
  }, []);

  // Code dynamic pricing
  useEffect(() => {
    const urlSegments = window.location.href
      .split("/")
      .filter((segment) => segment !== "");
    const lastSegment = urlSegments.pop();

    const matchingURL = urlList.find((item) => item.keyword === lastSegment);
    if (matchingURL) {
      localStorage.setItem("selectedUrl", matchingURL.url);
    }
  }, []);
  useEffect(() => {
    const selectedUrl = localStorage.getItem("selectedUrl");
    if (selectedUrl) {
      // window.location.href = selectedUrl;
      dataContext.setUrlStoredFunction({ data: selectedUrl });
    }
  }, []);

  return (
    <div>
      <FullHeightPaper elevation={1}>{children}</FullHeightPaper>
      <LiveChat />
    </div>
  );
};

export default WrapperComponent;

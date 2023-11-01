import React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import LiveChat from "./Components/LiveChat";
import LiveChat from "./Components/LiveChat";
const FullHeightPaper = styled(Paper)`
  // background: #fafafa; // light grey to give a paper-like feel
`;

const WrapperComponent = ({ children }) => {
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

  return (
    <div>
      <FullHeightPaper elevation={1}>{children}</FullHeightPaper>
      <LiveChat />
    </div>
  );
};

export default WrapperComponent;

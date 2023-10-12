import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import LiveChat from "./Components/LiveChat";
import LiveChat from "./Components/LiveChat";
const FullHeightPaper = styled(Paper)`
  // background: #fafafa; // light grey to give a paper-like feel
`;
const WrapperComponent = ({ children }) => {
  return (
    <div>
      {/* <h1>WrapperComponent</h1> */}
      <FullHeightPaper elevation={1}>
        {/*  */}
        {children}
        {/* Google Tag Manager script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11300698155"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11300698155');
            `,
          }}
        />
        {/*  */}
      </FullHeightPaper>
      <LiveChat />
    </div>
  );
};

export default WrapperComponent;

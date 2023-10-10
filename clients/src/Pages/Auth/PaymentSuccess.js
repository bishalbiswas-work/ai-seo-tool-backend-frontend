import React, { Component } from "react";

// import ReactDOM from "react-dom/client";

import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

//
// import { useEffect } from "react";
// import { useContext } from "react";
// import { useNavigate } from "react-router";
// import DataContext from "../../context/DataContext";

const PaymentSuccess = () => {
  return (
    <div>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CheckCircleIcon color="success" style={{ fontSize: 60 }} />
          <Typography variant="h4" color="success">
            Payment Successful!
          </Typography>
        </Box>
      </Container>

      {/* Embed the script here */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-11300698155/-y-PCIDr4dUYEKvwy4wq',
              'transaction_id': ''
            });

          
            rdt('track', 'Purchase', {
            "currency": "USD",
            "itemCount": 1,
            "transactionId": "12345678",
            "value": 100,
            "products": [
            {
            "id": "product id 1",
            "name": "product name 1",
            "category": "product category 1"
            },
            // additional products can be added here
            ]
            });

          `,
        }}
      />
    </div>
  );
};

export default PaymentSuccess;

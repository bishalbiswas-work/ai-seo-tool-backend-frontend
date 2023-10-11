import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { Box, Button, Typography } from "@mui/material";

const PInput2 = (props) => {
  const {
    successUrl,
    validNumber,
    dataContext,
    handleChangeNumber,
    handleGetStarted,
  } = props;

  return (
    <div className={props.className}>
      <div className="flex flex-col h-12 md:h-auto items-start justify-start  py-3 rounded-lg shadow-bs1 w-full">
        <div className="flex flex-col h-6 md:h-auto items-start justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-2 h-6 md:h-auto items-center justify-start w-full">
            <div className="flex flex-row items-center justify-start w-auto">
              {successUrl && (
                <>
                  <PhoneInput
                    placeholder="Phone Number"
                    specialLabel="Phone number"
                    inputStyle={{
                      width: "473px",
                      borderRadius: "15px",
                      height: "50px",
                      borderColor:
                        !validNumber.valid && validNumber.click
                          ? "red"
                          : "none",
                    }}
                    containerStyle={{
                      color:
                        !validNumber.valid && validNumber.click
                          ? "red"
                          : "none",
                    }}
                    country={"us"}
                    value={dataContext.phoneNumber}
                    onChange={handleChangeNumber}
                  />

                  <Box sx={{ position: "relative" }}>
                    <Button
                      variant="contained"
                      onClick={handleGetStarted}
                      style={{
                        position: "absolute",
                        left: "-157px",
                        top: "7px",
                        width: "150px",
                        height: "35px",
                        background:
                          "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                        padding: "8px 15px",
                        borderRadius: "8px",
                      }}
                    >
                      <Typography
                        fontSize="10px !important"
                        style={{ fontFamily: "Inter, sans-serif " }}
                      >
                        Get Started
                      </Typography>
                    </Button>
                  </Box>
                </>
              )}
            </div>
          </div>
          {!validNumber.valid && validNumber.click && (
            <Typography
              variant="h6"
              style={{
                color: "red",
                marginTop: "2px",
                fontSize: "12px",
              }}
            >
              Please enter valid phone number to get started
            </Typography>
          )}
          {successUrl && (
            <div className="helpertext">
              <p className="text-helper">
                We will use this number to validate your website.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PInput2;

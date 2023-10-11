import React from "react";

import Text from "./Text";
import Img from "./Img";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Box, Button, Typography } from "@mui/material";

const PInputold = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-12 md:h-auto items-start justify-start  py-3 rounded-lg shadow-bs1 w-full">
          <div className="flex flex-col h-6 md:h-auto items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-2 h-6 md:h-auto items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start w-auto">
                <PhoneInput
                  placeholder="Phone Number"
                  specialLabel="Phone number"
                  inputStyle={{
                    width: "473px",
                    borderRadius: "15px",
                    height: "50px",
                  }}
                  country={"us"}
                />
                <Box sx={{ position: "relative" }}>
                  <Button
                    variant="contained"
                    // onClick={}
                    style={{
                      position: "absolute",
                      left: "-157px",
                      top: "-18px",
                      width: "150px",
                      height: "35px",
                      background:
                        "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                      padding: "8px 15px", // Adjust padding as needed
                      borderRadius: "8px", // Adjust border radius as needed
                    }}
                  >
                    <Typography
                      fontSize="15px !important"
                      style={{ fontFamily: "Inter, sans-serif " }}
                    >
                      Go!
                    </Typography>
                  </Button>
                </Box>
              </div>
            </div>
            <p
              style={{
                marginTop: "14px",
                marginLeft: "1rem",
                color: "#595959",
                fontSize: "12px",
              }}
            >
              We will use this number to validate your website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

PInput.defaultProps = {
  phonenumber: "+1",
  labeltext: "Phone Number",
  texthelper: "We will use this number to validate your website.",
};

export default PInputold;

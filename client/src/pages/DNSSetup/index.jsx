import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

import HorizontalLinearStepper from "components/HorizontalLinearStepper";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import CircularProgress from "@mui/material/CircularProgress";

// Import ContextAPI
import { useContext } from "react";
// import DataContext from "../ContextAPI/DataState";
import DataContext from "ContextAPI/DataState";
// End Import ContextAPI

const DNSSetup = () => {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();
  const steps = ["Step 1", "Step 2", "Step 3"];
  const ipAddress = "159.223.182.225";
  const copyText = ["A", "blog", "159.223.182.225"];
  const [inputUrl, setInputUrl] = useState("");
  const [blogActive, setBlogActive] = useState(false);
  const [blogProcess, setBLogProcess] = useState(true);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [domainVerify, setDomainVerify] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [domainVerifyVidoe, setDomainVerifyVideo] = useState([
    "/images/img_p.png",
    "/images/img_p.png",
    "/images/img_p.png",
    "/images/img_p.png",
  ]);

  const handleOnClickDNS = (prop) => {
    setDomainVerify(true);
    setSelectedDomain(prop);
    console.log("clicked dns button", prop);
  };
  // ================================================
  const handleChangeUrl = (event) => {
    setInputUrl(event.target.value);
  };
  const handleBlur = () => {
    let processedUrl = inputUrl.trim();
    // Remove "http://" or "https://"
    processedUrl = processedUrl.replace(/^(https?:\/\/)/, "");
    // Extract naked domain (removing subdomains and anything after the domain)
    processedUrl = extractNakedDomain(processedUrl);
    setInputUrl(processedUrl);
  };

  const extractNakedDomain = (url) => {
    // First remove any path, query, or fragment
    let domain = url.split("/")[0];
    // Then remove subdomains if any
    let domainParts = domain.split(".");
    if (domainParts.length > 2) {
      // Keeps only the last two parts of the domain
      return domainParts.slice(domainParts.length - 2).join(".");
    }
    return domain;
  };
  const handelVerifyDomain = async () => {
    if (inputUrl) {
      setBlogActive(true);
      setIsValidUrl(false);

      try {
        const response = await dataContext.verifiyDomainIP("blog." + inputUrl);
        console.log(response);
        if (response && response.status) {
          await dataContext.pushBlogs("blog." + inputUrl);
          console.log("Blog Uploaded");
          navigate("/onboarding/voice-setup");
        }
      } catch (error) {
        console.error("Error pushing blogs:", error);
        // handle any errors here
      }

      setBLogProcess(false);
    } else {
      setIsValidUrl(true);
    }
  };
  const handleCopyButtonClick = async (index) => {
    try {
      await navigator.clipboard.writeText(copyText[index]);

      // alert("IP Address copied to clipboard!");
    } catch (err) {
      // alert("Failed to copy IP address");
    }
  };
  useEffect(() => {
    let data = dataContext.businessMetaData;
    const updatedData = {
      ...data,
      domain: "blog." + inputUrl,
    };
    console.log("DNS Page: ", updatedData);
    dataContext.setBusinessMetaDataFunction({ data: updatedData });
  }, [inputUrl]);
  // ================================================
  const handleBack = () => {
    navigate("/dashboard");
  };
  const handleNext = () => {
    navigate("/onboarding/voice-setup");
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700 flex md:gap-10 items-center justify-between px-10 md:px-5 py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs1 w-full" />
        <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-6 w-full">
          <Button
            className="common-pointer flex h-10 items-center justify-center w-10"
            onClick={() => handleBack()}
            shape="circle"
            color="gray_50"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="/images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <Text
            className="text-blue_gray-900 text-center text-xl w-auto"
            size="txtLatoSemiBold20"
          >
            Account setup
          </Text>
          <Text
            className="bg-indigo-400_14 justify-center pb-0.5 pt-[5px] px-2 rounded-[12px] text-indigo-A200 text-sm w-auto"
            size="txtInterMedium14"
          >
            In progress
          </Text>
        </div>
        <div className="flex flex-col md:gap-4 h-[741px] md:h-auto items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-8 w-full">
          <Line className="bg-black-900_0c h-px w-full" />
          <div className="flex flex-col h-[709px] md:h-auto items-center justify-start">
            <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-col gap-8 items-start justify-center max-w-[800px] p-10 sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col font-inter gap-3.5 h-[59px] md:h-auto items-center justify-center px-5 w-full w-[800px]">
                {/* <Img
                  className="h-7 w-full"
                  src="images/img_playground.svg"
                  alt="playground"
                />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-deep_purple-A200 text-xs w-auto"
                    size="txtInterSemiBold12"
                  >
                    Setup DNS Server
                  </Text>
                  <Text
                    className="text-center text-gray-600 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    Choose the voice and tone
                  </Text>
                  <Text
                    className="text-gray-600 text-right text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    Get FREE extension
                  </Text>
                </div> */}

                <HorizontalLinearStepper currentStep={0} steps={steps} />
              </div>
              <Line className="bg-black-900_0c h-px w-full" />
              <div className="flex flex-col font-lato gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-full"
                    size="txtLatoBold18"
                  >
                    Choose your DNS provider
                  </Text>
                  <Text
                    className="text-gray-600 text-xs w-full"
                    size="txtLatoRegular12"
                  >
                    Select your preferred DNS server
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                  orientation="horizontal"
                >
                  <div
                    className={`${
                      selectedDomain === 0 && domainVerify
                        ? "bg-deep_purple-A200_0c border border-deep_purple-500"
                        : "bg-white-A700 border"
                    }  border-solid flex flex-1 flex-row gap-[16.8px] h-[84px] md:h-auto items-start justify-between p-[16.8px] rounded-[12px] w-full`}
                    onClick={() => {
                      handleOnClickDNS(0);
                    }}
                  >
                    <div className="flex flex-col gap-4 h-[53px] md:h-auto items-start justify-between">
                      <Img
                        className="h-3 w-[61px]"
                        src="/images/img_vector.svg"
                        alt="vector"
                      />

                      <Text
                        className={`${
                          selectedDomain === 0 && domainVerify
                            ? "bg-clip-text bg-gradient"
                            : "text-blue_gray-900"
                        }  text-sm text-transparent w-auto`}
                        size="txtLatoBold14"
                      >
                        GoDaddy
                      </Text>
                    </div>

                    {selectedDomain === 0 && domainVerify ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton_white_a700.svg"
                        alt="miscradiobutton"
                      />
                    ) : (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton.svg"
                        alt="miscradiobutton"
                      />
                    )}
                  </div>
                  <div
                    className={`${
                      selectedDomain === 1 && domainVerify
                        ? "bg-deep_purple-A200_0c border border-deep_purple-500"
                        : "bg-white-A700 border"
                    }  border-solid flex flex-1 flex-row gap-[16.8px] h-[84px] md:h-auto items-start justify-between p-[16.8px] rounded-[12px] w-full`}
                    onClick={() => {
                      handleOnClickDNS(1);
                    }}
                  >
                    <div className="flex flex-col gap-[16.8px] items-start justify-start w-auto">
                      <Img
                        className="h-[18px] md:h-auto object-cover w-[18px]"
                        src="/images/img_icon1.png"
                        alt="iconOne"
                      />
                      <Text
                        className={`${
                          selectedDomain === 1 && domainVerify
                            ? "bg-clip-text bg-gradient"
                            : "text-blue_gray-900"
                        }  text-sm text-transparent w-auto`}
                        size="txtLatoBold14"
                      >
                        Google DNS
                      </Text>
                    </div>
                    {selectedDomain === 1 && domainVerify ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton_white_a700.svg"
                        alt="miscradiobutton"
                      />
                    ) : (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton.svg"
                        alt="miscradiobutton"
                      />
                    )}
                  </div>
                  <div
                    className={`${
                      selectedDomain === 2 && domainVerify
                        ? "bg-deep_purple-A200_0c border border-deep_purple-500"
                        : "bg-white-A700 border"
                    }  border-solid flex flex-1 flex-row gap-[16.8px] h-[84px] md:h-auto items-start justify-between p-[16.8px] rounded-[12px] w-full`}
                    onClick={() => {
                      handleOnClickDNS(2);
                    }}
                  >
                    <div className="flex flex-col gap-[16.8px] items-start justify-start w-auto">
                      <Img
                        className="h-[18px] w-[47px]"
                        src="/images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Text
                        className={`${
                          selectedDomain === 2 && domainVerify
                            ? "bg-clip-text bg-gradient"
                            : "text-blue_gray-900"
                        }  text-sm text-transparent w-auto`}
                        size="txtLatoBold14"
                      >
                        OpenDNS
                      </Text>
                    </div>
                    {selectedDomain === 2 && domainVerify ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton_white_a700.svg"
                        alt="miscradiobutton"
                      />
                    ) : (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton.svg"
                        alt="miscradiobutton"
                      />
                    )}
                  </div>
                  <div
                    className={`${
                      selectedDomain === 3 && domainVerify
                        ? "bg-deep_purple-A200_0c border border-deep_purple-500"
                        : "bg-white-A700 border"
                    }  border-solid flex flex-1 flex-row gap-[16.8px] h-[84px] md:h-auto items-start justify-between p-[16.8px] rounded-[12px] w-full`}
                    onClick={() => {
                      handleOnClickDNS(3);
                    }}
                  >
                    <div className="flex flex-col gap-[16.8px] items-start justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="/images/img_frame_blue_gray_900.svg"
                        alt="frame"
                      />
                      <Text
                        className={`${
                          selectedDomain === 3 && domainVerify
                            ? "bg-clip-text bg-gradient"
                            : "text-blue_gray-900"
                        }  text-sm text-transparent w-auto`}
                        size="txtLatoBold14"
                      >
                        Other
                      </Text>
                    </div>
                    {selectedDomain === 3 && domainVerify ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton_white_a700.svg"
                        alt="miscradiobutton"
                      />
                    ) : (
                      <Img
                        className="h-[22px] w-[22px]"
                        src="/images/img_miscradiobutton.svg"
                        alt="miscradiobutton"
                      />
                    )}
                  </div>
                </List>
              </div>
              {domainVerify && (
                <div className="flex flex-col font-lato gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-lg w-full"
                      size="txtLatoBold18"
                    >
                      Copy the below DNS values
                    </Text>

                    <Stack
                      direction="row"
                      spacing={2}
                      style={{ marginTop: "20px" }}
                    >
                      <div>
                        <Typography
                          sx={{ fontSize: "12px", paddingLeft: "5px" }}
                        >
                          Type <span style={{ color: "red" }}>&#42;</span>
                        </Typography>
                        <Box
                          style={{
                            border: "1px solid lightgrey",
                            padding: "5px 25px",
                            paddingRight: "5px",
                            borderRadius: "15px",
                            width: "220px",
                            display: "flex", // Display children in a single line
                            alignItems: "center", // Vertically align children
                          }}
                        >
                          <Typography sx={{ width: "210px" }}>A</Typography>

                          <Box width="70px">
                            <IconButton
                              variant="contained"
                              onClick={() => {
                                handleCopyButtonClick(0);
                              }}
                              style={{
                                // background:
                                //   "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                                // padding: "8px 15px", // Adjust padding as needed
                                borderRadius: "8px", // Adjust border radius as needed
                              }}
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      </div>
                      <div>
                        <Typography
                          sx={{ fontSize: "12px", paddingLeft: "5px" }}
                        >
                          Name <span style={{ color: "red" }}>&#42;</span>
                        </Typography>
                        <Box
                          style={{
                            border: "1px solid lightgrey",
                            padding: "5px 25px",
                            paddingRight: "5px",
                            borderRadius: "15px",
                            width: "220px",
                            display: "flex", // Display children in a single line
                            alignItems: "center", // Vertically align children
                          }}
                        >
                          <Typography sx={{ width: "210px" }}>blog</Typography>

                          <Box width="70px">
                            <IconButton
                              variant="contained"
                              onClick={() => {
                                handleCopyButtonClick(1);
                              }}
                              style={{
                                // background:
                                //   "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                                // padding: "8px 15px", // Adjust padding as needed
                                borderRadius: "8px", // Adjust border radius as needed
                              }}
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      </div>
                      <div>
                        <Typography
                          sx={{ fontSize: "12px", paddingLeft: "5px" }}
                        >
                          Value <span style={{ color: "red" }}>&#42;</span>
                        </Typography>
                        <Box
                          style={{
                            border: "1px solid lightgrey",
                            padding: "5px 25px",
                            paddingRight: "5px",
                            borderRadius: "15px",
                            width: "220px",
                            display: "flex", // Display children in a single line
                            alignItems: "center", // Vertically align children
                          }}
                        >
                          <Typography sx={{ width: "210px" }}>
                            {ipAddress}
                          </Typography>

                          <Box width="70px">
                            <IconButton
                              variant="contained"
                              onClick={() => {
                                handleCopyButtonClick(2);
                              }}
                              style={{
                                // background:
                                //   "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                                // padding: "8px 15px", // Adjust padding as needed
                                borderRadius: "8px", // Adjust border radius as needed
                              }}
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      </div>
                    </Stack>
                  </div>
                </div>
              )}
              {domainVerify && (
                <>
                  <div className="flex flex-col font-lato gap-5 items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-lg w-full"
                        size="txtLatoSemiBold18"
                      >
                        Steps to setup your domain
                      </Text>
                      <Text
                        className="text-gray-600 text-xs w-full"
                        size="txtLatoRegular12"
                      >
                        Watch the video carefully to understand the setup
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[400px] sm:w-full">
                      <Img
                        className="h-[225px] md:h-auto object-cover rounded-bl-[11px] rounded-br-[11px] w-[400px] sm:w-full"
                        src={domainVerifyVidoe[selectedDomain]}
                        alt="p"
                      />
                    </div>
                  </div>
                  <div>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        padding: "5px 25px",
                        borderRadius: "15px",
                        width: "550px",
                        display: "flex", // Display children in a single line
                        alignItems: "center", // Vertically align children
                      }}
                    >
                      <Typography sx={{ fontWeight: "700" }}>blog.</Typography>
                      <TextField
                        variant="outlined"
                        type="text"
                        fullWidth
                        value={inputUrl}
                        onChange={handleChangeUrl}
                        onBlur={handleBlur} // Add the onBlur event handler
                        placeholder="yourdomain.com"
                        sx={{
                          paddingLeft: "0",
                          fontSize: "12px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              // borderColor: isValidUrl ? "transparent" : "red", // Red border for invalid URL
                              borderColor: "transparent", // make the border transparent
                            },
                            "&:hover fieldset": {
                              // borderColor: isValidUrl ? "transparent" : "red", // Red border for invalid URL
                              borderColor: "transparent", // make the border transparent
                            },
                            "&.Mui-focused fieldset": {
                              // borderColor: isValidUrl ? "transparent" : "red", // Red border for invalid URL
                              borderColor: "transparent", // make the border transparent
                            },
                          },
                          "& .MuiInputBase-root": {
                            height: "40px",
                          },
                        }}
                      />
                    </Box>
                  </div>
                  {blogActive && blogProcess && <CircularProgress />}
                  {!blogActive && (
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[170px]"
                      onClick={() => handelVerifyDomain()}
                      rightIcon={
                        <Img
                          className="h-4 ml-1.5"
                          src="/images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      size="lg"
                      variant="gradient"
                      color="purple_800_indigo_800"
                    >
                      <div className="font-medium font-poppins text-center text-sm">
                        Verify Domain
                      </div>
                    </Button>
                  )}
                  {blogActive && !blogProcess && (
                    <Button
                      disabled
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[170px]"
                      onClick={() => handelVerifyDomain()}
                      rightIcon={
                        <Img
                          className="h-4 ml-1.5"
                          src="/images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      size="lg"
                      // variant="gradient"
                      color="gray_50" // Changed color here
                    >
                      <div className="font-medium font-poppins text-center text-sm">
                        Domain Verified
                      </div>
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DNSSetup;

import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import PhoneInput from "react-phone-input-2";

// Icons
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CircularProgress from "@mui/material/CircularProgress";

// Import ContextAPI
import { useContext } from "react";
import DataContext from "../ContextAPI/DataState";
// End Import ContextAPI

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ConnectDomain = () => {
  const dataContext = useContext(DataContext);
  const ipAddress = "159.223.182.225";
  const [contactNumber, setContactNumber] = useState("");
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [blogActive, setBlogActive] = useState(false);
  const [blogProcess, setBLogProcess] = useState(true);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
  function getCurrentURL() {
    const currentURL = window.location.href;
    return currentURL;
  }

  const handelGetStarted = async () => {
    console.log("clicked get started");

    const url = getCurrentURL();
    console.log(contactNumber);
    console.log(input);

    delay(2000).then(() => {
      // navigate("/auth");
      navigate("/extract-data");
    });
  };
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

  const handleAddBlogs = async () => {
    if (inputUrl) {
      setBlogActive(true);
      setIsValidUrl(false);

      try {
        await delay(2000);
        await dataContext.pushBlogs("blog." + inputUrl);
      } catch (error) {
        console.error("Error pushing blogs:", error);
        // handle any errors here
      }

      setBLogProcess(false);
    } else {
      setIsValidUrl(true);
    }
  };

  const handleCopyButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(ipAddress);
      alert("IP Address copied to clipboard!");
    } catch (err) {
      alert("Failed to copy IP address");
    }
  };
  const openBlogUrl = () => {
    const url = `http://blog.${inputUrl}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography> */}
            <Avatar alt="Remy Sharp" src="/logo.png" />
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ height: "50px" }}></Box>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <Typography>Add Domain</Typography> */}
              <Typography sx={{ fontSize: "26px" }}>
                Setup your origination domain name eg: "company.com"
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (1) Add Domain
              </Typography>
              <Box sx={{ paddingLeft: "20px" }}>
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
                  <Typography>blog.</Typography>
                  <TextField
                    variant="outlined"
                    type="text"
                    fullWidth
                    value={inputUrl}
                    onChange={handleChangeUrl}
                    onBlur={handleBlur} // Add the onBlur event handler
                    placeholder="yourdomain.com"
                    sx={{
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
                  {/* 
                  <Box width="70px">
                    <Button
                      variant="contained"
                      style={{
                        background:
                          "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                        padding: "8px 15px", // Adjust padding as needed
                        borderRadius: "8px", // Adjust border radius as needed
                      }}
                    >
                      <Typography
                        fontSize="10px !important"
                        style={{ fontFamily: "Inter, sans-serif " }}
                      >
                        Confirm
                      </Typography>
                    </Button>
                  </Box> */}
                </Box>
                {isValidUrl && (
                  <Typography sx={{ color: "red" }}>
                    {" "}
                    Please enter a correct url{" "}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (2) Click below to copy this IP Address{" "}
              </Typography>
              <Box sx={{ paddingLeft: "20px" }}>
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
                  <Typography sx={{ width: "210px" }}>{ipAddress}</Typography>

                  <Box width="70px">
                    <IconButton
                      variant="contained"
                      onClick={() => {
                        handleCopyButtonClick();
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
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (3) Click activate to update push blogs online
              </Typography>
              <Box sx={{ paddingLeft: "20px" }}>
                {!blogActive && (
                  <Button
                    variant="contained"
                    style={{
                      background:
                        "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                      padding: "8px 15px",
                      borderRadius: "8px",
                    }}
                    onClick={() => {
                      handleAddBlogs();
                    }}
                  >
                    Activate My Blogs
                  </Button>
                )}
                {blogActive && blogProcess && <CircularProgress />}
                {blogActive && !blogProcess && (
                  <Button
                    variant="contained"
                    disabled
                    style={{
                      // background:
                      //   "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                      padding: "8px 15px",
                      borderRadius: "8px",
                    }}
                    onClick={handleCopyButtonClick}
                  >
                    Activated
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ paddingLeft: "20px" }}> </Box>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (3) On your DNS manager website{" "}
              </Typography>
              <img src="/images/domain_settings/1.png" />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ paddingLeft: "20px" }}> </Box>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (3) On your DNS manager website{" "}
              </Typography>
              <img src="/images/domain_settings/2.png" />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ paddingLeft: "20px" }}> </Box>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (3) On your DNS manager website{" "}
              </Typography>
              <img src="/images/domain_settings/3.png" />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ paddingLeft: "20px" }}> </Box>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (3) On your DNS manager website{" "}
              </Typography>
              <img src="/images/domain_settings/4.png" />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ paddingLeft: "20px" }}> </Box>
              <Typography sx={{ fontSize: "18px", my: "10px" }}>
                (3) Your are done! DNS sometime takes 24-48 hr to update
                records. Once done, your blogs will be avaiable on here
              </Typography>
              <Button
                sx={{
                  fontSize: "18px",
                  my: "10px",
                  textTransform: "lowercase",
                }}
                onClick={openBlogUrl} // Assign the function here
              >
                blogs.{inputUrl}
              </Button>
            </Grid>
            <Box sx={{ height: "250px" }}></Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default ConnectDomain;

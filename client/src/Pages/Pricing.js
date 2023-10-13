import React, { Component } from "react";
import { useState } from "react";
// import ReactDOM from "react-dom/client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
// import { styled } from "@mui/material/styles";
import AspectRatio from "@mui/joy/AspectRatio";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
// import DataContext from "../../context/DataContext";

function mapIndexToValue(index) {
  const values = [8, 16, 24];
  return values[index] || 8; // Default to 8 if the index is invalid
}

function getPriceFromValue(sliderValue) {
  if (sliderValue === 8) return 14;
  if (sliderValue === 16) return 19;
  if (sliderValue === 24) return 29;
  return 14; // Default price
}

function getPaymentUrlFromPrice(price) {
  const urls = {
    14: "https://buy.stripe.com/eVa3eBdVv4MHgWk14l",
    19: "https://buy.stripe.com/eVacPb5oZ5QLbC09AQ",
    29: "https://buy.stripe.com/14k3eBeZz7YT21q3cr",
  };
  return urls[price] || "https://default.url"; // Default URL if needed
}

const Pricing = () => {
  // const dataContext = useContext(DataContext);
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const defaultCountry = "United States";

  const [index, setIndex] = useState(1); // Default index value is 2
  const value = mapIndexToValue(index);
  const selectedPrice = getPriceFromValue(value);
  const payment_url = getPaymentUrlFromPrice(selectedPrice);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newIndex) => {
    setIndex(newIndex);
  };

  const marks = [0, 1, 2].map((i) => ({
    value: i,
    label: mapIndexToValue(i).toString(),
  }));

  const onClickBack = () => {
    navigate("/onboarding/voiceselection");
  };

  const onClickNext = async () => {
    setLoading(true); // start loading

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      await delay(4000);
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false); // stop loading after everything is done
    }

    window.open(payment_url, "_blank");
  };

  useEffect(() => {
    // console.log(dataContext.onboarding);
    // dataContext.setonboardingPrice({ price: selectedPrice });
  }, [selectedPrice]);

  return (
    <div>
      <Grid
        container
        direction="column"
        // spacing={2}
        // style={{ height: "100vh" }}
      >
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "gray" }}>
                Your Last Stwp to SEO Freedom!
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                marginLeft: "10px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "black" }}>
                How Fast Do Your Organic Traffic to Grow? &#129300;
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box sx={{ display: "flex", alignItems: "center", width: 620 }}>
              {/* Adjust width as needed */}
              <Box sx={{ px: 3 }}>
                <img
                  src="/assets/icons/turtle.png"
                  alt="Start Icon"
                  sx={{ marginRight: 2 }}
                />
              </Box>

              <Box sx={{ flex: 1, width: 600 }}>
                {/* Set width for the Slider's container */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src="/assets/icons/recommended-video-tag.png"
                    alt="Placeholder"
                    style={{ width: "100px" }}
                  />
                </Box>
                <Slider
                  aria-label="Temperature"
                  value={index}
                  onChange={handleChange}
                  valueLabelDisplay="off"
                  step={1}
                  min={0}
                  max={2}
                  marks={[
                    { value: 0, label: "8" },
                    { value: 1, label: "16" }, // Assuming value 2 is the middle value between 0 and 4
                    { value: 2, label: "24" },
                  ]}
                  sx={{
                    color: "#060640",
                    "&:hover": {
                      color: "#060640",
                    },
                    "&:active": {
                      color: "#060640",
                    },
                  }}
                />
              </Box>
              <Box sx={{ px: 3 }}>
                <img
                  src="/assets/icons/rabbit.png"
                  alt="End Icon"
                  sx={{ marginLeft: 2 }}
                />
              </Box>
            </Box>
          </Box>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {value == 8 &&
              renderBox(
                "#FFD18C",
                // "This Could Significantly Delay Your Time To Monetization"
                "Low Organic Traffic & Slow Timeline"
              )}

            {value == 16 &&
              // value < 45 &&
              renderBox(
                "#a6ced9",
                // "Average Speed Monetization"
                "Average Organic Traffic & Timeline"
              )}

            {value == 24 &&
              // value <= 60 &&
              renderBox(
                "#89ff80",
                // "10X Speed To Monetization"
                "High Organic Traffic & Fast Timeline"
              )}
          </Box>
          <Box height={40}></Box>
        </Grid>
        <Grid item>
          <Grid item>
            {/* <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="/assets/icons/poweredbystripe.png"
                alt="Placeholder"
                style={{ width: "150px" }}
              />
            </Box> */}
          </Grid>
          <Box height={20}></Box>
          {/* <Box bgcolor="secondary.main" height={40}></Box> */}

          <Box display="flex" justifyContent="center" alignItems="center">
            {/* <Stack direction="row" spacing={12}>
              {voices.slice(0, 2).map((voice) => (
                <VoiceButton voice={voice} key={voice.name} />
              ))}
            </Stack> */}

            <PriceCard
              time={value}
              price={selectedPrice}
              paymentLink={payment_url}
              onClickNext={onClickNext}
            />
          </Box>
          <Box height={60}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src="/assets/icons/trustpilot.png"
              alt="Placeholder"
              style={{ width: "450px" }}
            />
          </Box>
          <Box height={60}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                marginLeft: "10px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "black" }}>
                {/* Common Pricing & Payment Questions */}
                FAQs
              </span>
            </Typography>
          </Box>
          <Box height={20}></Box>

          <Box display="flex" justifyContent="center" alignItems="center">
            <BasicAccordion />
          </Box>
        </Grid>

        <Grid item>
          <Box height={80}></Box>
          {/* <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={2}>
              <Button
                onClick={onClickBack}
                variant="outlined"
                size="sm"
                sx={{
                  px: 4,
                  color: "#ff4d70",
                  fontSize: "12px",
                  borderRadius: "10px",
                  borderColor: "#ff4d70",
                  "&:hover": {
                    borderColor: "#ff4d70",
                  },
                  "&:active": {
                    borderColor: "#735fed",
                  },
                }}
              >
                Back
              </Button>
              <Button
                onClick={onClickNext}
                variant="contained"
                size="sm"
                sx={{
                  px: 4,

                  fontSize: "12px",
                  borderRadius: "10px",
                  backgroundColor: "#ff4d70",
                  "&:hover": {
                    backgroundColor: "#ff4d70",
                  },
                  "&:active": {
                    backgroundColor: "#ff4d70",
                  },
                }}
                // href={payment_url}
              >
                Next
              </Button>
            </Stack>
          </Box> */}
          <Box height={80}></Box>
        </Grid>
      </Grid>
      {/* <LiveChat /> */}

      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)", // this will give a semi-transparent background
            zIndex: 9999, // ensure it covers everything
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
const renderBox = (backgroundColor, text) => (
  <Box
    sx={{
      py: 1,
      px: 12,
      borderRadius: "15px",
      backgroundColor: backgroundColor,
    }}
  >
    <Typography
      variant="h6"
      style={{
        marginLeft: "10px",
        fontSize: "12px",
      }}
    >
      <span style={{ color: "black" }}>{text}</span>
    </Typography>
  </Box>
);
function PriceCard({ time, price, paymentLink, onClickNext }) {
  return (
    //  backgroundColor: "FF335B"
    <Card
      variant="outlined"
      sx={{
        width: 340,
        background: "linear-gradient(90deg,#060640 10%, #2A2A4B 90%)",
        color: "white",
      }}
    >
      <div>
        <Typography level="title-lg" sx={{ fontSize: "18px" }}>
          GOD MODE
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "32px", fontWeight: 700, p: 1 }}
        >
          ${price}
          <Box
            component="span"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              // verticalAlign: "top",
              marginLeft: 1,
            }}
          >
            / Month
          </Box>
        </Typography>
      </div>

      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs" sx={{ mb: 1 }}>
            What's included
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              <Box component="span" sx={{ color: "#29FE16" }}>
                {time} SEO
              </Box>
              <span> </span>Optimized Blogs Per Week
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Automated Technical SEO
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Automated Internal Back Linking
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Human Quality Blogs Voice Over
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Support 35+ Languages
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Automated Posting
            </Typography>
          </Box>
          {/* <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              YouTube topic Research Analytics
            </Typography>
          </Box> */}
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Live Chat 24x7 Support
            </Typography>
          </Box>
          <Box height={60}></Box>

          <Box display="flex" textAlign="center" sx={{ mb: 1 }}>
            <Button
              onClick={onClickNext}
              size="lg"
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#2A2A4B",
                fontWeight: "700",
                px: 5,
                py: 1,
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#ffe5eb",
                },
                "&:active": {
                  backgroundColor: "white !important",
                },
                mx: "auto",
              }}
              // href={paymentLink}
            >
              Get Started
            </Button>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
}

function BasicAccordion() {
  return (
    <Box sx={{ maxWidth: "700px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How does the automated internal back linking work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            AutoSEO internally backlinks your related blogs to each other
            automatically to boost your ranking as it’s one of Google’s main SEO
            factors in 2023.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How's AutoSEO much better than ChatGPT?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Glad You Asked! <br></br>
            <br></br>
            AutoSEO is actually built on top of chatGPT Fine Tuned to your
            business to escape Google's AI AI plagiarism detector so your Blogs
            only rank, not de-rank .<br></br>
            <br></br>
            Plus, Auto-SEO automates the entire process of SEO (Keyword
            research, auto writing, auto optimizing, rewriting, technical seo)
            so you focus on driving your business while autoSEO drives your
            organic traffic!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How promotional or non-promotional will AutoSEO blogs be?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Initially, your contents will be value contents to gets picked by
            Google much faster. Once ranked, autoSEO will automatically blend
            your business naturally in the blog to maximize conversions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Pricing;

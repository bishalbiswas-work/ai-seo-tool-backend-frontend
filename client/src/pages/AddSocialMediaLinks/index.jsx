import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import HorizontalLinearStepper from "components/HorizontalLinearStepper";

// Import ContextAPI
import { useContext } from "react";
// import DataContext from "../ContextAPI/DataState";
import DataContext from "ContextAPI/DataState";
// End Import ContextAPI

const AddSocialMediaLinks = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  const steps = ["Step 1", "Step 2", "Step 3"];
  const [facebookLink, setFacebookLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [redditLink, setRedditLink] = useState("");
  // const handleChange = (e, setter) => {
  //   if (e && e.target) {
  //     setter(e.target.value);
  //   }
  // };
  const handleChangeFacebook = (e) => {
    // console.log(e);
    setFacebookLink(e);
  };
  const handleChangeLinkedin = (e) => {
    // console.log(e);
    setLinkedinLink(e);
  };
  const handleChangeTwitter = (e) => {
    // console.log(e);
    setTwitterLink(e);
  };
  const handleChangeReddit = (e) => {
    // console.log(e);
    setRedditLink(e);
  };

  useEffect(() => {
    console.log(facebookLink, linkedinLink, twitterLink, redditLink);
    // console.log(inputValues);
  }, [facebookLink, linkedinLink, twitterLink, redditLink]);

  const handleNext = () => {
    let data = dataContext.businessMetaData;
    const updatedData = {
      ...data,
      facebookLink: facebookLink,
      linkedinLink: linkedinLink,
      twitterLink: twitterLink,
      redditLink: redditLink,
    };
    console.log("Add Social Media Links Page: ", updatedData);
    dataContext.setBusinessMetaDataFunction({ data: updatedData });
    navigate("/onboarding/add-website-code");
  };
  const handleBack = () => {
    navigate("/onboarding/voice-setup");
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-4 w-full ">
        <Header className="bg-white-A700 flex md:gap-10 items-center justify-between px-10 md:px-5 py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs1 w-full" />
        <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-6 w-full ">
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
        <div className="flex flex-col font-inter md:gap-4 h-[612px] md:h-auto items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-8 w-full">
          <Line className="bg-black-900_0c h-px w-full" />
          <div className="flex flex-col h-[580px] md:h-auto items-center justify-start">
            <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-col gap-8 items-center justify-center max-w-[800px] p-10 sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-3.5 h-[59px] md:h-auto items-start justify-center px-5 w-full w-[800px]">
                {/* <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 w-[96%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row items-center justify-start w-full">
                      <Button
                        className="flex h-7 items-center justify-center rounded-[50%] w-7"
                        shape="circle"
                        color="deep_purple_500"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_checkmark_gray_50_01.svg"
                          alt="checkmark"
                        />
                      </Button>
                      <Line className="bg-deep_purple-500 h-0.5 w-[92%]" />
                    </div>
                    <div className="flex flex-row items-center justify-start w-full">
                      <Button
                        className="flex h-7 items-center justify-center rounded-[50%] w-7"
                        shape="circle"
                        color="deep_purple_500"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_checkmark_gray_50_01.svg"
                          alt="checkmark"
                        />
                      </Button>
                      <Line className="bg-deep_purple-500 h-0.5 w-[92%]" />
                    </div>
                  </List>
                  <div className="border border-deep_purple-500 border-solid flex flex-col h-7 items-center justify-start p-[9px] rounded-[50%] w-7">
                    <div className="bg-deep_purple-500 h-[9px] rounded w-[9px]"></div>
                  </div>
                </div> */}
                {/* <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-gray-600 text-xs w-auto"
                    size="txtInterRegular12"
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
                    className="text-deep_purple-A200 text-right text-xs w-auto"
                    size="txtInterSemiBold12"
                  >
                    Add social links
                  </Text>
                </div> */}
                <HorizontalLinearStepper currentStep={2} steps={steps} />
              </div>
              <Line className="bg-black-900_0c h-px w-full" />
              <div className="flex flex-col font-lato gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-full"
                    size="txtLatoBold18"
                  >
                    Fill your social media link
                  </Text>
                  <Text
                    className="text-gray-600 text-xs w-full"
                    size="txtLatoRegular12"
                  >
                    Add the social media links that you want to feature on your
                    blog
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Input
                    name="facebookLink"
                    placeholder="Add Facebook link"
                    className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="border border-black-900_0c border-solid flex w-full"
                    prefix={
                      <Img
                        className="h-6 mr-3 my-auto"
                        src="/images/img_facebook.png"
                        alt="Facebook"
                      />
                    }
                    value={facebookLink} // Bind input value to state
                    onChange={(e) => handleChangeFacebook(e)}
                  ></Input>
                  <Input
                    name="linkedinLink"
                    placeholder="Add LinkedIn link"
                    className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="border border-black-900_0c border-solid flex w-full"
                    prefix={
                      <Img
                        className="h-6 mr-3 my-auto"
                        src="/images/img_linkedin.svg"
                        alt="linkedin"
                      />
                    }
                    value={linkedinLink} // Bind input value to state
                    onChange={(e) => handleChangeLinkedin(e)}
                  ></Input>
                  <Input
                    name="twitterLink"
                    placeholder="Add Twitter link"
                    className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="border border-black-900_0c border-solid flex w-full"
                    prefix={
                      <Img
                        className="h-6 mr-3 my-auto"
                        src="/images/img_twitter.svg"
                        alt="twitter"
                      />
                    }
                    value={twitterLink} // Bind input value to state
                    onChange={(e) => handleChangeTwitter(e)}
                  ></Input>
                  <Input
                    name="redditLink"
                    placeholder="Add Discord link"
                    className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="border border-black-900_0c border-solid flex w-full"
                    prefix={
                      <Img
                        className="h-6 mr-3 my-auto"
                        src="/images/img_reddit.svg"
                        alt="Reddit"
                      />
                    }
                    value={redditLink} // Bind input value to state
                    onChange={(e) => handleChangeReddit(e)}
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row font-poppins gap-3 items-center justify-start w-auto">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[101px]"
                  onClick={() => handleBack()}
                  leftIcon={
                    <Img
                      className="h-3 mr-1.5 my-1"
                      src="/images/img_frame_12x12.png"
                      alt="Frame"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="outline"
                  color="purple_800_indigo_800"
                >
                  <div className="!text-purple-800 font-medium text-center text-sm">
                    Back
                  </div>
                </Button>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[117px]"
                  onClick={() => handleNext()}
                  rightIcon={
                    <Img
                      className="h-3 ml-1.5 my-1"
                      src="/images/img_frame_white_a700.svg"
                      alt="Frame"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="purple_800_indigo_800"
                >
                  <div className="font-medium text-center text-sm">Submit</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSocialMediaLinks;

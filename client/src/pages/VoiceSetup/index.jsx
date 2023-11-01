import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";
import HorizontalLinearStepper from "components/HorizontalLinearStepper";
import HorizontalLinearStepperv2 from "components/HorizontalLinearStepperv2";
// Import ContextAPI
import { useContext } from "react";
// import DataContext from "../ContextAPI/DataState";
import DataContext from "ContextAPI/DataState";
// End Import ContextAPI
const VoiceSetup = () => {
  const dataContext = useContext(DataContext);

  const navigate = useNavigate();
  const steps = ["Step 1", "Step 2", "Step 3"];
  const [voice, setVoice] = useState("");
  const handleVoice = (prop) => {
    setVoice(prop);
    // dataContext.setBusinessMetaDataFunction({data:})
    console.log("clicked dns button", prop);
  };
  const handleNext = () => {
    if (voice) {
      let data = dataContext.businessMetaData;
      const updatedData = {
        ...data,
        voice: voice,
      };
      console.log("Voice Page: ", updatedData);
      dataContext.setBusinessMetaDataFunction({ data: updatedData });
      navigate("/onboarding/add-social-media-links");
    }
  };
  const handleBack = () => {
    navigate("/onboarding/dns-setup");
  };
  // useEffect(() => {
  //   let data = dataContext.businessMetaData;
  //   const updatedData = {
  //     ...data,
  //     voice: voice,
  //   };
  //   console.log("Voice Page: ", updatedData);
  //   dataContext.setBusinessMetaDataFunction({ data: updatedData });
  // }, [voice]);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-4 w-full">
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
        <div className="flex flex-col font-inter md:gap-4 h-[612px] md:h-auto items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-8 w-full">
          {/* <Line className="bg-black-900_0c h-px w-full" /> */}
          <div className="flex flex-col h-[548px] md:h-auto items-center justify-start">
            <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-col gap-8 items-center justify-center max-w-[800px] p-10 sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-3.5 h-[59px] md:h-auto items-center justify-center px-5 w-full w-[800px]">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  {/* <div className="flex flex-1 flex-row items-center justify-start w-full">
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
                  <Img
                    className="flex-1 h-7 max-h-7 sm:w-[] md:w-[]"
                    src="images/img_component2.svg"
                    alt="componentTwo"
                  /> 
                  <div className="border border-blue_gray-100 border-solid h-7 rounded-[50%] w-7"></div>

                  */}
                  <HorizontalLinearStepper currentStep={1} steps={steps} />
                </div>
                {/* <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-gray-600 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    Setup DNS Server
                  </Text>
                  <Text
                    className="text-center text-deep_purple-A200 text-xs w-auto"
                    size="txtInterSemiBold12"
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
              </div>
              <Line className="bg-black-900_0c h-px w-full" />
              <div className="flex flex-col font-lato gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-full"
                    size="txtLatoBold18"
                  >
                    Choose your voice
                  </Text>
                  <Text
                    className="text-gray-600 text-xs w-full"
                    size="txtLatoRegular12"
                  >
                    Select your voice for the blog audio
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <div
                    className={`${
                      voice === "male"
                        ? "bg-deep_purple-A200_0c border border-deep_purple-500"
                        : "bg-white-A700 border"
                    } bg-white-A700 border border-black-900_0c border-solid flex flex-1 flex-col gap-[19.2px] items-center justify-start p-[19.2px] rounded-[14px] w-full`}
                    onClick={() => {
                      handleVoice("male");
                    }}
                  >
                    <Img
                      className="h-[68px] w-[59px]"
                      src="/images/img_signal_gray_600.svg"
                      alt="signal"
                    />
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center w-full"
                      rightIcon={
                        <>
                          {voice === "male" ? (
                            <Img
                              className="h-[25px] ml-[35px]"
                              src="/images/img_miscradiobutton_white_a700.svg"
                              alt="Misc / Radiobutton"
                            />
                          ) : (
                            <Img
                              className="h-[25px] ml-[35px]"
                              src="/images/img_miscradiobutton.svg"
                              alt="Misc / Radiobutton"
                            />
                          )}
                        </>
                      }
                    >
                      <div
                        className={`${
                          voice === "male"
                            ? " text-purple-800"
                            : "text-blue_gray-900"
                        }  font-bold text-base text-left `}
                      >
                        {" "}
                        Male
                      </div>
                    </Button>
                  </div>
                  <div
                    className={` ${
                      voice === "female"
                        ? "bg-deep_purple-A200_0c border border-deep_purple-500"
                        : "bg-white-A700 border"
                    } border-solid flex flex-1 flex-col gap-[19.2px] items-center justify-start p-[19.2px] purple_800_indigo_800_border2 rounded-[14px] w-full`}
                    onClick={() => {
                      handleVoice("female");
                    }}
                  >
                    <Img
                      className="h-[68px] w-[61px]"
                      src="/images/img_user_gray_600.svg"
                      alt="user"
                    />
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center w-full"
                      rightIcon={
                        <>
                          {voice === "female" ? (
                            <Img
                              className="h-[25px] ml-[35px]"
                              src="/images/img_miscradiobutton_white_a700.svg"
                              alt="Misc / Radiobutton"
                            />
                          ) : (
                            <Img
                              className="h-[25px] ml-[35px]"
                              src="/images/img_miscradiobutton.svg"
                              alt="Misc / Radiobutton"
                            />
                          )}
                        </>
                      }
                    >
                      <div
                        className={`${
                          voice === "female"
                            ? " text-purple-800"
                            : "text-blue_gray-900"
                        }  font-bold text-base text-left `}
                      >
                        Female
                      </div>
                    </Button>
                  </div>
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
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[97px]"
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
                  variant={voice ? "gradient" : "fill"} // Variant changes based on 'voice'
                  color={voice ? "purple_800_indigo_800" : "blue_gray_300"} // Color changes based on 'voice'
                >
                  <div className="font-medium text-center text-sm">Next</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceSetup;

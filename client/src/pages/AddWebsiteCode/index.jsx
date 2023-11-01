import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";
// import Header from "../../";

// Import ContextAPI
import { useContext } from "react";
// import DataContext from "../ContextAPI/DataState";
import DataContext from "ContextAPI/DataState";
// End Import ContextAPI

const AddWebsiteCode = () => {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/onboarding/add-social-media-links");
  };
  useEffect(() => {
    const pushBlogs = async () => {
      await dataContext.pushBlogs(dataContext.businessMetaData.domain);
    };
    pushBlogs();
  }, []);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-4 w-full">
        <Header className="bg-white-A700 flex md:gap-10 items-center justify-between px-10 md:px-5 py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs1 w-full" />
        <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-6 w-full">
          <Button
            className="common-pointer flex h-10 items-center justify-center w-10"
            onClick={() => {
              handleBack();
            }}
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
        <div className="flex flex-col font-lato md:gap-4 h-[612px] md:h-auto items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-8 w-full">
          <Line className="bg-black-900_0c h-px w-full" />
          <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-col gap-8 items-center justify-center max-w-[800px] p-10 md:px-5 rounded-[20px] w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-center w-full">
                <Text
                  className="text-black-900_bf text-center text-lg w-full"
                  size="txtLatoRegular18"
                >
                  Hurrayy!! 🎉 🎉
                </Text>
                <Text
                  className="text-center text-gray-900_02 text-xl tracking-[-0.20px] w-full"
                  size="txtPoppinsSemiBold20"
                >
                  Your account setup is completed!
                </Text>
              </div>
              <Img
                className="h-60 w-[322px]"
                src="/images/img_group42362.svg"
                alt="group42362"
              />
            </div>
            <div className="bg-gray-50_02 border border-black-900_0c border-solid flex md:flex-col flex-row gap-5 items-center justify-center sm:px-5 px-8 py-5 rounded-[12px] w-full">
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <Text
                  className="leading-[150.00%] max-w-[487px] md:max-w-full text-blue_gray-700 text-sm"
                  size="txtLatoMedium14"
                >
                  Please copy the following code and paste it onto your landing
                  page to display blogs on your website.
                </Text>
              </div>
              <div className="flex flex-col font-poppins items-center justify-start w-auto">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[149px]"
                  rightIcon={
                    <Img
                      className="h-4 mt-px mb-1 ml-1.5"
                      src="/images/img_frame_white_a700_16x16.svg"
                      alt="Frame"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="purple_800_indigo_800"
                >
                  <div className="font-medium text-center text-sm">
                    Copy Code
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWebsiteCode;

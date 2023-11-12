import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";

// import { Button, Img, List, Text } from "";
import Button from "./Button";
import Img from "./Img";
import Input from "./Input";
import Line from "./Line";
import List from "./List";
import PagerIndicator from "./PageIndicator";
import Text from "./Text";
import Typewriter from "typewriter-effect";

import InsertLinkIcon from "@mui/icons-material/InsertLink";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Import ContextAPI
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
// End Import ContextAPI
const Dashboardv4 = () => {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [blogs, setBlogs] = useState(dataContext.blogs);

  const handleClickBlog = (index) => {
    console.log("Selected Blog: ", index);
    dataContext.setSelectedBlogFunction({ data: index });
    navigate("/dashboard/blogpage");
  };
  const [businessMetaData, setBusinessMetaData] = useState(
    dataContext.businessMetaData
  );
  const handleClickNext = () => {
    navigate("/pricing");
    // navigate("/onboarding/dns-setup");
  };
  const handleClickTryFree = () => {
    navigate("/pricing");
    // navigate("/onboarding/dns-setup");
  };
  useEffect(() => {
    setBusinessMetaData(dataContext.businessMetaData);
  }, []);
  console.log("Blogs on Dashboard ", blogs);
  return (
    <>
      <div className="bg-gray-200_04 flex flex-col font-dmsans items-center justify-start mx-auto p-3 w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1241px] mb-[23px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full mb-[50px]">
              <div className="flex items-center">
                {dataContext.businessMetaData.faviconUrl &&
                dataContext.businessMetaData.faviconUrl.length > 0 ? (
                  <Img
                    className="h-14 md:h-auto sm:mt-0 object-cover"
                    src={dataContext.businessMetaData.faviconUrl}
                    alt="imageSixtySeven"
                  />
                ) : null}
                <div className="flex  items-center">
                  <Text
                    className="text-[24px] pt-[30px] text-blue_gray-900_04 sm:text-xl md:text-2xl ml-4"
                    size="txtDMSansMedium24"
                  >
                    {/* {businessMetaData.name.charAt(0).toUpperCase() +
                      businessMetaData.name.slice(1)} */}
                    {(dataContext.businessMetaData?.name
                      ?.charAt(0)
                      ?.toUpperCase() ?? "") +
                      (dataContext.businessMetaData?.name?.slice(1) ?? "")}
                  </Text>
                </div>
              </div>
              {/* <Img
                className="h-[97px] md:h-auto object-cover"
                src="images/img_screenshot202.png"
                alt="screenshot202"
              /> */}
              <div className="bg-gray-200_04 pt-[30px] border border-solid border-white-A700_14 flex md:flex-1 flex-col items-end justify-start p-[5px] rounded-[24px] md:w-full">
                <div className="flex flex-col items-center justify-start mr-2  md:w-full">
                  <Button
                    // onClick={() => {
                    //   handleClickNext();
                    // }}
                    onClick={() => {
                      handleClickTryFree();
                    }}
                    className="cursor-pointer font-semibold min-w-[112px] rounded-[19px] text-[13px] text-center tracking-[0.20px]"
                    color="indigo_900"
                    size="md"
                  >
                    Connect to{" "}
                    {(dataContext.businessMetaData?.name
                      ?.charAt(0)
                      ?.toUpperCase() ?? "") +
                      (dataContext.businessMetaData?.name?.slice(1) ?? "")}{" "}
                    <InsertLinkIcon sx={{ marginBottom: "1px" }} />
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-2">
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                <>
                  About{" "}
                  {businessMetaData.name.charAt(0).toUpperCase() +
                    businessMetaData.name.slice(1)}
                </>
              </Text>
            </div> */}
            <div className="flex flex-row font-dmsans md:gap-10 items-center justify-between max-w-[1209px] mt-[10px] mx-auto md:px-5 w-full">
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                <>
                  About{" "}
                  {dataContext.businessMetaData.name.charAt(0).toUpperCase() +
                    dataContext.businessMetaData.name.slice(1)}
                </>
              </Text>
              <Img
                className="h-[43px] md:h-auto object-cover w-[42px]"
                src="images/img_image68.png"
                alt="imageSixtyEight"
              />
            </div>
            <div className="border border-gray-500_02 border-solid flex md:flex-col flex-row gap-[7px] md:h-auto items-end justify-end max-w-[1208px] ml-1 md:ml-[0] mt-[41px] p-6 sm:px-5 rounded-lg w-full">
              <Text
                className="leading-[30.00px] max-w-[1157px] md:max-w-full text-blue_gray-500 text-lg max-h-[11.625rem] overflow-y-scroll"
                size="txtDMSansRegular18"
              >
                {dataContext.businessMetaData.summary}
              </Text>
              {/* <div className="flex flex-col font-helvetica h-11 md:h-auto items-center justify-center sm:px-5 px-6 py-3 w-[78px]">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="bg-clip-text bg-gradient  text-center text-sm text-transparent w-auto"
                    size="txtHelveticaBold14Purple800"
                  >
                    Update
                  </Text>
                </div>
              </div> */}
            </div>
            {/* <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[100px] ">
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                {businessMetaData.name.charAt(0).toUpperCase() +
                  businessMetaData.name.slice(1)}
                ’s Blogspace
              </Text>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "100px",
              }}
            >
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                {businessMetaData.name.charAt(0).toUpperCase() +
                  businessMetaData.name.slice(1)}
                ’s Blogspace
              </Text>
              <Text
                className="text-[22px] text-blue_gray-900_04"
                size="txtDMSansMedium22"
              >
                2023 October
              </Text>
            </div> */}
            <div className="flex md:flex-col flex-row font-dmsans md:gap-10 items-start justify-between max-w-[1218px] mt-[50px] mx-auto md:px-5 w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                Your SEO-Optimized blogs Scheduled for Publish...
              </Text>
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                  {/* <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_gray_900.svg"
                    alt="arrowleft"
                  /> */}
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtDMSansMedium22"
                  >
                    2023
                  </Text>
                  {/* <Img
                    className="h-6 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="font-worksans h-[2358px] md:h-[3240px] sm:h-[4988px] relative w-full">
            <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
              <div className="h-[1419px] md:h-[2224px] sm:h-[3464px] relative w-full">
                <div className="h-[1419px] md:h-[2224px] sm:h-[3464px] m-auto w-full">
                  <Text
                    className=" text-xl w-[113px]  "
                    style={{
                      marginLeft: "5px",
                      color: "#170f49",
                      fontWeight: "500",
                    }}
                    size="txtDMSansBold20"
                  >
                    {/* Novemeber */}
                    {new Date(
                      new Date().setDate(new Date().getDate())
                    ).toLocaleDateString("en-US", {
                      month: "long",
                    })}
                  </Text>
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      {/* Main Container for blogs */}
                      <div className="flex md:flex-1 flex-col h-[650px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[147px] items-start justify-start w-full">
                          <div className="font-worksans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                            {dataContext.blogs
                              .slice(0, 3)
                              .map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() => {
                                    handleClickBlog(index);
                                  }}
                                >
                                  <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                                    <div className="h-60 relative w-full">
                                      <Img
                                        className="h-60 m-auto object-cover rounded-md w-full"
                                        src={item.imagesUrl[0].imageUrl}
                                        alt="rectangleThirtyEight"
                                      />
                                      {/* <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                      <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                        <Img
                                          className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                          src="images/img_graph.png"
                                          alt="graph"
                                        />
                                        <div className="flex flex-col items-center justify-between w-[72px]">
                                          <Text
                                            className="text-[10px] text-center text-green-A700"
                                            size="txtDMSansBold10"
                                          >
                                            60
                                          </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="text-[9px] text-center text-gray-900_03"
                                        size="txtWorkSansRomanRegular9"
                                      >
                                        <span className="text-gray-900_03 font-worksans font-normal">
                                          <>
                                            Overall score
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-gray-900_03 font-worksans font-bold">
                                          High
                                        </span>
                                      </Text>
                                    </div> */}
                                    </div>
                                    <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                                          <div className="flex flex-row gap-3 items-center justify-start w-[85%] md:w-full">
                                            {dataContext.blogs[
                                              index
                                            ].seoKeywords.map((item, index) => (
                                              <>
                                                <Button
                                                  className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                                  shape="round"
                                                  color="indigo_A200_0c"
                                                  // style={{
                                                  //   backgroundColor: `rgb(75 107 251  )`,
                                                  //   color: "white",
                                                  // }}
                                                  style={{
                                                    // backgroundColor: `rgb(75 107 251  )`,
                                                    color: `rgb(75 107 251  )`,
                                                  }}
                                                >
                                                  {item}
                                                </Button>
                                              </>
                                            ))}
                                            {/* <Button
                                            className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                            shape="round"
                                            color="indigo_A200_0c"
                                          >
                                            Technology
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium min-w-[182px] rounded-md text-center text-sm"
                                            shape="round"
                                            color="indigo_A200_0c"
                                          >
                                            Environmental Changes
                                          </Button> */}
                                          </div>
                                          <Text
                                            className="leading-[28.00px] text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                                            size="txtWorkSansSemiBold24"
                                          >
                                            {item.title}
                                            {/* <Typewriter
                                            options={{
                                              strings: [item.title],
                                              autoStart: true,
                                              loop: true,
                                            }}
                                          /> */}
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-auto">
                                        <Text
                                          className="text-base text-gray-500_03 w-auto"
                                          size="txtWorkSansRomanRegular16"
                                        >
                                          {/* Novemeber {10 * (index + 1)}, 2022 */}
                                          {new Date(
                                            new Date().setDate(
                                              new Date().getDate() +
                                                (index + 1) * 6
                                            )
                                          ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                          })}
                                        </Text>
                                      </div>
                                      <div>
                                        {index == 0 && (
                                          <div className="flex flex-col items-start justify-start w-auto">
                                            <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                              <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                                <Text
                                                  className="text-gray-900_04 text-xs w-auto"
                                                  size="txtDMSansRegular12"
                                                >
                                                  16,000
                                                </Text>
                                                <Img
                                                  className="h-2.5 w-[11px]"
                                                  src="images/img_signal.svg"
                                                  alt="signal"
                                                />
                                                <Text
                                                  className="text-[11px] text-green-A700 w-auto"
                                                  size="txtPoppinsRegular11"
                                                >
                                                  High
                                                </Text>
                                              </div>
                                              <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                                <Text
                                                  className="text-gray-900_04 text-xs w-auto"
                                                  size="txtDMSansRegular12"
                                                >
                                                  Competition
                                                </Text>
                                                <Img
                                                  className="h-2.5 w-[11px]"
                                                  src="images/img_trash.svg"
                                                  alt="trash"
                                                />
                                                <Text
                                                  className="text-[11px] text-amber-A700 w-auto"
                                                  size="txtPoppinsRegular11AmberA700"
                                                >
                                                  Medium
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                        {index == 1 && (
                                          <div className="flex flex-col items-start justify-start w-auto">
                                            <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                              <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                                <Text
                                                  className="text-gray-900_04 text-xs w-auto"
                                                  size="txtDMSansRegular12"
                                                >
                                                  10,000
                                                </Text>
                                                <Img
                                                  className="h-2.5 w-[11px]"
                                                  src="images/img_trash.svg"
                                                  alt="trash_One"
                                                />
                                                <Text
                                                  className="text-[11px] text-amber-A700 w-auto"
                                                  size="txtPoppinsRegular11AmberA700"
                                                >
                                                  Medium
                                                </Text>
                                              </div>
                                              <div className="bg-deep_orange-50 border border-deep_orange-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                                <Text
                                                  className="text-gray-900_04 text-xs w-auto"
                                                  size="txtDMSansRegular12"
                                                >
                                                  Competition
                                                </Text>
                                                <Img
                                                  className="h-2.5 w-[11px]"
                                                  src="images/img_skill.svg"
                                                  alt="skill"
                                                />
                                                <Text
                                                  className="text-[11px] text-deep_orange-A700 w-auto"
                                                  size="txtPoppinsRegular11DeeporangeA700"
                                                >
                                                  High
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                        {index == 2 && (
                                          <div className="flex flex-col items-start justify-start w-auto">
                                            <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                              <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                                <Text
                                                  className="text-gray-900_04 text-xs w-auto"
                                                  size="txtDMSansRegular12"
                                                >
                                                  16,000
                                                </Text>
                                                <Img
                                                  className="h-2.5 w-[11px]"
                                                  src="images/img_signal.svg"
                                                  alt="signal_One"
                                                />
                                                <Text
                                                  className="text-[11px] text-green-A700 w-auto"
                                                  size="txtPoppinsRegular11"
                                                >
                                                  High
                                                </Text>
                                              </div>
                                              <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                                <Text
                                                  className="text-gray-900_04 text-xs w-auto"
                                                  size="txtDMSansRegular12"
                                                >
                                                  Competition
                                                </Text>
                                                <Img
                                                  className="h-2.5 w-[11px]"
                                                  src="images/img_trash.svg"
                                                  alt="trash_Two"
                                                />
                                                <Text
                                                  className="text-[11px] text-amber-A700 w-auto"
                                                  size="txtPoppinsRegular11AmberA700"
                                                >
                                                  Medium
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            {
                              ((maxSkeletons) => {
                                const skeletonsToShow = Math.max(
                                  maxSkeletons - dataContext.blogs.length,
                                  0
                                );
                                return Array.from(
                                  { length: skeletonsToShow },
                                  (_, index) => (
                                    <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                                      <div className="h-400 relative w-full">
                                        <Stack spacing={1}>
                                          {/* For variant="text", adjust the height via font-size */}
                                          <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={240}
                                          />
                                          {/* For other variants, adjust the size with `width` and `height` */}

                                          <Skeleton
                                            variant="rectangular"
                                            width="50%"
                                            height={10}
                                          />
                                          <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={10}
                                          />
                                          <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={10}
                                          />
                                          <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={10}
                                          />
                                          <Skeleton
                                            variant="rounded"
                                            width="100%"
                                            height={40}
                                          />
                                          <Skeleton
                                            variant="rounded"
                                            width="100%"
                                            height={40}
                                          />
                                          <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={10}
                                          />
                                          <Skeleton
                                            variant="rectangular"
                                            width="80%"
                                            height={10}
                                          />
                                          <Skeleton
                                            variant="rectangular"
                                            width="70%"
                                            height={10}
                                          />
                                          <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={10}
                                          />
                                        </Stack>
                                      </div>
                                    </div>
                                  )
                                );
                              })(3) // maxSkeletons is 3
                            }
                          </div>

                          {/* <div
                            style={{
                              textAlign: "right",
                              width: "100%",
                              height: "250px",
                            }}
                          >
                            <Text
                              className="text-[22px] text-blue_gray-900_04"
                              size="txtDMSansMedium22"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                textAlign: "right",
                              }}
                            >
                              2023 November
                            </Text>
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="flex md:flex-1 flex-col h-[703px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[111px] justify-start w-full">
                          <div className="font-worksans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                            {blogs.slice(3, 6).map((item, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  handleClickBlog(index + 3);
                                }}
                              >
                                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                                  <div className="h-60 relative w-full">
                                    <Img
                                      className="h-60 m-auto object-cover rounded-md w-full"
                                      src={item.imagesUrl[0].imageUrl}
                                      alt="rectangleThirtyEight"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                                      {blogs[index + 3].seoKeywords.map(
                                        (item, index) => (
                                          <>
                                            <Button
                                              className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                              shape="round"
                                              color="indigo_A200_0c"
                                            >
                                              {item}
                                            </Button>
                                          </>
                                        )
                                      )}

                                      <Text
                                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                        size="txtWorkSansSemiBold24"
                                      >
                                        {item.title}
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_03 w-auto"
                                        size="txtWorkSansRomanRegular16"
                                      >
                                        November {10 * (index + 1)}, 2022
                                      </Text>
                                    </div>
                                  </div>
                                  <div>
                                    {index == 0 && (
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                          <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              16,000
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_signal.svg"
                                              alt="signal"
                                            />
                                            <Text
                                              className="text-[11px] text-green-A700 w-auto"
                                              size="txtPoppinsRegular11"
                                            >
                                              High
                                            </Text>
                                          </div>
                                          <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              Competition
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_trash.svg"
                                              alt="trash"
                                            />
                                            <Text
                                              className="text-[11px] text-amber-A700 w-auto"
                                              size="txtPoppinsRegular11AmberA700"
                                            >
                                              Medium
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {index == 1 && (
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                          <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              10,000
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_trash.svg"
                                              alt="trash_One"
                                            />
                                            <Text
                                              className="text-[11px] text-amber-A700 w-auto"
                                              size="txtPoppinsRegular11AmberA700"
                                            >
                                              Medium
                                            </Text>
                                          </div>
                                          <div className="bg-deep_orange-50 border border-deep_orange-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              Competition
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_skill.svg"
                                              alt="skill"
                                            />
                                            <Text
                                              className="text-[11px] text-deep_orange-A700 w-auto"
                                              size="txtPoppinsRegular11DeeporangeA700"
                                            >
                                              High
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {index == 2 && (
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                          <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              16,000
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_signal.svg"
                                              alt="signal_One"
                                            />
                                            <Text
                                              className="text-[11px] text-green-A700 w-auto"
                                              size="txtPoppinsRegular11"
                                            >
                                              High
                                            </Text>
                                          </div>
                                          <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              Competition
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_trash.svg"
                                              alt="trash_Two"
                                            />
                                            <Text
                                              className="text-[11px] text-amber-A700 w-auto"
                                              size="txtPoppinsRegular11AmberA700"
                                            >
                                              Medium
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Text
                            className="ml-2 md:ml-[0] text-[15px] text-black-900"
                            size="txtDMSansBold15"
                          >
                            December Blogs
                          </Text>
                        </div>
                      </div> */}
                    </List>
                    {/* <div
                      className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                      orientation="horizontal"
                    >
                      sdfsdfsdf
                    </div> */}
                    {/* <div className="flex flex-col items-center justify-center min-h-screen bg-blue-800">
                      <div className="text-center text-white mb-6">
                        <h1 className="text-2xl font-bold mb-2">
                          Let AI Do Your SEO, While
                        </h1>
                        <h2 className="text-xl">You Grow Your Business!</h2>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center justify-center bg-white rounded-full p-6">
                          <i className="text-2xl fas fa-pen"></i>
                          <p className="mt-2">Writes</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white rounded-full p-6">
                          <i className="text-2xl fas fa-link"></i>
                          <p className="mt-2">Links</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white rounded-full p-6">
                          <i className="text-2xl fas fa-robot"></i>
                          <p className="mt-2">Scouts</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white rounded-full p-6">
                          <i className="text-2xl fas fa-cogs"></i>
                          <p className="mt-2">Tweaks</p>
                        </div>
                      </div>
                      <button className="mt-8 px-10 py-3 bg-white text-blue-800 rounded-full focus:outline-none">
                        Automate My SEO
                      </button>
                    </div> */}
                    {/* <div
                      className="flex p-4  shadow-md  w-full align-items-center"
                      style={{ background: "#131353", borderRadius: "20px" }}
                    >
                 
                      <div className="flex-shrink-0">
                        <img
                          src="/images/4_steps.png"
                          alt="SEO"
                          className="w-300 h-300 object-cover rounded-md"
                        />
                      </div>

         
                      <div
                        className="ml-4 flex flex-col justify-center w-100"
                        style={{ color: "white" }}
                      >
                        <p className="text-lg font-bold mb-2">
                          Let AI Do Your SEO,
                        </p>
                        <p className="text-lg font-semibold mb-2">
                          While You Grow Your Business!
                        </p>
                        <button
                          className="px-4 py-2 font-bold blue_gray_900_03 rounded-md "
                          style={{ background: "white", color: "black" }}
                        >
                          Connect to{" "}
                          {businessMetaData.name.charAt(0).toUpperCase() +
                            businessMetaData.name.slice(1)}
                        </button>
                      </div>
                    </div> */}
                    <div className="flex flex-col items-center justify-start pt-[0] w-[300px] pb-[50px]">
                      {/* <Button
                        onClick={() => {
                          handleClickNext();
                        }}
                        className="cursor-pointer font-semibold rounded-[14px] shadow-bs5 text-center text-lg w-[300px]"
                        size="lg"
                        variant="fill"
                        // variant="gradient"
                        // color="purple_800_indigo_800"
                        color="indigo_900"
                        // style={{ background: "#060640" }}
                      >
                        Load More Months
                      </Button> */}
                      <Button
                        className="bg-gradient  cursor-pointer font-bold font-dmsans leading-[normal] min-w-[175px] mt-[27px] py-[13px] rounded-lg text-[17px] text-center text-white-A700 tracking-[-0.23px]"
                        onClick={() => {
                          handleClickNext();
                        }}
                      >
                        Load More Months
                      </Button>
                    </div>
                    {/* <div
                      className="flex p-4 shadow-md w-full h-600 flex md:flex-col flex-row md:gap-10 items-center justify-between p-0.5 rounded-[20px] w-full"
                      style={{
                        borderRadius: "20px",
                        background:
                          "linear-gradient(45deg ,#2d2d7a,#121252,#0e0e4c)",
                      }}
                    >
                      <div className="flex p-4 shadow-md w-full items-center justify-around h-600">
                        <div className="flex-shrink-0">
                          <img
                            src="/images/4_steps.png"
                            alt="SEO"
                            className="w-300 h-300 object-cover rounded-md"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[49%] md:w-full">
                          <div>
                            <Text
                              className="leading-[50.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-2.00px]"
                              size="txtHelveticaBold32"
                            >
                              <>
                                Let AI Do Your SEO, While
                                <br />
                                You Grow Your Business!
                              </>
                            </Text>
                            <div className="flex flex-col font-inter items-start justify-start w-[300px] mt-[40px]">
                              <Button
                                className="bg-white-A700 cursor-pointer font-semibold py-5 rounded-[14px] shadow-bs2 text-black-900 text-center text-lg w-[300px]"
                                onClick={() => {
                                  handleClickNext();
                                }}
                              >
                                Connect to{" "}
                                {(dataContext.businessMetaData?.name
                                  ?.charAt(0)
                                  ?.toUpperCase() ?? "") +
                                  (dataContext.businessMetaData?.name?.slice(
                                    1
                                  ) ?? "")}{" "}
                                <InsertLinkIcon sx={{ marginBottom: "1px" }} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div
                      className="flex p-4 shadow-md w-full h-600 md:flex-col items-center justify-between rounded-[20px]"
                      style={{
                        borderRadius: "20px",
                        background:
                          "linear-gradient(45deg ,#2d2d7a,#121252,#0e0e4c)",
                      }}
                    >
                      <div className="flex p-4 shadow-md w-full items-center justify-around h-600 md:flex-col md:items-center md:justify-center">
                        <div className="flex-shrink-0 md:w-full md:flex md:justify-center">
                          <img
                            src="/images/4_steps.png"
                            alt="SEO"
                            className="w-300 h-300 object-cover rounded-md md:w-full md:h-auto"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[49%] md:w-full">
                          <div>
                            <Text
                              className="leading-[50.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-2.00px]"
                              size="txtHelveticaBold32"
                            >
                              <>
                                Let AI Do Your SEO, While
                                <br />
                                You Grow Your Business!
                              </>
                            </Text>
                            <div className="flex flex-col font-inter items-start justify-start w-[300px] mt-[40px] md:items-center">
                              <Button
                                className="bg-white-A700 cursor-pointer font-semibold py-5 rounded-[14px] shadow-bs2 text-black-900 text-center text-lg w-[300px]"
                                onClick={() => {
                                  handleClickNext();
                                }}
                                style={{ fontSize: "16px" }}
                              >
                                Connect to{" "}
                                {(dataContext.businessMetaData?.name
                                  ?.charAt(0)
                                  ?.toUpperCase() ?? "") +
                                  (dataContext.businessMetaData?.name?.slice(
                                    1
                                  ) ?? "")}{" "}
                                <InsertLinkIcon sx={{ marginBottom: "1px" }} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                  </div>

                  {/* <div className="absolute md:h-[198px] h-[234px] left-[16%] top-[35%] w-[36%] sm:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[79px] md:px-10 sm:px-5 w-[92%]"
                      style={{
                        backgroundImage: "url('images/img_group2.svg')",
                      }}
                    >
                      <Img
                        className="h-10 w-10"
                        src="images/img_music.svg"
                        alt="music"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-5 left-[0]"
                      src="images/img_fragmentsarrow.svg"
                      alt="fragmentsarrow"
                    />
                    <div className="absolute flex flex-col h-10 items-center justify-start right-[0] rounded-[50%] top-[0] w-10">
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div> */}
                </div>
                {/* <div className="absolute md:h-[198px] h-[234px] right-[16%] rotate-[180deg] top-[35%] w-[36%] sm:w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[79px] md:px-10 sm:px-5 w-[92%]"
                    style={{ backgroundImage: "url('images/img_group3.svg')" }}
                  >
                    <Img
                      className="h-10 w-10"
                      src="images/img_music_purple_a400_01.svg"
                      alt="music_One"
                    />
                  </div>
                  <Img
                    className="absolute h-5 right-[0] top-[0]"
                    src="images/img_sort.svg"
                    alt="sort"
                  />
                  <div className="absolute bottom-[0] flex flex-col h-10 items-center justify-start left-[0] rounded-[50%] w-10">
                    <Img
                      className="h-10 rounded-[50%] w-10"
                      src="images/img_location_white_a700.svg"
                      alt="location_One"
                    />
                  </div>
                </div> */}
              </div>

              {/* <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                  <Img
                    className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                    src="images/img_rectangle38_5.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                        shape="round"
                        color="indigo_A200_0c"
                      >
                        Technology
                      </Button>
                      <Text
                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                        size="txtWorkSansSemiBold24"
                      >
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-9 md:h-auto rounded-[50%] w-9"
                          src="images/img_image.png"
                          alt="image_One"
                        />
                        <Text
                          className="text-base text-gray-500_03 w-auto"
                          size="txtWorkSansRomanMedium16"
                        >
                          Jason Francisco
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-500_03 w-auto"
                        size="txtWorkSansRomanRegular16"
                      >
                        August 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                  <Img
                    className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                    src="images/img_rectangle38_6.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                        shape="round"
                        color="indigo_A200_0c"
                      >
                        Technology
                      </Button>
                      <Text
                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                        size="txtWorkSansSemiBold24"
                      >
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-9 md:h-auto rounded-[50%] w-9"
                          src="images/img_image_36x36.png"
                          alt="image_One"
                        />
                        <Text
                          className="text-base text-gray-500_03 w-auto"
                          size="txtWorkSansRomanMedium16"
                        >
                          Elizabeth Slavin
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-500_03 w-auto"
                        size="txtWorkSansRomanRegular16"
                      >
                        August 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                  <Img
                    className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                    src="images/img_rectangle38_7.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                        shape="round"
                        color="indigo_A200_0c"
                      >
                        Technology
                      </Button>
                      <Text
                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                        size="txtWorkSansSemiBold24"
                      >
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-9 md:h-auto rounded-[50%] w-9"
                          src="images/img_image_1.png"
                          alt="image_One"
                        />
                        <Text
                          className="text-base text-gray-500_03 w-auto"
                          size="txtWorkSansRomanMedium16"
                        >
                          Ernie Smith
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-500_03 w-auto"
                        size="txtWorkSansRomanRegular16"
                      >
                        August 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </List> */}
            </div>

            <div
              // style={{ backdropFilter: "blur(5px)" }}
              // Blur bg-white-A700_6d
              className="absolute  bottom-[0] flex flex-col font-inter h-[918px] md:h-auto inset-x-[0] items-center justify-start max-w-[1233px] mx-auto sm:px-5 px-6 py-8 rounded-[30px] w-full"
            >
              {/* <div className="flex flex-col items-start justify-start pt-[0.07px] w-[300px]">
                <Button
                  onClick={() => {
                    handleClickNext();
                  }}
                  className="cursor-pointer font-semibold rounded-[14px] shadow-bs5 text-center text-lg w-[300px]"
                  size="lg"
                  variant="fill"
                  // variant="gradient"
                  // color="purple_800_indigo_800"
                  color="indigo_900"
                  // style={{ background: "#060640" }}
                >
                  Automate Your SEO
                </Button>
              </div> */}
              {/* <div className="w-full flex justify-end items-center">
                <Text
                  className="ml-2 md:ml-0 text-[15px] text-black-900"
                  size="txtDMSansBold15"
                >
                  2023 December
                </Text>
              </div> */}
              <div>
                <Text
                  className="text-center mt-[10px] md:ml-[0] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtHelveticaBold42"
                >
                  What Busy Founders & Marketers Say...
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[0px] w-full">
                {/* <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[41px] md:mt-0 mt-[76px] p-[17px] rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                  <div className="flex flex-col justify-start mb-[3px] mt-3 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[62%] md:w-full">
                      <Img
                        className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                        src="images/img_ellipse6.png"
                        alt="ellipseSix"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-black-900 text-center text-lg"
                          size="txtHelveticaBold18"
                        >
                          Leo
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs"
                          size="txtHelvetica12"
                        >
                          Lead Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[27px] w-[66%] md:w-full">
                      <Img
                        className="h-5"
                        src="images/img_formkitpeople.svg"
                        alt="formkitpeople"
                      />
                      <div className="h-5 md:h-[13px] py-[3px] relative w-5">
                        <Img
                          className="h-[13px] m-auto"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                        <Img
                          className="absolute h-[7px] inset-[0] justify-center m-auto w-[7px]"
                          src="images/img_contrast_black_900.svg"
                          alt="contrast_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[85px] items-center justify-start ml-5 md:ml-[0] mt-[9px] w-[79%] md:w-full">
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Subscriber
                      </Text>
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Views
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[81px] items-center justify-end ml-8 md:ml-[0] mt-1.5 w-[82%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        340k+
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        17.7 M+
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-[22px] text-black-900 text-center text-xs w-[99%] sm:w-full"
                      size="txtHelvetica12"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu.
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[37%] md:w-full">
                  <div className="bg-gradient4  flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[12px] shadow-bs4 w-full">
                    <div className="flex flex-col justify-start mb-[22px] mt-4 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                        <Img
                          className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_ellipse5.png"
                          alt="ellipseFive"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                            size="txtHelveticaBold24"
                          >
                            Leo
                          </Text>
                          <Text
                            className="text-center text-lg text-white-A700"
                            size="txtHelvetica18"
                          >
                            Lead Designer
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                        <Img
                          className="h-10"
                          src="images/img_formkitpeople_white_a700.svg"
                          alt="formkitpeople_One"
                        />
                        <div className="h-10 w-10"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[31px] mt-1.5 w-[74%] md:w-full">
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtHelveticaLight18"
                        >
                          Subscriber
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtHelveticaLight18"
                        >
                          Views
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[15px] w-[77%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          340k+
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          17.7 M+
                        </Text>
                      </div>
                      <Text
                        className="mt-[18px] text-center text-lg text-white-A700 w-full"
                        size="txtHelvetica18"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                        Suspendisse sed magna eget nibh in turpis. Consequat
                        duis diam lacus arcu.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-9 md:mt-0 mt-[81px] p-[17px] rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                  <div className="flex flex-col justify-start mb-[3px] mt-3 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[62%] md:w-full">
                      <Img
                        className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                        src="images/img_ellipse6.png"
                        alt="ellipseSix_One"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-black-900 text-center text-lg"
                          size="txtHelveticaBold18"
                        >
                          Leo
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs"
                          size="txtHelvetica12"
                        >
                          Lead Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[27px] w-[66%] md:w-full">
                      <Img
                        className="h-5"
                        src="images/img_formkitpeople.svg"
                        alt="formkitpeople_Two"
                      />
                      <div className="h-5 md:h-[13px] py-[3px] relative w-5">
                        <Img
                          className="h-[13px] m-auto"
                          src="images/img_contrast.svg"
                          alt="contrast_Two"
                        />
                        <Img
                          className="absolute h-[7px] inset-[0] justify-center m-auto w-[7px]"
                          src="images/img_contrast_black_900.svg"
                          alt="contrast_Three"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[85px] items-center justify-start ml-5 md:ml-[0] mt-[9px] w-[79%] md:w-full">
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Subscriber
                      </Text>
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Views
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[81px] items-center justify-end ml-8 md:ml-[0] mt-1.5 w-[82%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        340k+
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        17.7 M+
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-[22px] text-black-900 text-center text-xs w-[99%] sm:w-full"
                      size="txtHelvetica12"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu.
                    </Text>
                  </div>
                </div> */}
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[116px] w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[41px] md:mt-0 mt-[76px] p-[17px] rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                    <div className="flex flex-col justify-start mb-[3px] mt-3 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[62%] md:w-full">
                        <Img
                          className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                          src="images/img_ellipse6.png"
                          alt="ellipseSix"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start">
                          <Text
                            className="text-black-900 text-center text-lg"
                            size="txtHelveticaBold18"
                          >
                            Leo
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xs"
                            size="txtHelvetica12"
                          >
                            Lead Designer
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[27px] w-[66%] md:w-full">
                        <Img
                          className="h-5"
                          src="images/img_formkitpeople.svg"
                          alt="formkitpeople"
                        />
                        <div className="h-5 md:h-[13px] py-[3px] relative w-5">
                          <Img
                            className="h-[13px] m-auto"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                          <Img
                            className="absolute h-[7px] inset-[0] justify-center m-auto w-[7px]"
                            src="images/img_contrast_black_900.svg"
                            alt="contrast_One"
                          />
                        </div>
                      </div>
                      {/* <div className="flex flex-row gap-[85px] items-center justify-start ml-5 md:ml-[0] mt-[9px] w-[79%] md:w-full">
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Subscriber
                      </Text>
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Views
                      </Text>
                    </div> */}
                      <div className="flex flex-row gap-[60px] items-center justify-start ml-5 md:ml-[0] mt-[9px] w-[79%] md:w-full">
                        <Text
                          className="text-xs text-black-900 whitespace-nowrap text-cente"
                          display="block"
                          size="txtHelvetica12"
                        >
                          Organic Traffic
                        </Text>
                        <Text
                          className="text-xs text-black-900 whitespace-nowrap text-cente"
                          size="txtHelveticaLight14"
                          display="block"
                        >
                          Blogs Ranking
                        </Text>
                      </div>
                      {/* <div className="flex flex-row gap-[81px] items-center justify-end ml-8 md:ml-[0] mt-1.5 w-[82%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        340k+
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        17.7 M+
                      </Text>
                    </div> */}
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                        <Text
                          className="text-xl md:text-[22px] text-center text-blue_gray-700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          8k+
                        </Text>
                        <div className="h-5 md:h-[13px] py-[3px] relative w-20"></div>
                        <div className="flex-1">
                          <Text
                            className="text-xl md:text-[22px] text-center text-blue_gray-700 sm:text-xl"
                            size="txtHelveticaBold24"
                          >
                            7+
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-[22px] text-black-900 text-center text-xs w-[99%] sm:w-full"
                        size="txtHelvetica12"
                      >
                        From the moment I integrated the AI SEO tool, I've seen
                        nothing but hassle free targeted growth. It's like
                        having a dedicated SEO expert working 24/7, while I
                        focus on what I do best.
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[37%] md:w-full">
                    {/* <div className="bg-gradient4  flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[12px] shadow-bs4 w-full"> */}
                    <div
                      className="flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[12px] shadow-bs4 w-full"
                      style={{ background: "#060640" }}
                    >
                      <div className="flex flex-col justify-start mb-[22px] mt-4 w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                          <Img
                            className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                            src="images/daniyal.png"
                            alt="ellipseFive"
                          />
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtHelveticaBold24"
                            >
                              Daniyal
                            </Text>
                            <Text
                              className="text-lg text-white-A700 whitespace-nowrap overflow-hidden"
                              display="block"
                              width="300px"
                              size="txtHelvetica18"
                              style={{
                                textOverflow: "ellipsis",
                                maxWidth: "300px",
                              }}
                            >
                              Founder @Betimeful
                            </Text>
                          </div>
                        </div>
                        {/* <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                        <Img
                          className="h-10"
                          src="images/img_formkitpeople_white_a700.svg"
                          alt="formkitpeople_One"
                        />
                        <div className="h-5 md:h-[13px] py-[3px] relative w-5"></div>
                        <Img
                          className="h-10 w-10"
                          src="images/carbon_view.png"
                          alt="formkitpeople_One"
                          sx={{ marginLeft: "auto", marginRight: "auto" }}
                        />
                        
                      </div> */}
                        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                          <Img
                            className="h-10 flex-1"
                            src="images/img_formkitpeople_white_a700.svg"
                            alt="formkitpeople_One"
                          />
                          <div className="h-5 md:h-[13px] py-[3px] relative w-20"></div>
                          <div className="flex-1">
                            <Img
                              className="h-10 w-10 "
                              src="images/carbon_view.png"
                              alt="formkitpeople_One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[31px] mt-1.5 w-[74%] md:w-full">
                          <Text
                            className="text-center text-lg text-white-A700"
                            size="txtHelveticaLight18"
                          >
                            Organic Traffic
                          </Text>
                          <Text
                            className="text-center text-lg text-white-A700"
                            size="txtHelveticaLight18"
                          >
                            Blogs Ranking
                          </Text>
                        </div>
                        {/* <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[15px] w-[77%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          12k+
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          12+
                        </Text>
                      </div> */}
                        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                            size="txtHelveticaBold24"
                          >
                            12k+
                          </Text>
                          <div className="h-5 md:h-[13px] py-[3px] relative w-20"></div>
                          <div className="flex-1">
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtHelveticaBold24"
                            >
                              12+
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="mt-[18px] text-center text-lg text-white-A700 w-full"
                          size="txtHelvetica18"
                        >
                          This is every entrepreneur's dream.
                          <span
                            style={{ display: "block", height: "20px" }}
                          ></span>
                          It gives you time back + targeted organic traffic so
                          you drive your business forward.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-9 md:mt-0 mt-[81px] p-[17px] rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                    <div className="flex flex-col justify-start mb-[3px] mt-3 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[62%] md:w-full">
                        <Img
                          className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                          src="images/Ellipse 40.png"
                          alt="ellipseSix_One"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start">
                          <Text
                            className="text-black-900 text-center text-lg"
                            size="txtHelveticaBold18"
                          >
                            Sarah
                          </Text>
                          {/* <Text
                          className="text-black-900 text-center text-xs"
                          size="txtHelvetica12"
                        >
                          Marketer @FMF
                        </Text> */}
                          <Text
                            className="text-xs text-black-900 whitespace-nowrap overflow-hidden"
                            display="block"
                            size="txtHelvetica12"
                            style={{
                              textOverflow: "ellipsis",
                            }}
                          >
                            Founder @FMF
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[27px] w-[66%] md:w-full">
                        <Img
                          className="h-5"
                          src="images/img_formkitpeople.svg"
                          alt="formkitpeople_Two"
                        />
                        <div className="h-5 md:h-[13px] py-[3px] relative w-5">
                          <Img
                            className="h-[13px] m-auto"
                            src="images/img_contrast.svg"
                            alt="contrast_Two"
                          />
                          <Img
                            className="absolute h-[7px] inset-[0] justify-center m-auto w-[7px]"
                            src="images/img_contrast_black_900.svg"
                            alt="contrast_Three"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[60px] items-center justify-start ml-5 md:ml-[0] mt-[9px] w-[79%] md:w-full">
                        <Text
                          className="text-xs text-black-900 whitespace-nowrap text-cente"
                          display="block"
                          size="txtHelvetica12"
                        >
                          Organic Traffic
                        </Text>
                        <Text
                          className="text-xs text-black-900 whitespace-nowrap text-cente"
                          size="txtHelveticaLight14"
                          display="block"
                        >
                          Blogs Ranking
                        </Text>
                      </div>
                      {/* <div className="flex flex-row gap-[81px] items-center justify-end ml-8 md:ml-[0] mt-1.5 w-[82%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        10k+
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                       9+
                      </Text>
                    </div> */}
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                        <Text
                          className="text-xl md:text-[22px] text-center text-blue_gray-700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          10k+
                        </Text>
                        <div className="h-5 md:h-[13px] py-[3px] relative w-20"></div>
                        <div className="flex-1">
                          <Text
                            className="text-xl md:text-[22px] text-center text-blue_gray-700 sm:text-xl"
                            size="txtHelveticaBold24"
                          >
                            9+
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-[22px] text-black-900 text-center text-xs w-[99%] sm:w-full"
                        size="txtHelvetica12"
                      >
                        This is a competition killer. I only focus on product &
                        customers now while autoSEO takes care of the targeted
                        organic traffic.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardv4;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Button, Img, List, Text } from "components";
import LandingPageStackvector from "components/LandingPageStackvector";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

// Import ContextAPI
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
const Dashboardv5 = () => {
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
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <header className="bg-white-A700 flex md:gap-10 items-center justify-between px-10 md:px-5 py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs2 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="flex h-[50px] items-center justify-center "
              shape="circle"
              color="white_A700"
              variant="fill"
            >
              {/* <Img src="images/img_logo.png" alt="logo" /> */}
              {dataContext.businessMetaData.faviconUrl &&
              dataContext.businessMetaData.faviconUrl.length > 0 ? (
                <Img
                  className="h-14 md:h-auto sm:mt-0 object-cover"
                  src={dataContext.businessMetaData.faviconUrl}
                  alt="imageSixtySeven"
                />
              ) : null}
            </Button>
            {/* <Text
              className="bg-clip-text bg-gradient  text-base text-center text-transparent w-auto"
              size="txtPoppinsSemiBold16"
            >
              Website Name
            </Text> */}
          </div>
          <div className="flex flex-col items-center justify-start w-auto ">
            <div className="  border border-solid border-white-A700_14 flex md:flex-1 flex-col items-end justify-start p-[5px] rounded-[24px] md:w-full">
              {/* <Button
              className="cursor-pointer flex items-center justify-center min-w-[193px] rounded-[20px]"
              rightIcon={
                <Img
                  className="h-4 ml-1.5 my-px"
                  src="images/img_icfluentlink24filled_1.svg"
                  alt="ic_fluent_link_24_filled 1"
                />
              }
              size="md"
              color="purple_800_indigo_800"
            >
              <div className="font-semibold text-center text-xs">
                Connect to BeTimeful
              </div>
            </Button> */}
              <Button
                // onClick={() => {
                //   handleClickNext();
                // }}
                onClick={() => {
                  handleClickTryFree();
                }}
                variant="fill"
                className="bg-gradient  cursor-pointer font-semibold min-w-[112px] rounded-[19px] text-[13px] text-center tracking-[0.20px] px-[20px]"
                // color="indigo_900"
                // color="white"
                size="md"
                style={{ color: "white" }}
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
        </header>
        <div className="flex flex-col font-lato h-[2019px] md:h-auto items-start justify-start w-auto md:w-full mt-[20px]">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-8 w-full">
            <div className="flex flex-col gap-5 items-start justify-start max-w-[1160px] mx-auto w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtLatoSemiBold18"
                  style={{ fontWeight: "700", fontFamily: "lato" }}
                >
                  <>
                    About{" "}
                    {dataContext.businessMetaData.name.charAt(0).toUpperCase() +
                      dataContext.businessMetaData.name.slice(1)}
                  </>
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-200_01  border-solid flex sm:flex-col flex-row gap-2 items-center justify-between sm:px-5 px-6 py-4 rounded-[12px] w-full">
                <Text
                  className="text-blue_gray-500_bf text-sm w-auto"
                  size="txtLatoRegular14Bluegray500bf"
                  style={{ fontFamily: "lato" }}
                >
                  {dataContext.businessMetaData.summary}
                </Text>
                {/* <Button
                  className="!text-purple-800 bg-transparent cursor-pointer font-bold min-w-[78px] rounded-lg text-center text-sm"
                  size="md"
                  variant="outline"
                  color="purple_800_indigo_800"
                >
                  Update
                </Button> */}
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-10 items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-8 w-full">
            <div className="flex flex-col items-start justify-center max-w-[1160px] mx-auto w-full">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtLatoSemiBold18"
                style={{ fontWeight: "700", fontFamily: "lato" }}
              >
                Your SEO-Optimized Blogs Ready to Roll Out.... ⏳
              </Text>
            </div>
            <List
              // className="sm:flex-col flex-row font-inter md:gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3  max-w-[1166px] mx-auto w-full"
              className="sm:flex-col flex-row font-inter md:gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-around max-w-[1166px] mx-auto w-full"
              orientation="horizontal"
            >
              {dataContext.blogs.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleClickBlog(index);
                  }}
                >
                  <div className="pb-3 px-3 mx-auto relative w-[298px] ">
                    <div className="h-[400px] m-auto w-[98%]">
                      <div className="bg-white-A700 border border-gray-200_01 border-solid h-full m-auto rounded-[14px] w-full h-[420px]"></div>
                      <div className="absolute inset-x-[0] mx-auto top-[0] w-full">
                        <Img
                          className="h-48 m-auto object-cover rounded-tl-[14px] rounded-tr-[14px] w-[269px]"
                          src={
                            item.imagesUrl[0].imageUrl
                              ? item.imagesUrl[0].imageUrl
                              : ""
                          }
                          alt="rectangleThirtyEight"
                        />
                        {/* <div className="absolute bg-white-A700 flex flex-col h-16 items-center justify-start pt-1 px-1 right-[3%] rounded-md top-[5%] w-16">
                      <div className="flex flex-col font-dmsans gap-[4.41px] h-[37px] md:h-auto items-center justify-start w-auto">
                        <Img
                          className="h-[23px] md:h-auto object-cover w-[47px] sm:w-full"
                          src="images/img_graph_gray_200.png"
                          alt="graph"
                        />
                        <div className="flex flex-col items-center justify-between w-[52px]">
                          <Text
                            className="text-[7.35px] text-center text-green-A700"
                            size="txtDMSansBold735"
                          >
                            95
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[6.62px] text-center text-gray-900"
                        size="txtWorkSansRomanRegular662"
                      >
                        <span className="text-gray-900 font-worksans font-normal">
                          <>
                            Overall score
                            <br />
                          </>
                        </span>
                        <span className="text-green-A700 font-worksans font-bold">
                          High
                        </span>
                      </Text>
                    </div> */}
                      </div>
                      <div className="absolute bottom-[3%] flex flex-col gap-4 inset-x-[0] items-start justify-start mx-auto w-[248px]">
                        <div className="flex flex-row font-worksans gap-[11.76px] items-start justify-start w-auto">
                          {/* <Text
                          className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                          size="txtWorkSansRomanMedium14"
                        >
                          Technology
                        </Text>
                        <Text
                          className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                          size="txtWorkSansRomanMedium14"
                        >
                          Environmental Changes
                        </Text> */}
                          {dataContext.blogs[index].seoKeywords.map(
                            (item, index) => (
                              <>
                                <Text
                                  className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                                  size="txtWorkSansRomanMedium14"
                                  style={{
                                    fontFamily: "lato",
                                  }}
                                >
                                  {`${item.split(" ").slice(0, 3).join(" ")}${
                                    item.split(" ").length > 3 ? "..." : ""
                                  }`}
                                </Text>
                              </>
                            )
                          )}
                        </div>
                        <Text
                          className="leading-[20.00px] max-w-[248px] md:max-w-full text-[14.7px] text-gray-900"
                          size="txtLatoSemiBold147"
                          style={{ fontWeight: "500", fontFamily: "lato" }}
                        >
                          {item.title}
                        </Text>
                        <div className="flex flex-row font-lato gap-[14.53px] items-center justify-start w-auto">
                          <Text
                            className="text-[11.76px] text-gray-500_01 w-auto"
                            size="txtLatoRegular1176"
                          >
                            {new Date(
                              new Date().setDate(
                                new Date().getDate() + (index + 1) * 6
                              )
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </Text>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[86px]"
                            leftIcon={
                              <Img
                                className="h-[px] mr-0.5"
                                src="images/img_link.svg"
                                alt="link"
                              />
                            }
                            style={{ backgroundColor: "lightgray" }}
                            shape="round"
                            color="gray_900_0c_01"
                            variant="fill"
                          >
                            <div className="text-[10.29px] text-left underline">
                              1 Backlinks
                            </div>
                          </Button>
                        </div>
                        {/* <div className="flex flex-col font-lato items-center justify-center w-auto">
                        <div className="flex flex-row gap-[7.35px] items-center justify-start w-auto">
                          <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                            <Img
                              className="h-[13px] w-[13px]"
                              src="images/img_search.svg"
                              alt="search"
                            />
                            <Text
                              className="text-[8.82px] text-gray-900_02 w-auto"
                              size="txtLatoRegular882"
                            >
                              16000
                            </Text>
                            <Img
                              className="h-[13px] w-[13px]"
                              src="images/img_arrowup.svg"
                              alt="arrowup"
                            />
                          </div>
                          <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                            <Img
                              className="h-[13px] w-[13px]"
                              src="images/img_bag.svg"
                              alt="bag"
                            />
                            <Text
                              className="text-[8.82px] text-gray-900_02 w-auto"
                              size="txtLatoRegular882"
                            >
                              Competition
                            </Text>
                            <Img
                              className="h-[7px] w-2"
                              src="images/img_trash.svg"
                              alt="trash"
                            />
                            <Text
                              className="text-[8.09px] text-amber-A700 w-auto"
                              size="txtLatoRegular809"
                            >
                              Medium
                            </Text>
                          </div>
                        </div>
                      </div> */}
                        <div>
                          {index == 0 && (
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                <div
                                  className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto"
                                  style={{
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                  }}
                                >
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
                                <div
                                  className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto"
                                  style={{
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                  }}
                                >
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
                                <div
                                  className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto"
                                  style={{
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                  }}
                                >
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
                                <div
                                  className="bg-deep_orange-50 border border-deep_orange-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto"
                                  style={{
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                  }}
                                >
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
                                <div
                                  className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto"
                                  style={{
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                  }}
                                >
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
                                <div
                                  className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto"
                                  style={{
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                  }}
                                >
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
                    {/* <div className="absolute h-7 md:h-[23px] left-[3%] top-[0] w-[29%]">
                  <Img
                    className="absolute bottom-[0] h-[11px] left-[0]"
                    src="images/img_arrowleft_red_300.svg"
                    alt="arrowleft"
                  />
                  <Button
                    className="absolute cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[80px] mx-auto rounded-sm text-[12.46px] text-center top-[0]"
                    color="orange_400"
                    variant="fill"
                  >
                    Scheduled
                  </Button>
                </div> */}
                  </div>
                </div>
              ))}
              {
                ((maxSkeletons) => {
                  const skeletonsToShow = Math.max(
                    maxSkeletons - dataContext.blogs.length,
                    0
                  );
                  return Array.from({ length: skeletonsToShow }, (_, index) => (
                    <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[300px]">
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
                            variant="rectangular"
                            width="70%"
                            height={10}
                          />
                        </Stack>
                      </div>
                    </div>
                  ));
                })(3) // maxSkeletons is 3
              }
              {/* <div className="pb-3 px-3 relative w-[278px]">
                <div className="h-[369px] m-auto w-[98%]">
                  <div className="bg-white-A700 border border-gray-200_01 border-solid h-[369px] m-auto rounded-[14px] w-full"></div>
                  <div className="absolute inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      className="h-48 m-auto object-cover rounded-tl-[14px] rounded-tr-[14px] w-[269px]"
                      src="images/img_rectangle38_1.png"
                      alt="rectangleThirtyEight"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-16 items-center justify-start pt-1 px-1 right-[3%] rounded-md top-[5%] w-16">
                      <div className="flex flex-col font-dmsans gap-[4.41px] h-[37px] md:h-auto items-center justify-start w-auto">
                        <Img
                          className="h-[23px] md:h-auto object-cover w-[47px] sm:w-full"
                          src="images/img_graph_gray_200.png"
                          alt="graph"
                        />
                        <div className="flex flex-col items-center justify-between w-[52px]">
                          <Text
                            className="text-[7.35px] text-center text-green-A700"
                            size="txtDMSansBold735"
                          >
                            95
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[6.62px] text-center text-gray-900"
                        size="txtWorkSansRomanRegular662"
                      >
                        <span className="text-gray-900 font-worksans font-normal">
                          <>
                            Overall score
                            <br />
                          </>
                        </span>
                        <span className="text-green-A700 font-worksans font-bold">
                          High
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bottom-[3%] flex flex-col gap-4 inset-x-[0] items-start justify-start mx-auto w-[248px]">
                    <div className="flex flex-row font-worksans gap-[11.76px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Technology
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Environmental Changes
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[248px] md:max-w-full text-[14.7px] text-gray-900"
                      size="txtLatoSemiBold147"
                    >
                      Top 3 Coffee Subscriptions Brands in 2023 to Not Miss
                    </Text>
                    <div className="flex flex-row font-lato gap-[14.53px] items-center justify-start w-auto">
                      <Text
                        className="text-[11.76px] text-gray-500_01 w-auto"
                        size="txtLatoRegular1176"
                      >
                        October 10, 2023
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[86px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-0.5"
                            src="images/img_link.svg"
                            alt="link"
                          />
                        }
                        shape="round"
                        color="gray_900_0c_01"
                        variant="fill"
                      >
                        <div className="text-[10.29px] text-left underline">
                          1 Backlinks
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col font-lato items-center justify-center w-auto">
                      <div className="flex flex-row gap-[7.35px] items-center justify-start w-auto">
                        <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_search.svg"
                            alt="search"
                          />
                          <Text
                            className="text-[8.82px] text-gray-900_02 w-auto"
                            size="txtLatoRegular882"
                          >
                            16500
                          </Text>
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                        </div>
                        <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_bag.svg"
                            alt="bag"
                          />
                          <Text
                            className="text-[8.82px] text-gray-900_02 w-auto"
                            size="txtLatoRegular882"
                          >
                            Competition
                          </Text>
                          <Img
                            className="h-[7px] w-2"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                          <Text
                            className="text-[8.09px] text-amber-A700 w-auto"
                            size="txtLatoRegular809"
                          >
                            Medium
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-7 md:h-[23px] left-[3%] top-[0] w-[29%]">
                  <Img
                    className="absolute bottom-[0] h-[11px] left-[0]"
                    src="images/img_arrowleft_red_300.svg"
                    alt="arrowleft"
                  />
                  <Button
                    className="absolute cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[80px] mx-auto rounded-sm text-[12.46px] text-center top-[0]"
                    color="orange_400"
                    variant="fill"
                  >
                    Scheduled
                  </Button>
                </div>
              </div>
              <div className="pb-3 px-3 relative w-[278px]">
                <div className="h-[369px] m-auto w-[98%]">
                  <div className="bg-white-A700 border border-gray-200_01 border-solid h-[369px] m-auto rounded-[14px] w-full"></div>
                  <div className="absolute inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      className="h-48 m-auto object-cover rounded-tl-[14px] rounded-tr-[14px] w-[269px]"
                      src="images/img_rectangle38_2.png"
                      alt="rectangleThirtyEight"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-16 items-center justify-start pt-1 px-1 right-[3%] rounded-md top-[5%] w-16">
                      <div className="flex flex-col font-dmsans gap-[4.41px] h-[37px] md:h-auto items-center justify-start w-auto">
                        <Img
                          className="h-[23px] md:h-auto object-cover w-[47px] sm:w-full"
                          src="images/img_graph_gray_200.png"
                          alt="graph"
                        />
                        <div className="flex flex-col items-center justify-between w-[52px]">
                          <Text
                            className="text-[7.35px] text-center text-green-A700"
                            size="txtDMSansBold735"
                          >
                            95
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[6.62px] text-center text-gray-900"
                        size="txtWorkSansRomanRegular662"
                      >
                        <span className="text-gray-900 font-worksans font-normal">
                          <>
                            Overall score
                            <br />
                          </>
                        </span>
                        <span className="text-green-A700 font-worksans font-bold">
                          High
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bottom-[3%] flex flex-col gap-4 inset-x-[0] items-start justify-start mx-auto w-[248px]">
                    <div className="flex flex-row font-worksans gap-[11.76px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Technology
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Environmental Changes
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[248px] md:max-w-full text-[14.7px] text-gray-900"
                      size="txtLatoSemiBold147"
                    >
                      How to Make Mocha Coffee at Home. Iced or Hot.
                    </Text>
                    <div className="flex flex-row font-lato gap-[14.53px] items-center justify-start w-auto">
                      <Text
                        className="text-[11.76px] text-gray-500_01 w-auto"
                        size="txtLatoRegular1176"
                      >
                        October 10, 2023
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[86px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-0.5"
                            src="images/img_link.svg"
                            alt="link"
                          />
                        }
                        shape="round"
                        color="gray_900_0c_01"
                        variant="fill"
                      >
                        <div className="text-[10.29px] text-left underline">
                          1 Backlinks
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col font-lato items-center justify-center w-auto">
                      <div className="flex flex-row gap-[7.35px] items-center justify-start w-auto">
                        <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_search.svg"
                            alt="search"
                          />
                          <Text
                            className="text-[8.82px] text-gray-900_02 w-auto"
                            size="txtLatoRegular882"
                          >
                            16500
                          </Text>
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                        </div>
                        <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_bag.svg"
                            alt="bag"
                          />
                          <Text
                            className="text-[8.82px] text-gray-900_02 w-auto"
                            size="txtLatoRegular882"
                          >
                            Competition
                          </Text>
                          <Img
                            className="h-[7px] w-2"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                          <Text
                            className="text-[8.09px] text-amber-A700 w-auto"
                            size="txtLatoRegular809"
                          >
                            Medium
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-7 md:h-[23px] left-[3%] top-[0] w-[29%]">
                  <Img
                    className="absolute bottom-[0] h-[11px] left-[0]"
                    src="images/img_arrowleft_red_300.svg"
                    alt="arrowleft"
                  />
                  <Button
                    className="absolute cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[80px] mx-auto rounded-sm text-[12.46px] text-center top-[0]"
                    color="orange_400"
                    variant="fill"
                  >
                    Scheduled
                  </Button>
                </div>
              </div>
              <div className="pb-3 px-3 relative w-[278px]">
                <div className="h-[369px] m-auto w-[98%]">
                  <div className="bg-white-A700 border border-gray-200_01 border-solid h-[369px] m-auto rounded-[14px] w-full"></div>
                  <div className="absolute inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      className="h-48 m-auto object-cover rounded-tl-[14px] rounded-tr-[14px] w-[269px]"
                      src="images/img_rectangle38_3.png"
                      alt="rectangleThirtyEight"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-16 items-center justify-start pt-1 px-1 right-[3%] rounded-md top-[5%] w-16">
                      <div className="flex flex-col font-dmsans gap-[4.41px] h-[37px] md:h-auto items-center justify-start w-auto">
                        <Img
                          className="h-[23px] md:h-auto object-cover w-[47px] sm:w-full"
                          src="images/img_graph_gray_200.png"
                          alt="graph"
                        />
                        <div className="flex flex-col items-center justify-between w-[52px]">
                          <Text
                            className="text-[7.35px] text-center text-green-A700"
                            size="txtDMSansBold735"
                          >
                            95
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[6.62px] text-center text-gray-900"
                        size="txtWorkSansRomanRegular662"
                      >
                        <span className="text-gray-900 font-worksans font-normal">
                          <>
                            Overall score
                            <br />
                          </>
                        </span>
                        <span className="text-green-A700 font-worksans font-bold">
                          High
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bottom-[3%] flex flex-col gap-4 inset-x-[0] items-start justify-start mx-auto w-[248px]">
                    <div className="flex flex-row font-worksans gap-[11.76px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Technology
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-[7px] rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Environmental Changes
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[248px] md:max-w-full text-[14.7px] text-gray-900"
                      size="txtLatoSemiBold147"
                    >
                      How to Make different types donuts at home
                    </Text>
                    <div className="flex flex-row font-lato gap-[14.53px] items-center justify-start w-auto">
                      <Text
                        className="text-[11.76px] text-gray-500_01 w-auto"
                        size="txtLatoRegular1176"
                      >
                        October 10, 2023
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[86px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-0.5"
                            src="images/img_link.svg"
                            alt="link"
                          />
                        }
                        shape="round"
                        color="gray_900_0c_01"
                        variant="fill"
                      >
                        <div className="text-[10.29px] text-left underline">
                          1 Backlinks
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col font-lato items-center justify-center w-auto">
                      <div className="flex flex-row gap-[7.35px] items-center justify-start w-auto">
                        <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_search.svg"
                            alt="search"
                          />
                          <Text
                            className="text-[8.82px] text-gray-900_02 w-auto"
                            size="txtLatoRegular882"
                          >
                            16500
                          </Text>
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                        </div>
                        <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-[2.72px] items-center justify-start px-[5.44px] py-[2.72px] rounded-sm w-auto">
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_bag.svg"
                            alt="bag"
                          />
                          <Text
                            className="text-[8.82px] text-gray-900_02 w-auto"
                            size="txtLatoRegular882"
                          >
                            Competition
                          </Text>
                          <Img
                            className="h-[7px] w-2"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                          <Text
                            className="text-[8.09px] text-amber-A700 w-auto"
                            size="txtLatoRegular809"
                          >
                            Medium
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-7 md:h-[23px] left-[3%] top-[0] w-[29%]">
                  <Img
                    className="absolute bottom-[0] h-[11px] left-[0]"
                    src="images/img_arrowleft_red_300.svg"
                    alt="arrowleft"
                  />
                  <Button
                    className="absolute cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[80px] mx-auto rounded-sm text-[12.46px] text-center top-[0]"
                    color="orange_400"
                    variant="fill"
                  >
                    Scheduled
                  </Button>
                </div>
              </div> */}
            </List>
            <div className="flex flex-col font-poppins items-center justify-start w-auto">
              {/* <Button
                className="cursor-pointer font-semibold min-w-[103px] rounded-[20px] text-center text-xs"
                size="md"
                color="purple_800_indigo_800"
              >
                Load More
              </Button> */}
              <Button
                className="bg-gradient  cursor-pointer font-bold font-dmsans leading-[normal] min-w-[175px] mt-[27px] py-[13px] rounded-lg text-[17px] text-center text-white-A700 tracking-[-0.23px]"
                onClick={() => {
                  handleClickNext();
                }}
                style={{
                  borderRadius: "25px",
                  fontWeight: "700",
                  fontFamily: "lato",
                }}
              >
                Load More
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[60px] h-[1000px] md:h-auto items-start justify-center max-w-[1440px] pb-11 pt-8 md:px-10 sm:px-5 px-[140px] w-full">
            <div className="flex flex-col gap-10 h-[595px] md:h-auto items-start justify-center max-w-[1160px] mx-auto w-full">
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <div className="flex sm:flex-col flex-row gap-1 items-center justify-start w-full">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtLatoSemiBold18"
                    style={{ fontWeight: "700", fontFamily: "lato" }}
                  >
                    Your Technical SEO Issues Ready to Be Tackled...{" "}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                </div>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtLatoMedium14"
                  style={{ fontFamily: "lato" }}
                >
                  Leave your website worries behind, Once connected to{" "}
                  {(dataContext.businessMetaData?.name
                    ?.charAt(0)
                    ?.toUpperCase() ?? "") +
                    (dataContext.businessMetaData?.name?.slice(1) ?? "")}{" "}
                  , our AI will handle everything and resolve your concerns
                  seamlessly
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-start justify-center w-full">
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col items-start justify-start sm:px-5 px-8 py-6 rounded-[20px] w-auto">
                    <div className="flex flex-col gap-7 items-start justify-start w-auto">
                      <div
                        className="md:h-[200px] h-[221px] relative w-full"
                        style={{ fontFamily: "lato" }}
                      >
                        <Text
                          className="absolute flex-1 right-[4%] text-base text-blue_gray-900 top-[0] w-full"
                          size="txtLatoBold16Bluegray900"
                          style={{ fontWeight: "600" }}
                        >
                          Site Health
                        </Text>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[180px] inset-x-[0] items-center justify-center mx-auto p-[71px] md:px-10 sm:px-5 w-[180px] md:w-[160px] md:h-[160px]"
                          style={{
                            backgroundImage:
                              "url('images/img_frame2609114.svg')",
                          }}
                        >
                          <Text
                            className="my-2 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                            size="txtLatoExtraBold28"
                          >
                            62%
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-sm text-teal-600 w-auto"
                        size="txtLatoMedium14Teal600"
                      >
                        12% up from the last week
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-10 h-full items-start justify-start sm:px-5 px-8 py-6 rounded-[20px] w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900 w-full"
                        size="txtLatoBold16Bluegray900"
                        style={{ fontWeight: "600" }}
                      >
                        Crawled Pages
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center w-auto"
                          size="txtLatoExtraBold28"
                          style={{ fontWeight: "600" }}
                        >
                          1800
                        </Text>
                        <Text
                          className="text-sm text-teal-600 w-auto"
                          size="txtLatoMedium14Teal600"
                        >
                          12% up from the last week
                        </Text>
                      </div>
                      <Img
                        className="h-4 w-full"
                        src="images/img_frame1000003070.svg"
                        alt="frame1000003070"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-end w-auto">
                        <div className="bg-teal-600 h-4 rounded w-4"></div>
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Health (156)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-red-500 h-4 rounded w-4"></div>
                        <Text
                          className="text-blue_gray-900 text-right text-sm w-auto"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Broken (12)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-orange-A200 h-4 rounded w-4"></div>
                        <Text
                          className="text-blue_gray-900 text-right text-sm w-auto"
                          size="txtLatoRegular14Bluegray900"
                        >
                          have issues (218)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-gray-200_03 h-4 rounded w-4"></div>
                        <Text
                          className="text-blue_gray-900 text-right text-sm w-auto"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Redirected (234)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-gray-400 h-4 rounded w-4"></div>
                        <Text
                          className="text-blue_gray-900 text-right text-sm w-auto"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Blocked (23)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtLatoBold16Bluegray900"
                        style={{ fontWeight: "600" }}
                      >
                        Error
                      </Text>
                      <div className="flex flex-row gap-[7.63px] items-end justify-start w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-red-500 w-auto"
                          size="txtLatoExtraBold28Red500"
                        >
                          124
                        </Text>
                        <div className="flex flex-col items-end justify-start py-[5.09px] w-auto">
                          <Text
                            className="text-base text-red-500 w-auto"
                            size="txtLatoMedium16Red500"
                          >
                            +3.67%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-10 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_frame1000002971.png"
                      alt="frame1000002971"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtLatoBold16Bluegray900"
                        style={{ fontWeight: "600" }}
                      >
                        Warning
                      </Text>
                      <div className="flex flex-row gap-[7.63px] items-end justify-start w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-orange-A200 w-auto"
                          size="txtLatoExtraBold28OrangeA200"
                        >
                          345
                        </Text>
                        <div className="flex flex-col items-end justify-start py-[5.09px] w-auto">
                          <Text
                            className="text-base text-teal-600 w-auto"
                            size="txtLatoMedium16Teal600"
                          >
                            -1.87%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-10 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_frame1000002971_orange_a200.png"
                      alt="frame1000002971"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtLatoBold16Bluegray900"
                        style={{ fontWeight: "600" }}
                      >
                        Health
                      </Text>
                      <div className="flex flex-row gap-[7.63px] items-end justify-start w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-teal-600 w-auto"
                          size="txtLatoExtraBold28Teal600"
                        >
                          129
                        </Text>
                        <div className="flex flex-col items-end justify-start py-[5.09px] w-auto">
                          <Text
                            className="text-base text-red-A700 w-auto"
                            size="txtLatoMedium16RedA700"
                          >
                            -12.87%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-10 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_frame1000002971_teal_600.png"
                      alt="frame1000002971"
                    />
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-center max-w-[1160px] mx-auto w-full ">
              <div className="flex flex-col font-lato items-center justify-start w-full">
                <Text
                  className="bg-clip-text bg-gradient  leading-[170.00%] text-base text-center text-transparent "
                  size="txtLatoBold16DeeppurpleA20001"
                  style={{ fontWeight: "700", fontFamily: "lato" }}
                >
                  <>
                    Ready to Rank without Breaking the Bank?
                    <br />
                    Let AI Drive Your SEO, While You Drive{" "}
                    {(dataContext.businessMetaData?.name
                      ?.charAt(0)
                      ?.toUpperCase() ?? "") +
                      (dataContext.businessMetaData?.name?.slice(1) ?? "")}{" "}
                  </>
                </Text>
              </div>
              {/* <Button
                className="cursor-pointer flex items-center justify-center min-w-[209px] rounded-[23px]"
                rightIcon={
                  <Img
                    className="h-[18px] ml-3"
                    src="images/img_icfluentlink24filled_1.svg"
                    alt="ic_fluent_link_24_filled 1"
                  />
                }
                size="lg"
                color="purple_800_indigo_800"
              >
                <div className="font-poppins font-semibold text-center text-xs">
                  Connect to BeTimeful
                </div>
              </Button> */}
              <Button
                // onClick={() => {
                //   handleClickNext();
                // }}
                onClick={() => {
                  handleClickTryFree();
                }}
                variant="fill"
                className="bg-gradient  cursor-pointer font-semibold min-w-[112px] rounded-[19px] text-[13px] text-center tracking-[0.20px] px-[20px]"
                // color="indigo_900"
                // color="white"
                size="md"
                style={{ color: "white" }}
              >
                Connect to{" "}
                {(dataContext.businessMetaData?.name
                  ?.charAt(0)
                  ?.toUpperCase() ?? "") +
                  (dataContext.businessMetaData?.name?.slice(1) ?? "")}{" "}
                <InsertLinkIcon sx={{ marginBottom: "1px" }} />
              </Button>
            </div>
            {/* <LandingPageStackvector className="flex sm:h-[1203px] h-[414px] md:h-[492px] justify-end md:mt-0 my-[78px] relative w-[33%] md:w-full" /> */}

            {/* <div
              className="  flex md:flex-col flex-row md:gap-10 gap-32 items-center justify-end p-0.5 md:px-5 rounded-[20px] w-full py-[20px] px-[20px]"
              style={{ backgroundColor: "#2D2D7A" }}
            >
              <img
                src="/images/4_steps.png"
                alt="SEO"
                className="w-300 h-300 object-cover rounded-md md:w-full md:h-auto"
              />
              <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start w-[49%] md:w-full">
                <Text
                  className="leading-[50.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-2.00px]"
                  size="txtLatoBold32"
                  style={{ fontWeight: "500" }}
                >
                  <>
                    Let AI Drive Your Organic Traffic, <br />
                    While You Drive Your Business!
                  </>
                </Text>
                <div className="flex flex-col font-inter items-start justify-start w-[300px]">
                  <Button
                    onClick={() => {
                      handleClickTryFree();
                    }}
                    className="!text-black-900_01 cursor-pointer font-semibold rounded-[14px] text-center text-lg w-[300px] py-[15px]"
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Automate Your SEO
                  </Button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-row items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1160px] mx-auto w-full">
              <Button
                className="flex h-[46px] items-center justify-center w-[46px]"
                shape="circle"
                color="white_A700"
                variant="fill"
              >
                <Img src="images/img_logo.png" alt="logo_One" />
              </Button>
              <div className="flex flex-row gap-4 h-[46px] md:h-auto items-center justify-center">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="flex flex-col items-start justify-start w-4">
                    <div className="flex flex-col h-4 md:h-auto items-center justify-center w-4">
                      <Img
                        className="h-4 w-4"
                        src="images/img_iconsocialtwittersvg.svg"
                        alt="iconsocialtwitt"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="flex flex-col items-start justify-start w-4">
                    <Img
                      className="h-4 w-4"
                      src="images/img_iconsocialfac.svg"
                      alt="iconsocialfac"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="flex flex-col items-start justify-start w-4">
                    <div className="flex flex-col h-4 md:h-auto items-center justify-center w-4">
                      <Img
                        className="h-4 w-4"
                        src="images/img_iconsocialyoutubesvg.svg"
                        alt="iconsocialyoutu"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="flex flex-col items-start justify-start w-4">
                    <Img
                      className="h-4 w-4"
                      src="images/img_iconsociallinkedinsvg.svg"
                      alt="iconsociallinke"
                    />
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

export default Dashboardv5;

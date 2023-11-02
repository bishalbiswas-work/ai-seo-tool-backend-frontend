import React from "react";

// import { Button, Img, List, Text } from "";
import Button from "./Button";
import Img from "./Img";
import Input from "./Input";
import Line from "./Line";
import List from "./List";
import PagerIndicator from "./PageIndicator";
import Text from "./Text";
import Typewriter from "typewriter-effect";

const DesktopFourPage = () => {
  return (
    <>
      <div className="bg-gray-200_02 flex flex-col font-inter items-center justify-end mx-auto pt-[25px] w-full">
        <div className=" flex flex-col gap-12 items-center justify-end w-full">
          <div className=" flex flex-col items-center justify-start max-w-[1216px] mx-auto md:px-5 w-full">
            <div
              style={{ backdropFilter: "blur(5px)", zIndex: 2 }}
              className="fixed w-[1214px] top-0 pt-4 flex sm:flex-col flex-row md:gap-10 items-end justify-between"
            >
              <Img
                className="h-14 md:h-auto object-cover"
                src="images/img_image67.png"
                alt="imageSixtySeven"
              />
              <Button
                className="cursor-pointer font-semibold mb-[5px] min-w-[112px] sm:mt-0 mt-[13px] rounded-[19px] text-[13px] text-center tracking-[0.20px]"
                color="indigo_900"
                size="md"
                variant="fill"
              >
                Try For Free{" "}
              </Button>
            </div>
            <div className="mt-[100px] flex flex-row font-dmsans md:gap-10 items-center justify-between  w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                About BeTimeful
              </Text>
              <Img
                className="h-[43px] md:h-auto object-cover w-[42px]"
                src="images/img_image68.png"
                alt="imageSixtyEight"
              />
            </div>
            <div className="bg-white-A700 border border-gray-500_01 border-solid flex sm:flex-col flex-row font-dmsans gap-[7px] h-[75px] md:h-auto items-center justify-between max-w-[1208px] mt-[30px] p-6 sm:px-5 rounded-lg w-full">
              <Text
                className="text-blue_gray-500 text-lg w-auto"
                size="txtDMSansRegular18"
              >
                BeTimeful is a social media blocker.
              </Text>
              <div className="flex flex-col font-helvetica h-11 md:h-auto items-center justify-center sm:px-5 px-6 py-3 w-[78px]">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="bg-clip-text bg-[#693283]  text-center text-sm text-transparent w-auto"
                    size="txtHelveticaBold14"
                  >
                    Update
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-dmsans md:gap-10 items-start justify-between mt-[83px] w-[99%] md:w-full">
              <Text
                className="mb-1 text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                BeTimeful’s Blogspace
              </Text>
              <Text
                className="sm:mt-0 mt-1 text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                size="txtDMSansBold22"
              >
                2023 October
              </Text>
            </div>
            <div className="font-worksans h-[2146px] md:h-[3219px] sm:h-[4884px] mt-[30px] relative w-full">
              <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                <div className="h-[1419px] md:h-[2173px] sm:h-[3330px] relative w-full">
                  <div className="h-[1419px] md:h-[2173px] sm:h-[3330px] m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <List
                        className="flex flex-col gap-5 items-center w-full"
                        orientation="vertical"
                        onClick={() =>
                          window.open("http://localhost:3001/details", "_self")
                        }
                      >
                        <div className="flex md:flex-1 flex-col h-[696px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col md:gap-10 gap-[135px] justify-start w-full">
                            <div className="font-worksans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                              <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                                <div className="h-60 relative w-full">
                                  <Img
                                    className="h-60 m-auto object-cover rounded-md w-full"
                                    src="images/img_rectangle38.png"
                                    alt="rectangleThirtyEight"
                                  />
                                  <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
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
                                      className="text-[9px] text-center text-gray-900_01"
                                      size="txtWorkSansRomanRegular9"
                                    >
                                      <span className="text-gray-900_01 font-worksans font-normal">
                                        <>
                                          Overall score
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-900_01 font-worksans font-bold">
                                        High
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                                      <div className="flex flex-row gap-3 items-center justify-start w-[85%] md:w-full">
                                        <Button
                                          className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                          shape="round"
                                          color="indigo_A200_0c"
                                          size="xs"
                                          variant="fill"
                                        >
                                          Technology
                                        </Button>
                                        <Button
                                          className="cursor-pointer font-medium min-w-[182px] rounded-md text-center text-sm"
                                          shape="round"
                                          color="indigo_A200_0c"
                                          size="xs"
                                          variant="fill"
                                        >
                                          Environmental Changes
                                        </Button>
                                      </div>
                                      <Text
                                        className="leading-[28.00px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-full"
                                        size="txtWorkSansSemiBold24"
                                      >
                                        <Typewriter
                                          options={{
                                            strings: [
                                              " The Impact of Technology on the Workplace: How Technology is Changing",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                          }}
                                        />
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-500_02 w-auto"
                                      size="txtWorkSansRomanRegular16"
                                    >
                                      October 10, 2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                      <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                        <Text
                                          className="text-gray-900_02 text-xs w-auto"
                                          size="txtDMSansRegular12"
                                        >
                                          16500
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
                                          className="text-gray-900_02 text-xs w-auto"
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
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                                <div className="h-60 relative w-full">
                                  <Img
                                    className="h-60 m-auto object-cover rounded-md w-full"
                                    src="images/img_rectangle38_240x360.png"
                                    alt="rectangleThirtyEight_One"
                                  />
                                  <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                    <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                      <Img
                                        className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                        src="images/img_graph.png"
                                        alt="graph_One"
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
                                      className="text-[9px] text-center text-gray-900_01"
                                      size="txtWorkSansRomanRegular9"
                                    >
                                      <span className="text-gray-900_01 font-worksans font-normal">
                                        <>
                                          Overall score
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-900_01 font-worksans font-bold">
                                        High
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                                    <Button
                                      className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                      shape="round"
                                      color="indigo_A200_0c"
                                      size="xs"
                                      variant="fill"
                                    >
                                      Technology
                                    </Button>
                                    <Text
                                      className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                      size="txtWorkSansSemiBold24"
                                    >
                                      <Typewriter
                                        options={{
                                          strings: [
                                            " The Impact of Technology on the Workplace: How Technology is Changing",
                                          ],
                                          autoStart: true,
                                          loop: true,
                                        }}
                                      />
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-500_02 w-auto"
                                      size="txtWorkSansRomanRegular16"
                                    >
                                      October, 20, 2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                      <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                        <Text
                                          className="text-gray-900_02 text-xs w-auto"
                                          size="txtDMSansRegular12"
                                        >
                                          10000
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
                                          className="text-gray-900_02 text-xs w-auto"
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
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                                <div className="h-60 relative w-full">
                                  <Img
                                    className="h-60 m-auto object-cover rounded-md w-full"
                                    src="images/img_rectangle38_1.png"
                                    alt="rectangleThirtyEight_Two"
                                  />
                                  <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                    <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                      <Img
                                        className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                        src="images/img_graph.png"
                                        alt="graph_Two"
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
                                      className="text-[9px] text-center text-gray-900_01"
                                      size="txtWorkSansRomanRegular9"
                                    >
                                      <span className="text-gray-900_01 font-worksans font-normal">
                                        <>
                                          Overall score
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-900_01 font-worksans font-bold">
                                        High
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                                    <Button
                                      className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                      shape="round"
                                      color="indigo_A200_0c"
                                      size="xs"
                                      variant="fill"
                                    >
                                      Technology
                                    </Button>
                                    <Text
                                      className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                      size="txtWorkSansSemiBold24"
                                    >
                                      <Typewriter
                                        options={{
                                          strings: [
                                            " The Impact of Technology on the Workplace: How Technology is Changing",
                                          ],
                                          autoStart: true,
                                          loop: true,
                                        }}
                                      />
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-500_02 w-auto"
                                      size="txtWorkSansRomanRegular16"
                                    >
                                      October 30, 2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                      <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                        <Text
                                          className="text-gray-900_02 text-xs w-auto"
                                          size="txtDMSansRegular12"
                                        >
                                          10000
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
                                      <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                        <Text
                                          className="text-gray-900_02 text-xs w-auto"
                                          size="txtDMSansRegular12"
                                        >
                                          Competition
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
                                          Low
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[1039px] text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                              size="txtDMSansBold22"
                            >
                              2023 November
                            </Text>
                          </div>
                        </div>
                        <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[703px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                          <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                            <div className="h-60 relative w-full">
                              <Img
                                className="h-60 m-auto object-cover rounded-md w-full"
                                src="images/img_rectangle38_2.png"
                                alt="rectangleThirtyEight"
                              />
                              <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                  <Img
                                    className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                    src="images/img_graph_gray_200_04.png"
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
                                  className="text-[9px] text-center text-gray-900_01"
                                  size="txtWorkSansRomanRegular9"
                                >
                                  <span className="text-gray-900_01 font-worksans font-normal">
                                    <>
                                      Overall score
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-gray-900_01 font-worksans font-bold">
                                    High
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <Button
                                  className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                  shape="round"
                                  color="indigo_A200_0c"
                                  size="xs"
                                  variant="fill"
                                >
                                  Technology
                                </Button>
                                <Text
                                  className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                  size="txtWorkSansSemiBold24"
                                >
                                  <Typewriter
                                    options={{
                                      strings: [
                                        " The Impact of Technology on the Workplace: How Technology is Changing",
                                      ],
                                      autoStart: true,
                                      loop: true,
                                    }}
                                  />
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Text
                                  className="text-base text-gray-500_02 w-auto"
                                  size="txtWorkSansRomanRegular16"
                                >
                                  November 10, 2022
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                  <Text
                                    className="text-gray-900_02 text-xs w-auto"
                                    size="txtDMSansRegular12"
                                  >
                                    16500
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
                                    className="text-gray-900_02 text-xs w-auto"
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
                          </div>
                          <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                            <div className="h-60 relative w-full">
                              <Img
                                className="h-60 m-auto object-cover rounded-md w-full"
                                src="images/img_rectangle38_3.png"
                                alt="rectangleThirtyEight_One"
                              />
                              <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                  <Img
                                    className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                    src="images/img_graph.png"
                                    alt="graph_One"
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
                                  className="text-[9px] text-center text-gray-900_01"
                                  size="txtWorkSansRomanRegular9"
                                >
                                  <span className="text-gray-900_01 font-worksans font-normal">
                                    <>
                                      Overall score
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-gray-900_01 font-worksans font-bold">
                                    High
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <Button
                                  className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                  shape="round"
                                  color="indigo_A200_0c"
                                  size="xs"
                                  variant="fill"
                                >
                                  Technology
                                </Button>
                                <Text
                                  className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                  size="txtWorkSansSemiBold24"
                                >
                                  <Typewriter
                                    options={{
                                      strings: [
                                        " The Impact of Technology on the Workplace: How Technology is Changing",
                                      ],
                                      autoStart: true,
                                      loop: true,
                                    }}
                                  />
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Text
                                  className="text-base text-gray-500_02 w-auto"
                                  size="txtWorkSansRomanRegular16"
                                >
                                  November 10, 2022
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                  <Text
                                    className="text-gray-900_02 text-xs w-auto"
                                    size="txtDMSansRegular12"
                                  >
                                    16500
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
                                    className="text-gray-900_02 text-xs w-auto"
                                    size="txtDMSansRegular12"
                                  >
                                    Competition
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
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                            <div className="h-60 relative w-full">
                              <Img
                                className="h-60 m-auto object-cover rounded-md w-full"
                                src="images/img_rectangle38_4.png"
                                alt="rectangleThirtyEight_Two"
                              />
                              <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                  <Img
                                    className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                    src="images/img_graph.png"
                                    alt="graph_Two"
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
                                  className="text-[9px] text-center text-gray-900_01"
                                  size="txtWorkSansRomanRegular9"
                                >
                                  <span className="text-gray-900_01 font-worksans font-normal">
                                    <>
                                      Overall score
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-gray-900_01 font-worksans font-bold">
                                    High
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <Button
                                  className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                  shape="round"
                                  color="indigo_A200_0c"
                                  size="xs"
                                  variant="fill"
                                >
                                  Technology
                                </Button>
                                <Text
                                  className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                  size="txtWorkSansSemiBold24"
                                >
                                  <Typewriter
                                    options={{
                                      strings: [
                                        " The Impact of Technology on the Workplace: How Technology is Changing",
                                      ],
                                      autoStart: true,
                                      loop: true,
                                    }}
                                  />
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Text
                                  className="text-base text-gray-500_02 w-auto"
                                  size="txtWorkSansRomanRegular16"
                                >
                                  November 10, 2022
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                  <Text
                                    className="text-gray-900_02 text-xs w-auto"
                                    size="txtDMSansRegular12"
                                  >
                                    16500
                                  </Text>
                                  <Img
                                    className="h-2.5 w-[11px]"
                                    src="images/img_signal.svg"
                                    alt="signal_Two"
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
                                    className="text-gray-900_02 text-xs w-auto"
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
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="absolute md:h-[198px] h-[234px] left-[16%] top-[35%] w-[36%] sm:w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[79px] md:px-10 sm:px-5 w-[92%]"
                        style={{
                          backgroundImage: "url('images/img_group4.svg')",
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
                    </div>
                  </div>
                  <div className="absolute md:h-[198px] h-[234px] right-[16%] rotate-[180deg] top-[35%] w-[36%] sm:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[79px] md:px-10 sm:px-5 w-[92%]"
                      style={{
                        backgroundImage: "url('images/img_group5.png')",
                      }}
                    >
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_fragmentsinteraction.png"
                        alt="fragmentsintera"
                      />
                    </div>
                    <Img
                      className="absolute h-5 object-cover right-[0] top-[0]"
                      src="images/img_fragmentsarrow_20x32.png"
                      alt="fragmentsarrow_One"
                    />
                    <div className="absolute bottom-[0] flex flex-col h-10 items-center justify-start left-[0] rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_fragmentsdot.png"
                        alt="fragmentsdot"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
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
                          size="xs"
                          variant="fill"
                        >
                          Technology
                        </Button>
                        <Text
                          className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtWorkSansSemiBold24"
                        >
                          <Typewriter
                            options={{
                              strings: [
                                " The Impact of Technology on the Workplace: How Technology is Changing",
                              ],
                              autoStart: true,
                              loop: true,
                            }}
                          />
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
                            className="text-base text-gray-500_02 w-auto"
                            size="txtWorkSansRomanMedium16"
                          >
                            Jason Francisco
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-500_02 w-auto"
                          size="txtWorkSansRomanRegular16"
                        >
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                    <Img
                      className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                      src="images/img_rectangle38_6.png"
                      alt="rectangleThirtyEight"
                    />
                    <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="bg-indigo-A200_0c flex flex-col items-center justify-center px-2.5 py-1 rounded-md w-auto">
                          <Text
                            className="text-indigo-A200 text-sm w-auto"
                            size="txtWorkSansRomanMedium14"
                          >
                            Technology
                          </Text>
                        </div>
                        <Text
                          className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtWorkSansSemiBold24"
                        >
                          <Typewriter
                            options={{
                              strings: [
                                " The Impact of Technology on the Workplace: How Technology is Changing",
                              ],
                              autoStart: true,
                              loop: true,
                            }}
                          />
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
                            className="text-base text-gray-500_02 w-auto"
                            size="txtWorkSansRomanMedium16"
                          >
                            Elizabeth Slavin
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-500_02 w-auto"
                          size="txtWorkSansRomanRegular16"
                        >
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200_03 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                    <Img
                      className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                      src="images/img_rectangle38_7.png"
                      alt="rectangleThirtyEight"
                    />
                    <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="bg-indigo-A200_0c flex flex-col items-center justify-center px-2.5 py-1 rounded-md w-auto">
                          <Text
                            className="text-indigo-A200 text-sm w-auto"
                            size="txtWorkSansRomanMedium14"
                          >
                            Technology
                          </Text>
                        </div>
                        <Text
                          className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtWorkSansSemiBold24"
                        >
                          <Typewriter
                            options={{
                              strings: [
                                " The Impact of Technology on the Workplace: How Technology is Changing",
                              ],
                              autoStart: true,
                              loop: false,
                            }}
                          />
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
                            className="text-base text-gray-500_02 w-auto"
                            size="txtWorkSansRomanMedium16"
                          >
                            Ernie Smith
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-500_02 w-auto"
                          size="txtWorkSansRomanRegular16"
                        >
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div
                style={{ backdropFilter: "blur(5px)" }}
                className="absolute  bottom-[0] flex flex-col font-inter h-[1002px] md:h-auto inset-x-[0] items-end justify-start max-w-[1216px] mx-auto sm:px-5 px-6 py-8 rounded-[30px] w-full"
              >
                <div className="flex flex-col gap-[7px] justify-start w-[98%]">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[388px] pt-[0.07px] w-[300px]">
                    <button className="cursor-pointer font-semibold rounded-[14px] shadow-bs5 sm:text-[21px] md:text-[23px] text-[25px] text-center w-[350px] bg-[#060640] text-[#fff] p-[1rem] ml-[-1rem] mt-[2rem]">
                      Activate SEO Auto-Pilot
                    </button>
                  </div>
                  <div className="flex flex-col font-dmsans md:gap-10 gap-[167px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[965px] text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                      size="txtDMSansBold22"
                    >
                      2023 December
                    </Text>
                    <div className="flex md:flex-col flex-row font-helvetica md:gap-10 gap-[60px] items-start justify-start mr-[58px] w-[95%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start mb-[41px] md:mt-0 mt-[76px] p-[17px] rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                        <div className="flex flex-col justify-start mb-[3px] mt-3 w-full">
                          <div className="flex flex-row items-center justify-start w-[64%] md:w-full">
                            <Img
                              className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                              src="images/img_ellipse6.png"
                              alt="ellipseSix"
                            />
                            <div className="flex flex-col gap-[7px] items-start justify-start ml-[3px]">
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
                                Founder @Clipify
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
                          <div className="flex flex-row items-center justify-between ml-2 md:ml-[0] mt-2.5 w-[93%] md:w-full">
                            <Text
                              className="text-black-900 text-center text-sm"
                              size="txtHelveticaLight14"
                            >
                              Organic Traffic
                            </Text>
                            <Text
                              className="text-black-900 text-center text-sm"
                              size="txtHelveticaLight14"
                            >
                              Blog Ranking
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[42px] mt-[5px] w-[69%] md:w-full">
                            <Text
                              className="text-blue_gray-700 text-center text-lg"
                              size="txtHelveticaBold18Bluegray700"
                            >
                              8k+
                            </Text>
                            <Text
                              className="h-[21px] text-blue_gray-700 text-center text-lg"
                              size="txtHelveticaBold18Bluegray700"
                            >
                              7+
                            </Text>
                          </div>
                          <Text
                            className="ml-1 md:ml-[0] mt-[22px] text-black-900 text-center text-xs w-[99%] sm:w-full"
                            size="txtHelvetica12"
                          >
                            <>
                              From the moment I integrated the AI SEO tool,
                              I&#39;ve seen nothing but hassle free targeted
                              growth. It&#39;s like having a dedicated SEO
                              expert working 24/7, while I focus on what I do
                              best.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[37%] md:w-full">
                        <div className="bg-[#060640] flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[12px] shadow-bs4 w-full">
                          <div className="flex flex-col justify-start mb-[22px] mt-4 w-full">
                            <div className="flex flex-row gap-[9px] items-end justify-start w-[71%] md:w-full">
                              <Img
                                className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                                src="images/img_ellipse5.png"
                                alt="ellipseFive"
                              />
                              <div className="flex flex-col gap-[9px] items-start justify-start mb-1 mt-2">
                                <Text
                                  className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                                  size="txtHelveticaBold24"
                                >
                                  Daniyal
                                </Text>
                                <Text
                                  className="text-center text-lg text-white-A700"
                                  size="txtHelvetica18"
                                >
                                  Founder @BeTimeful
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                              <Img
                                className="h-10"
                                src="images/img_formkitpeople_white_a700.svg"
                                alt="formkitpeople_One"
                              />
                              <div className="h-10 w-10">
                                <Img
                                  className="h-10"
                                  src="/view.svg"
                                  alt="formkitpeople_One"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between ml-4 md:ml-[0] mt-[7px] w-[88%] md:w-full">
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
                            <div className="flex flex-row items-center justify-between ml-12 md:ml-[0] mt-[13px] w-[69%] md:w-full">
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
                            </div>
                            <Text
                              className="mt-[18px] text-center text-lg text-white-A700"
                              size="txtHelvetica18"
                            >
                              <>
                                This is every entrepreneur&#39;s dream. <br />
                                <br />
                                It gives you time back + targeted organic
                                traffic so you drive your business forward.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start mb-9 md:mt-0 mt-[81px] p-4 rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                        <div className="flex flex-col justify-start mb-1 mt-[13px] w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-start w-[63%] md:w-full">
                            <div className="h-[62px] relative w-[62px]">
                              <Img
                                className="h-[60px] m-auto rounded-[50%] w-[60px]"
                                src="images/img_ellipse6.png"
                                alt="ellipseSix_One"
                              />
                              <Img
                                className="absolute h-[62px] inset-[0] justify-center m-auto rounded-[50%] w-[62px]"
                                src="images/img_ellipse40.png"
                                alt="ellipseForty"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5 items-start justify-start ml-1">
                              <Text
                                className="text-black-900 text-center text-lg"
                                size="txtHelveticaBold18"
                              >
                                Sarah
                              </Text>
                              <Text
                                className="text-black-900 text-center text-xs"
                                size="txtHelvetica12"
                              >
                                Marketer @FMF
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[42px] mt-[25px] w-[66%] md:w-full">
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
                          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[9px] mt-2.5 w-[94%] md:w-full">
                            <Text
                              className="text-black-900 text-center text-sm"
                              size="txtHelveticaLight14"
                            >
                              Organic Traffic
                            </Text>
                            <Text
                              className="text-black-900 text-center text-sm"
                              size="txtHelveticaLight14"
                            >
                              Blogs Ranking
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[38px] mt-[5px] w-[70%] md:w-full">
                            <Text
                              className="text-blue_gray-700 text-center text-lg"
                              size="txtHelveticaBold18Bluegray700"
                            >
                              10k+
                            </Text>
                            <Text
                              className="h-[21px] text-blue_gray-700 text-center text-lg"
                              size="txtHelveticaBold18Bluegray700"
                            >
                              9+
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[5px] mt-[22px] text-black-900 text-center text-xs w-[98%] sm:w-full"
                            size="txtHelvetica12"
                          >
                            This is a competition killer. I only focus on
                            product & customers now while autoSEO takes care of
                            the targeted organic traffic.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900_01 flex flex-col font-dmsans items-center justify-end p-[60px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start mt-[3px] w-[28%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.44px]"
                size="txtDMSansRegular32"
              >
                Ready for SEO Freedom?
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[175px] md:ml-[0] ml-[79px] mt-[39px] text-[17px] text-center tracking-[-0.23px]"
                shape="round"
                size="md"
                variant="gradient"
                color="purple_800_indigo_800"
              >
                Get started
              </Button>
              <div className="flex flex-row items-start justify-start md:ml-[0] ml-[77px] mt-[88px] w-[55%] md:w-full">
                <Text
                  className="mt-0.5 text-[15px] text-white-A700 tracking-[-0.20px]"
                  size="txtDMSansRegular15"
                >
                  Affliate
                </Text>
                <Img
                  className="h-[18px] ml-0.5 mt-[3px] w-[18px]"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="ml-[39px] mt-0.5 text-[15px] text-white-A700 tracking-[-0.20px]"
                  size="txtDMSansRegular15"
                >
                  Discord
                </Text>
                <Img
                  className="h-[25px] ml-1.5 w-[26px]"
                  src="images/img_logo_white_a700.svg"
                  alt="logo"
                />
              </div>
              <Text
                className="mt-[26px] text-[15px] text-white-A700_87 tracking-[-0.20px]"
                size="txtDMSansRegular15WhiteA70087"
              >
                Copyright © 2020. LogoIpsum. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;

import React from "react";

import { Img, List, Text } from "components";

const LandingPageStackvector = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute bottom-[18%] h-[46px] left-[16%]"
          src="images/img_vector.svg"
          alt="vector"
        />
        <div className="absolute sm:h-[1125px] h-[413px] md:h-[414px] inset-[0] justify-center m-auto w-full">
          <div className="sm:h-[1125px] h-[413px] md:h-[414px] m-auto w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="bg-green-50 border-4 border-solid border-white-A700 flex flex-col h-[150px] items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[50%] shadow-bs1 w-[150px]">
                  <div className="flex flex-col items-center justify-start w-[58%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_cut.svg"
                      alt="cut"
                    />
                    <Text
                      className="mt-[5px] text-center text-gray-900_04 text-xl tracking-[-2.00px]"
                      size="txtLatoBold20"
                    >
                      {props?.links}
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange-50 border-4 border-solid border-white-A700 flex flex-col h-[150px] items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[50%] shadow-bs1 w-[150px]">
                  <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_dashboard.svg"
                      alt="dashboard"
                    />
                    <Text
                      className="mt-[5px] text-center text-gray-900_04 text-xl tracking-[-2.00px]"
                      size="txtLatoBold20"
                    >
                      {props?.scouts}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-end justify-center m-auto w-[67%]">
              <Img
                className="h-[47px] mb-[292px] sm:mt-0 mt-[74px]"
                src="images/img_objects.svg"
                alt="objects"
              />
              <List
                className="flex flex-col gap-[113px] sm:ml-[0] ml-[15px] w-[57%]"
                orientation="vertical"
              >
                <div className="bg-indigo-50 border-4 border-solid border-white-A700 flex flex-col h-[150px] items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[50%] shadow-bs1 w-full">
                  <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_sort.svg"
                      alt="sort"
                    />
                    <Text
                      className="mt-[5px] text-center text-gray-900_04 text-xl tracking-[-2.00px]"
                      size="txtLatoBold20"
                    >
                      {props?.writes}
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-100 border-4 border-solid border-white-A700 flex flex-col h-[150px] items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[50%] shadow-bs1 w-full">
                  <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <Text
                      className="mt-[5px] text-center text-gray-900_04 text-xl tracking-[-2.00px]"
                      size="txtLatoBold20"
                    >
                      {props?.tweaks}
                    </Text>
                  </div>
                </div>
              </List>
              <Img
                className="h-9 mb-[297px] ml-4 sm:ml-[0] sm:mt-0 mt-20"
                src="images/img_vector_white_a700.svg"
                alt="vector_One"
              />
            </div>
          </div>
          <Img
            className="absolute h-[135px] inset-[0] justify-center m-auto object-cover w-[135px]"
            src="images/img_httpslottief.png"
            alt="httpslottief"
          />
        </div>
      </div>
    </>
  );
};

LandingPageStackvector.defaultProps = {
  links: "Links",
  scouts: "Scouts",
  writes: "Writes",
  tweaks: "Tweaks",
};

export default LandingPageStackvector;

import React from "react";

import Text from "./Text";

const DesktopFiveOconclusion = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
            size="txtWorkSansSemiBold24"
          >
            {props?.title}
          </Text>
          <Text
            className="leading-[32.00px] max-w-[800px] md:max-w-full text-gray-800 text-xl"
            size="txtSourceSerifProRegular20"
          >
            {props?.description}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopFiveOconclusion.defaultProps = {
  title: "Conclusion:",
  description:
    "Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.",
};

export default DesktopFiveOconclusion;

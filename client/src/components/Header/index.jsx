import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Button
            className="flex h-[46px] items-center justify-center rounded-[50%] w-[46px]"
            shape="circle"
            color="white_A700"
            size="xs"
            variant="fill"
          >
            <Img src="/images/img_logo.png" alt="logo" />
          </Button>
          <Text
            className="bg-clip-text bg-gradient  text-base text-center text-transparent w-auto"
            size="txtPoppinsSemiBold16"
          >
            AutoSEO
          </Text>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[107px]"
          rightIcon={
            <Img
              className="h-4 mb-0.5 ml-1.5"
              src="/images/img_frame.svg"
              alt="Frame"
            />
          }
          shape="round"
          size="md"
          variant="gradient"
          color="purple_800_indigo_800"
        >
          <div className="font-poppins font-semibold text-center text-xs">
            Log out
          </div>
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

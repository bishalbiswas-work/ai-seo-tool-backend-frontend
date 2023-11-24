import React, { Component, useEffect, useState } from "react";

import { Button, Img, Line, Text } from "../../components";

// Auth
import { auth, provider } from "../../Pages/Auth/Firebase";
import { signInWithPopup } from "firebase/auth";

//
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";

//
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  const [value, setvalue] = useState("");

  // const handelClick = async () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     setvalue(data.user.email);
  //     console.log(data.user.uid); // This will print the UID to the console.
  //     dataContext.setUidFunction({ data: data.user.uid });
  //     localStorage.setItem("email", data.user.email);
  //     localStorage.setItem("name", data.user.displayName);

  //     dataContext.login();
  //     dataContext.setonboardingUserDetails({
  //       email: data.user.email,
  //       name: data.user.displayName,
  //     });
  //   });
  //   await dataContext.deleteUidIfExists({ uid: data.user.uid });
  //   navigate("/extract-data");
  // };
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

  const handelClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Set context and local storage
      setvalue(user.email);
      console.log(user.uid); // Print the UID to the console
      await dataContext.deleteUidIfExists({ uid: user.uid });
      await delay(500);
      // const temp = {
      //   phoneNumber: "000000",
      //   website: response.data.rootUrl,
      // };
      const temp = {
        phoneNumber: "000000",
        website: dataContext.inputUrl,
      };
      // sourceUrl;
      // dataContext.fetchData2({ data: temp });
      dataContext.generateSummary({ data: temp, uid: user.uid });
      //
      dataContext.setUidFunction({ data: user.uid });
      localStorage.setItem("email", user.email);
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("uid", user.uid);
      dataContext.login();
      dataContext.setonboardingUserDetails({
        email: user.email,
        name: user.displayName,
      });

      // Delete UID if exists and then navigate
      navigate("/extract-data");
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  useEffect(() => {
    setvalue(localStorage.getItem("email"));

    if (dataContext.isLoggedIn) {
      console.log(dataContext.isLoggedIn);

      // navigate("/onboarding/selectlanguage");

      // return <Redirect to="/onboarding/selectlanguage" />;
    }
  });
  return (
    <>
      <div className="bg-white-A700 font-lato h-[802px] mx-auto relative w-full">
        <header className="bg-white-A700 flex sm:flex-col font-poppins md:gap-10 items-center justify-between mb-[-34px] mx-auto px-10 md:px-5 py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs2 w-full z-[1]">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="flex h-[46px] items-center justify-center w-[46px]"
              shape="circle"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_logo.png" alt="logo" />
            </Button>
            <Text className="bg-clip-text bg-gradient  font-semibold text-base text-center text-transparent w-auto">
              AutoSEO
            </Text>
          </div>
          {/* <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Button
              className="cursor-pointer font-semibold min-w-[73px] text-center text-xs"
              shape="round"
              color="purple_800_indigo_800"
            >
              Login
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[189px]"
              rightIcon={
                <Img
                  className="h-3.5 mt-0.5 mb-px ml-1.5"
                  src="images/img_frame.svg"
                  alt="Frame"
                />
              }
              shape="round"
              color="purple_800_indigo_800"
            >
              <div className="font-semibold text-center text-xs">
                Get Started - It’s Free
              </div>
            </Button>
          </div> */}
        </header>
        <div className="flex flex-row sm:h-[716px] h-[774px] md:h-[977px] items-center justify-start mt-auto mx-auto md:px-5 px-[180px] py-8 w-[1440px] md:w-full">
          <div className="m-auto w-full">
            <div className="bg-white-A700 h-[716px] m-auto w-full"></div>
            {/* <Img
              className="absolute h-[241px] left-[0] object-cover top-[0] w-[167px]"
              src="images/img_vector636.png"
              alt="vector636"
            />
            <Img
              className="absolute bottom-[0] h-[241px] object-cover right-[0] w-[191px]"
              src="images/img_vector636.png"
              alt="vector637"
            /> */}
          </div>
          <div className="absolute flex md:flex-col flex-row gap-[27px] h-max inset-y-[0] items-center justify-start  my-auto w-[72%] md:w-[85%]">
            <div className="relative w-[57%] md:w-full">
              <Img
                className="absolute inset-[0] justify-center m-auto object-cover h-[500px] md:hidden"
                src="assets/blogbuild.png"
                alt="25421945blog242"
              />
              {/* <Img
                className="absolute bottom-[40%] h-[42px] right-[13%] w-[42px]"
                src="images/img_download.svg"
                alt="download"
              /> */}
            </div>
            <div
              className="bg-white-A700 border border-black-900_0c  flex flex-col gap-8 items-center justify-center mb-[45px] md:mt-0 mt-[49px] p-8 sm:px-5 rounded-[20px] shadow-bs1 w-[480px] sm:w-full"
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adjust values as needed
              }}
            >
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text className="font-semibold sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto">
                  Just one last step!
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text className="text-base text-blue_gray-700 w-auto">
                    {/* Signup to help us create amazing blogs for you 😍 */}
                    Sign up to see how our AI will 🚀 Your SEO 😍
                  </Text>
                </div>
              </div>
              <Line className="bg-black-900_0c h-px w-full" />
              <div className="flex flex-col gap-6 items-center justify-center w-full">
                {/* <div className="flex flex-col font-lato gap-3.5 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center px-0.5 w-full">
                    <Text className="text-base text-blue_gray-700 w-auto">
                      Continue with mobile number
                    </Text>
                  </div>
                  <div className="bg-gray-100 flex flex-row gap-3 h-[54px] md:h-auto items-center justify-between pl-5 pr-3.5 py-3.5 rounded-[27px] w-full">
                    <div className="flex flex-row font-poppins gap-2 items-center justify-start w-auto">
                      <Text className="text-base text-blue_gray-700 w-auto">
                        +131
                      </Text>
                      <Line className="bg-black-900_0c h-4 w-px" />
                      <Text className="text-base text-blue_gray-700 w-auto">
                        Enter your number
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-lato font-semibold leading-[normal] min-w-[51px] rounded-[16px] text-center text-sm"
                      color="deep_purple_A200_01"
                      size="sm"
                      variant="fill"
                    >
                      Go
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-lato items-center justify-center px-0.5 w-full">
                  <Text className="text-base text-blue_gray-700 text-center">
                    Or
                  </Text>
                </div> */}
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[416px] sm:min-w-full rounded-[27px]"
                  onClick={handelClick}
                  leftIcon={
                    <Img
                      className="mb-px mr-3"
                      src="assets/google.png"
                      alt="google"
                    />
                  }
                  style={{
                    color: "#7B68EE",
                    background: "#E5E4E2",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div className="font-poppins leading-[normal] text-base text-left">
                    Continue with Google
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

export default SignupPage;

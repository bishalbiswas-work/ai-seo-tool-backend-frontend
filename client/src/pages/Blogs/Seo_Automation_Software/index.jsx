import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
//
//
//
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//
// import LoaderBarv2 from "../components/LoaderBarv2/LoaderBarv2";
import LoaderBarv2 from "../../../components/LoaderBarv2/LoaderBarv2";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";

const Seo_Automation_Software = () => {
  const sideBarMenu = [
    { label: "  Travelling is an enriching" },
    { label: "  Pack Lightly and smartly" },
    { label: "  Stay safe and healthy" },
    { label: "  Immerse yourself in local culture" },
    { label: "  Capture Memories" },
    { label: "  Conclusion" },
  ];
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [businessMetaData, setBusinessMetaData] = useState(
    dataContext.businessMetaData
  );
  const [blogs, setBlogs] = useState(dataContext.blogs);

  // const [blog, setBlog] = useState(dataContext.blogs[dataContext.selectedBlog]);
  // console.log("Blog: ", blog);
  const [blog, setBlog] = useState({
    title: "Automate to Dominate. Best 5 automated seo software of 2023",
    seoKeywords: ["seo automation software", "seo hack"],
    imageKeywords: ["", ""],
    imagesUrl: [
      {
        imageUrl: "/assets/seo-automation.png",
      },
      {
        imageUrl: "",
      },
    ],
    content: {
      title: "",
      intro: (
        <div>
          In the digital marketing arena,{" "}
          <span className="font-semibold">SEO automation software </span> is
          like having a secret weapon in your arsenal. These tools not only save
          time but also bring precision and efficiency to your SEO strategies.
          Let's embark on a journey to discover the top 5 SEO automation tools
          of 2023 that are transforming the SEO landscape.
        </div>
      ),
      paragraphs: [
        {
          title: "Overview of SEO Automation Tools",
          body: "2023 has brought forward some innovative and powerful SEO automation tools. These tools are designed to simplify complex SEO tasks, making them accessible even to those who aren't SEO wizards.",
        },
        {
          title: (
            <div>
              SEO Automation Software #1:{" "}
              <a href="https://autopilotseo.pro/"> AutoSEOPilot.pro</a>
            </div>
          ),
          body: (
            <div>
              <span className="font-semibold">AutoSEOPilot.pro </span>
              stands out as a top contender in the SEO world. It's like the
              Hermione Granger in the world of SEO - brilliant, reliable, and
              always one step ahead. Its user-friendly interface and advanced
              <span className="font-semibold"> keyword research </span>{" "}
              capabilities make it a favorite among professionals. It simplifies{" "}
              <span className="font-semibold"> Google Analytics </span>, turning
              complex data into actionable insights.
            </div>
          ),
        },
        {
          title: (
            <div>
              SEO Automation Software #2:
              <a href="https://www.screamingfrog.co.uk"> Screaming Frog</a>
            </div>
          ),
          body: (
            <div>
              <span className="font-semibold">Screaming Frog </span>
              is the Spider-Man of SEO tools, known for its swift and thorough
              website crawling capabilities. It excels in{" "}
              <span className="font-semibold">link building </span> and{" "}
              <span className="font-semibold">site audits </span>, making it an
              essential tool for those who delve deep into website analytics.
              It's like having a superpower for identifying
              <span className="font-semibold">technical errors </span>
              and <span className="font-semibold">duplicate content </span> .
            </div>
          ),
        },
        {
          title: (
            <div>
              SEO Automation Software #3:
              <a href="https://www.semrush.com/"> SEMrush</a>
            </div>
          ),
          body: (
            <div>
              <span className="font-semibold">SEMrush </span>
              is the Iron Man of our SEO toolkit, offering a sophisticated array
              of features. From{" "}
              <span className="font-semibold">content creation </span> to
              <span className="font-semibold"> competitive analysis </span>
              SEMrush is a comprehensive tool that caters to various aspects of
              SEO with precision and flair. Its{" "}
              <span className="font-semibold">keyword ranking </span>
              and <span className="font-semibold">site rank </span>
              tracking features are particularly noteworthy.
            </div>
          ),
        },
        {
          title: (
            <div>
              SEO Automation Software #4:
              <a href="https://ahrefs.com/"> Ahrefs</a>
            </div>
          ),
          body: (
            <div>
              <span className="font-semibold">Ahrefs </span>
              is akin to Batman in the SEO universe - mysterious yet powerful.
              Renowned for its{" "}
              <span className="font-semibold">link building </span>
              and <span className="font-semibold">keyword research </span>
              prowess, Ahrefs is a staple in the toolkit of SEO professionals.
              It provides a detailed analysis of{" "}
              <span className="font-semibold">search engine results </span>,
              helping you stay ahead in the SEO game.
            </div>
          ),
        },
        {
          title: (
            <div>
              SEO Automation Software #5:
              <a href="https://www.link-assistant.com/"> SEO PowerSuite</a>
            </div>
          ),
          body: (
            <div>
              <span className="font-semibold">SEO PowerSuite </span>
              is the Dumbledore of SEO tools, offering a comprehensive and
              magical solution to various SEO challenges. From{" "}
              <span className="font-semibold">on-page optimization </span>
              to{" "}
              <span className="font-semibold">social media integration </span>,
              SEO PowerSuite is an all-in-one tool that addresses multiple
              facets of SEO with wisdom and efficiency.
            </div>
          ),
        },
        {
          title: "Comparison and Analysis of SEO Automation Tools",
          body: (
            <div>
              SEO PowerSuite is the Dumbledore of SEO tools, offering a
              comprehensive and magical solution to various SEO challenges. From
              on-page optimization to social media integration, SEO PowerSuite
              is an all-in-one tool that addresses multiple facets of SEO with
              wisdom and efficiency. Comparing these tools is like choosing your
              favorite superhero - each has its unique strengths and
              capabilities. Whether you're a small business owner or a seasoned
              digital marketer, there's a tool in this list that's tailored to
              meet your specific SEO needs.
            </div>
          ),
        },
        {
          title: "How to Choose the Right SEO Automation Software",
          body: (
            <div>
              Selecting the right SEO automation software depends on your
              specific requirements, budget, and the scale of your SEO projects.
              Consider factors like user-friendliness, feature set, and
              integration capabilities when making your choice.
            </div>
          ),
        },
        {
          title: "",
          body: "",
        },
      ],
      conclusion: {
        title: "Conclusion",
        body: (
          <div>
            The right SEO automation tool can be a game-changer for your digital
            marketing strategy. These top 5 tools of 2023 offer a range of
            features that cater to different SEO needs, making them invaluable
            assets in your quest for digital success.
          </div>
        ),
      },
    },
  });
  const handleClickNext = () => {
    navigate("/pricing");
    // navigate("/onboarding/dns-setup");
  };
  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0 });
  }, []);

  // ===========================================================

  // Content Highlighting

  // const [activeSection, setActiveSection] = useState("");

  // const handleScroll = () => {
  //   const positions = {
  //     introduction: introductionRef.current.getBoundingClientRect().top,
  //     firstParagraph: firstParagraphRef.current.getBoundingClientRect().top,
  //     // and so on for each section
  //   };

  //   // Determine which section is active based on scroll position
  //   const currentSection = setActiveSection(currentSection); // logic to determine based on positions
  // };

  // // Add event listener for scroll
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // ===========================================================

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <LoaderBarv2 />
        <header className="bg-white-A700 flex md:gap-10 items-center justify-between px-10 md:px-5 py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs2 w-full">
          <Button
            className="flex h-[46px] items-center justify-center w-[46px]"
            shape="circle"
            color="white_A700"
            variant="fill"
          >
            {/* <Img src={dataContext.businessMetaData.faviconUrl} alt="logo" /> */}
            <Img src="/assets/logo.png" alt="logo" />
          </Button>
          <div className="flex flex-col items-center justify-start w-auto">
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
            {/* <Button
              className="bg-gradient cursor-pointer font-semibold py-2 rounded-[50px] shadow-bs2  text-center text-xs md:text-md  w-[200px] mt-[10px]"
              onClick={() => {
                handleClickNext();
              }}
              style={{ fontSize: "10px", color: "white" }}
            >
              Connect to{" "}
              {(dataContext.businessMetaData?.name?.charAt(0)?.toUpperCase() ??
                "") + (dataContext.businessMetaData?.name?.slice(1) ?? "")}{" "}
              <InsertLinkIcon sx={{ marginBottom: "1px" }} />
            </Button> */}
          </div>
        </header>

        <div className="flex flex-col font-lato h-[3616px] md:h-auto items-center justify-start w-auto md:w-full mt-[20px]">
          <div
            className="bg-white-A700 flex flex-col items-start justify-start max-w-[1440px] w-full"
            style={{ width: "1440px !important" }}
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Sidebar className="!sticky !w-[335px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
                {/* <Text
                  className="mb-[658px] ml-[100px] mr-[117px] mt-[39px] text-base text-gray-900 w-auto"
                  size="txtLatoBold16"
                >
                  Table of Content
                </Text>
                <Button
                  className="cursor-pointer font-medium mb-[577px] ml-28 mr-[51px] mt-[113px] rounded-md text-[13px] text-center w-[172px]"
                  color="deep_purple_50"
                  size="sm"
                  variant="fill"
                >
                  Research your destination
                </Button>
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      flexDirection: "column",
                      paddingBottom: "100px",
                      paddingLeft: "100px",
                      color: "#181a2a",
                      fontSize: "13px",
                    },
                  }}
                  className="flex flex-col items-center justify-start mb-[362px] mt-20 md:pr-10 sm:pr-5 pr-[149px] w-[56%]"
                >
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </Menu> */}
                <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-worksans gap-6 items-start justify-start left-[0] px-4 py-6 rounded-[12px] top-[0] w-[303px] md:hidden">
                  <Text
                    className="text-gray-900_03 text-lg w-auto"
                    size="txtWorkSansSemiBold18"
                    style={{ fontWeight: "500" }}
                  >
                    Table of Content
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start px-4 w-full">
                    {/* Title */}
                    {blog.content.title && (
                      <Text
                        className="text-gray-900_03 text-sm w-auto"
                        size="txtWorkSansRomanRegular14Gray90003"
                      >
                        {blog.content.title}
                      </Text>
                    )}
                    <Text
                      className="text-gray-900_03 text-sm w-auto"
                      size="txtWorkSansSemiBold18"
                      style={{ fontWeight: "600" }}
                    >
                      Introduction
                    </Text>

                    {/* Paragraph titles */}
                    {blog.content.paragraphs.map((paragraph, index) => (
                      <Text
                        key={index}
                        className="text-gray-900_03 text-sm w-auto"
                        size="txtWorkSansRomanRegular14Gray90003"
                      >
                        {paragraph.title}
                      </Text>
                    ))}

                    {/* Conclusion */}

                    {blog.content.conclusion &&
                      blog.content.conclusion.title && (
                        <>
                          <Text
                            className="text-gray-900_03 text-sm w-auto"
                            size="txtWorkSansSemiBold18"
                            style={{ fontWeight: "600" }}
                          >
                            Conclusion
                          </Text>
                          <Text
                            className="text-gray-900_03 text-sm w-auto"
                            size="txtWorkSansRomanRegular14Gray90003"
                          >
                            {blog.content.conclusion.title}
                          </Text>
                        </>
                      )}
                  </div>
                </div>
              </Sidebar>
              <div className="flex flex-1 flex-col items-start justify-start md:px-5 w-full">
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-10 sm:px-5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <div className="flex flex-row font-worksans gap-3 items-start justify-start w-auto">
                        {/* <Button
                          className="cursor-pointer font-medium min-w-[101px] rounded-md text-center text-sm"
                          color="indigo_A200"
                          size="sm"
                          variant="fill"
                        >
                          Technology
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[101px] rounded-md text-center text-sm"
                          color="indigo_A200"
                          size="sm"
                          variant="fill"
                        >
                          Technology
                        </Button> */}
                        {blog.seoKeywords.map((item, index) => (
                          <Button
                            key={index}
                            className="cursor-pointer font-medium min-w-[97px]  text-center text-sm px-[10px] py-[5px]"
                            style={{
                              backgroundColor: `rgb(75 107 251  )`,
                              color: "white",
                              borderRadius: "5px",
                            }}
                          >
                            {item}
                          </Button>
                        ))}
                      </div>
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtLatoBold24"
                        style={{ fontWeight: "500" }}
                      >
                        <>{blog.title}</>
                      </Text>
                      <div className="flex sm:flex-col flex-row font-lato gap-3 items-start justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-center w-auto">
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtLatoRegular14"
                          >
                            November 20, 2023
                          </Text>
                          <div className="bg-blue_gray-100 h-1 rounded-[50%] w-1"></div>
                          {/* <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtLatoRegular14"
                          >
                            10 min read
                          </Text> */}
                          <div className="bg-blue_gray-100 h-1 rounded-[50%] w-1"></div>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtLatoRegular14"
                          >
                            <span className="text-gray-500 font-lato text-left font-normal">
                              By{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-gray-500 font-lato text-left font-normal underline"
                            >
                              {businessMetaData.name.charAt(0).toUpperCase() +
                                businessMetaData.name.slice(1)}
                            </a>
                          </Text>
                        </div>
                        {/* <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="text-deep_purple-A200 text-sm underline w-auto"
                            size="txtLatoSemiBold14"
                          >
                            Edit Blogs
                          </Text>
                          <Img
                            className="h-4 w-4"
                            src="/images/pencile.svg"
                            alt="frame"
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[398px] sm:h-auto object-cover rounded-[12px] w-[708px] md:w-full"
                    src={
                      blog.imagesUrl[0].imageUrl
                        ? blog.imagesUrl[0].imageUrl
                        : ""
                    }
                    alt="Best 5 automated seo software of 2023. Easy read looking for seo automation software"
                  />
                  <div
                    onClick={() => {
                      handleClickNext();
                    }}
                    className=" border  border-solid flex  flex-row font-roboto gap-3 items-center justify-start px-2 py-3 rounded-[12px] w-full"
                    style={{ borderColor: "lightgray" }}
                  >
                    <Img
                      className="h-8 w-8"
                      src="/images/img_play.svg"
                      alt="play"
                    />
                    <div className="flex-1">
                      <Img
                        className="h-[31px] w-full"
                        src="/images/img_waveform.svg"
                        alt="waveform"
                      />
                    </div>

                    <Text
                      className="text-base text-black-900_01 w-auto"
                      size="txtRobotoRomanRegular16"
                      style={{
                        display: "block",
                        width: "80px",
                        fontSize: "10px",
                      }}
                    >
                      <span className="text-black-900_01 font-roboto text-left font-normal">
                        0:00{" "}
                      </span>
                      <span className="text-black-900_01 font-roboto text-left font-normal">
                        / 1:28
                      </span>
                    </Text>
                    <Img
                      className="h-[22px] w-[22px]"
                      src="/images/img_volume_black_900_01.svg"
                      alt="volume"
                    />
                    {/* <div className="md:h-[15px] h-[5px] relative w-[8%] md:w-full md:hidden">
                      <div className="absolute bottom-[0] h-[5px] overflow-hidden right-[0] w-full">
                        <div className="w-full h-full absolute bg-blue_gray_100 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-black_900_01  rounded-[2px]"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <div className="absolute bg-black-900_01 bottom-[0] h-[15px] right-[6%] rounded-[7px] w-[15px]"></div>
                    </div> */}
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      {/* {item.title} */}
                    </Text>
                    <Text
                      className="leading-[170.00%] text-blue_gray-700 text-sm"
                      size="txtSourceSerifProRegular20"
                    >
                      {/* {item.body} */}
                      {blog.content.intro}
                    </Text>
                  </div>
                  {blog.content.paragraphs.map((item, index) => (
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                        size="txtWorkSansSemiBold24"
                      >
                        {item.title}
                      </Text>
                      <Text
                        className="leading-[170.00%] text-blue_gray-700 text-sm"
                        size="txtSourceSerifProRegular20"
                      >
                        {item.body}
                      </Text>
                    </div>
                  ))}
                  {/* <Text
                    className="leading-[170.00%] text-blue_gray-700 text-sm"
                    size="txtLatoRegular14Bluegray700"
                  >
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      <>
                        Traveling is an enriching experience that opens up new
                        horizons, exposes us to different cultures, and creates
                        memories that last a lifetime. However, traveling can
                        also be stressful and overwhelming, especially if you
                        don&#39;t plan and prepare adequately. In this blog
                        article, we&#39;ll explore tips and tricks for a
                        memorable journey and how to make the most of your
                        travels.
                        <br />
                        <br />
                        One of the most rewarding aspects of{" "}
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-bold">
                      traveling
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      <>
                        {" "}
                        is immersing yourself in the local culture and customs.{" "}
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      <>
                        Traveling is an enriching experience that opens up new
                        horizons, exposes us to different cultures, and creates
                        memories that last a lifetime. However, traveling can
                        also be stressful and overwhelming, especially if you
                        don&#39;t plan and prepare adequately. In this blog
                        article, we&#39;ll explore tips and tricks for a
                        memorable journey and how to make the most of your
                        travels.
                        <br />
                        <br />
                        One of the most rewarding aspects of{" "}
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-bold">
                      traveling
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      <>
                        {" "}
                        is immersing yourself in the local culture and customs.{" "}
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      <>
                        Traveling is an enriching experience that opens up new
                        horizons, exposes us to different cultures, and creates
                        memories that last a lifetime. However, traveling can
                        also be stressful and overwhelming, especially if you
                        don&#39;t plan and prepare adequately. In this blog
                        article, we&#39;ll explore tips and tricks for a
                        memorable journey and how to make the most of your
                        travels.
                        <br />
                        <br />
                        One of the most rewarding aspects of{" "}
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-bold">
                      traveling
                    </span>
                    <span className="text-blue_gray-700 font-lato text-left font-normal">
                      {" "}
                      is immersing yourself in the local culture and customs.{" "}
                    </span>
                  </Text> */}
                  <div className="backdrop-opacity-[0.5]  flex flex-col font-lato items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full mb-[20px]"
                      size="txtWorkSansSemiBold24"
                    >
                      {blog.content.conclusion.title}
                    </Text>

                    <Text
                      className="leading-[170.00%] text-blue_gray-700 text-sm"
                      size="txtLatoRegular14Bluegray700"
                    >
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>{blog.content.conclusion.body}</>
                      </span>
                      {/* <span className="text-blue_gray-700 font-lato text-left font-bold">
                        traveling
                      </span>
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>
                          {" "}
                          is immersing yourself in the local culture and
                          customs. <br />
                        </>
                      </span>
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>
                          Traveling is an enriching experience that opens up new
                          horizons, exposes us to different cultures, and
                          creates memories that last a lifetime. However,
                          traveling can also be stressful and overwhelming,
                          especially if you don&#39;t plan and prepare
                          adequately. In this blog article, we&#39;ll explore
                          tips and tricks for a memorable journey and how to
                          make the most of your travels..{" "}
                        </>
                      </span> */}
                    </Text>
                  </div>

                  {/* Add When Second Image Needed */}

                  {/* {blog.imagesUrl[1].imageUrl && (
                    <Img
                      className="h-[462px] md:h-auto object-cover rounded-[12px] w-full"
                      src={blog.imagesUrl[1].imageUrl}
                      alt="image_Two"
                    />
                  )} */}
                  {/* <div
                    className="bg-deep_purple-A200_19 flex flex-col font-lato gap-8 items-center justify-center sm:px-5 px-8 py-10 rounded-[12px] w-full"
                    style={{ backgroundColor: "rgba(123, 104, 238, 0.1)" }}
                  >
                    <div className="flex flex-col gap-4 items-center justify-center w-full">
                      <Text
                        className="text-base text-center text-deep_purple-A200 w-full"
                        size="txtLatoBold16DeeppurpleA200"
                      >
                        Ready to Rank without Breaking the Bank?
                      </Text>
                      <Text
                        className="leading-[170.00%] text-base text-center text-deep_purple-A200"
                        size="txtLatoBold16DeeppurpleA200"
                      >
                        <>
                          <br />
                          Connect your website to{" "}
                          {(dataContext.businessMetaData?.name
                            ?.charAt(0)
                            ?.toUpperCase() ?? "") +
                            (dataContext.businessMetaData?.name?.slice(1) ??
                              "")}
                          , and watch your business soar to new heights!
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start w-auto">
                      <Button
                        className="bg-gradient cursor-pointer font-semibold py-2 rounded-[50px] shadow-bs2  text-center text-lg w-[230px] mt-[10px]"
                        onClick={() => {
                          handleClickNext();
                        }}
                        style={{ fontSize: "10px", color: "white" }}
                      >
                        Connect to{" "}
                        {(dataContext.businessMetaData?.name
                          ?.charAt(0)
                          ?.toUpperCase() ?? "") +
                          (dataContext.businessMetaData?.name?.slice(1) ??
                            "")}{" "}
                        <InsertLinkIcon sx={{ marginBottom: "1px" }} />
                      </Button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className="bg-white-A700 flex flex-1 flex-col h-[718px] md:h-auto items-start justify-start pl-5 md:pr-5 pr-[100px] py-10 w-full"
                style={{ maxWidth: "300px" }}
              >
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-5 items-center justify-start p-4 rounded-[12px] w-auto ">
                  {/* <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <div className="bg-white-A700 flex flex-col gap-3 items-center justify-start px-3 py-[9px] rounded-[9px] w-[132px]">
                      <div className="flex flex-col font-dmsans gap-[9px] h-[75px] md:h-auto items-center justify-start w-auto">
                        <Img
                          className="h-12 md:h-auto object-cover w-24 sm:w-full"
                          src="images/img_graph.png"
                          alt="graph"
                        />
                        <div className="flex flex-col items-center justify-between w-[108px]">
                          <Text
                            className="text-[15px] text-center text-green-A700 w-auto"
                            size="txtDMSansBold15"
                          >
                            60
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[13.5px] text-center text-gray-900_01"
                        size="txtWorkSansRomanRegular135"
                      >
                        <span className="text-gray-900_01 font-lato text-[11px] font-normal">
                          <>
                            Overall score
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900_01 font-lato text-xs font-bold">
                          High
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start w-auto">
                      <div className="bg-teal-800_26 border border-solid border-teal-800 flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                        <Text
                          className="text-[11px] text-gray-900_02 w-auto"
                          size="txtLatoSemiBold11"
                        >
                          16500
                        </Text>
                        <Img
                          className="h-2.5 w-[11px]"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <Text
                          className="text-[11px] text-teal-800 w-auto"
                          size="txtLatoRegular11"
                        >
                          High
                        </Text>
                      </div>
                      <div className="bg-amber-A700_26 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                        <Text
                          className="text-[11px] text-gray-900_02 w-auto"
                          size="txtLatoRegular11Gray90002"
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
                          size="txtLatoRegular11AmberA700"
                        >
                          Medium
                        </Text>
                      </div>
                    </div>
                  </div> */}
                  <Line className="bg-gray-900_0c h-px w-[90%]" />
                  {/* <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-[13px] text-gray-600 w-auto"
                      size="txtLatoRegular13Gray600"
                    >
                      Share this blog
                    </Text>
                    <div className="flex flex-row gap-3 items-start justify-start w-auto">
                      <div className="flex flex-row gap-3 items-start justify-start w-auto">
                        <Button
                          className="flex items-center justify-center rounded-[25px] w-8 h-8"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_facebook.svg"
                            alt="facebook"
                          />
                        </Button>
                        <Button
                          className="flex  items-center justify-center rounded-[25px] w-8 h-8"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_linkedin.svg"
                            alt="linkedin"
                          />
                        </Button>
                        <Button
                          className="flex  items-center justify-center rounded-[25px] w-8 h-8"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_twitter.svg"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="flex  items-center justify-center rounded-[25px] w-8 h-8"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_reddit.svg"
                            alt="reddit"
                          />
                        </Button>
                      </div>
               
                    </div>
                  </div> */}
                  <div className="flex flex-col items-start justify-start w-auto ">
                    <List
                      className="flex flex-col gap-[23px] items-center w-full"
                      orientation="vertical"
                    >
                      <Text
                        className="text-[13.5px] text-center text-gray-900_03 w-auto"
                        size="txtWorkSansRomanRegular135"
                      >
                        Share this blog:
                      </Text>
                      <div className="flex flex-row gap-[17.29px] items-start justify-start w-auto">
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_facebook.svg"
                            alt="facebook"
                          />
                        </Button>
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_linkedin.svg"
                            alt="linkedin"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[17.29px] items-start justify-start w-auto">
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_twitter.svg"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images/img_reddit.svg"
                            alt="reddit"
                          />
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Text
                className="text-gray-900_03 text-sm w-auto text-center mb-[20px]"
                size="txtWorkSansSemiBold26"
                style={{ fontWeight: "500", fontSize: "22px" }}
              >
                FAQs (Frequently Asked Questions):
              </Text>
            </div>
            <BasicAccordion />
          </div>

          <div className="bg-white-A700 flex flex-col gap-10 items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 w-full">
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-auto"
              size="txtLatoBold24Gray90001"
              style={{ fontWeight: "500" }}
            >
              <>We&#39;ve Ranked 10K businesses & Counting...</>
            </Text>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-center mx-auto w-full">
              <div className="h-[300px] w-[11%]"></div>
              <div className="flex flex-col items-center justify-center w-[285px]">
                <div className="bg-gradient  border border-black-900_0c border-solid flex flex-col gap-[17.82px] items-start justify-start p-[17.82px] rounded-[20px] w-full">
                  <div className="flex flex-row gap-[10.69px] items-center justify-start w-auto">
                    <div className="h-7 relative w-7">
                      <div className="bg-white-A700 h-7 m-auto rounded-[50%] w-7"></div>
                      <Img
                        className="absolute h-7 inset-[0] justify-center m-auto object-cover w-7"
                        src="/images/Ellipse 40.png"
                        alt="maskgroup"
                      />
                    </div>
                    <div className="flex flex-col gap-[3.56px] items-start justify-start w-auto">
                      <Text
                        className="text-[14.26px] text-white-A700 w-auto"
                        size="txtLatoBold1426"
                      >
                        Sarah
                      </Text>
                      <Text
                        className="text-[10.69px] text-white-A700 w-auto"
                        size="txtLatoRegular1069"
                      >
                        Founder @FMF
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <Text
                    className="leading-[170.00%] text-[14.26px] text-white-A700 tracking-[-0.14px]"
                    size="txtLatoMedium1426"
                  >
                    <>
                      {/* This is every entrepreneur&#39;s dream. <br />
                      It gives you time back + targeted organic traffic so you
                      drive your business forward. */}
                      This is a competition killer. I only focus on product &
                      customers now while autoSEO takes care of the targeted
                      organic traffic.
                    </>
                  </Text>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <div className="flex flex-row gap-[10.69px] items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[5.35px] items-center justify-start p-[14.26px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.26px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1426"
                      >
                        10K+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.69px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1069"
                      >
                        Organic Traffic
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[5.35px] items-center justify-start p-[14.26px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.26px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1426"
                      >
                        9+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.69px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1069"
                      >
                        Blogs Ranking
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-80">
                <div className="bg-gradient  border border-black-900_0c border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <div className="h-8 relative w-8">
                      <div className="bg-white-A700 h-8 m-auto rounded-[16px] w-[31px]"></div>
                      <Img
                        className="absolute h-8 inset-[0] justify-center m-auto object-cover w-[31px]"
                        src="/images/daniyal.png"
                        alt="maskgroup_One"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtLatoBold16WhiteA700"
                      >
                        Daniyal
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtLatoRegular12"
                      >
                        Founder@BeTimeful
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <Text
                    className="leading-[170.00%] text-base text-white-A700 tracking-[-0.16px]"
                    size="txtLatoMedium16"
                  >
                    <>
                      This is every entrepreneur&#39;s dream. <br />
                      It gives you time back + targeted organic traffic so you
                      drive your business forward.
                    </>
                  </Text>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-1.5 items-center justify-start p-4 rounded-[12px] shadow-bs4 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-base text-center text-transparent w-auto"
                        size="txtLatoSemiBold16"
                      >
                        10K+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-center text-transparent text-xs w-auto"
                        size="txtLatoSemiBold12"
                      >
                        Organic Traffic
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-1.5 items-center justify-start p-4 rounded-[12px] shadow-bs4 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-base text-center text-transparent w-auto"
                        size="txtLatoSemiBold16"
                      >
                        121
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-center text-transparent text-xs w-auto"
                        size="txtLatoSemiBold12"
                      >
                        Blogs Ranking
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex sm:flex-col flex-row gap-[10.71px] items-center  w-[350px]"
                orientation="horizontal"
              >
                {/* <div className="bg-gradient1  border border-black-900_0c border-solid flex flex-col gap-[17.86px] items-start justify-start p-[17.86px] rounded-[20px] w-full">
                  <div className="flex flex-row gap-[10.71px] items-center justify-start w-auto">
                    <div className="h-7 relative w-7">
                      <div className="bg-white-A700 h-7 m-auto rounded-[50%] w-7"></div>
                      <Img
                        className="absolute h-7 inset-[0] justify-center m-auto object-cover w-7"
                        src="images/img_maskgroup.png"
                        alt="maskgroup"
                      />
                    </div>
                    <div className="flex flex-col gap-[3.57px] items-start justify-start w-auto">
                      <Text
                        className="text-[14.29px] text-white-A700 w-auto"
                        size="txtLatoBold1429"
                      >
                        Daniyal
                      </Text>
                      <Text
                        className="text-[10.71px] text-white-A700 w-auto"
                        size="txtLatoRegular1071"
                      >
                        Founder@BeTimeful
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <Text
                    className="leading-[170.00%] text-[14.29px] text-white-A700 tracking-[-0.14px]"
                    size="txtLatoMedium1429"
                  >
                    <>
                      This is every entrepreneur&#39;s dream. <br />
                      It gives you time back + targeted organic traffic so you
                      drive your business forward.
                    </>
                  </Text>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <div className="flex flex-row gap-[10.71px] items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[5.36px] items-center justify-start p-[14.29px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient1  text-[14.29px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1429"
                      >
                        10K+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient1  text-[10.71px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1071"
                      >
                        Organic Traffic
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[5.36px] items-center justify-start p-[14.29px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient1  text-[14.29px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1429"
                      >
                        121
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient1  text-[10.71px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1071"
                      >
                        Blogs Ranking
                      </Text>
                    </div>
                  </div>
                </div> */}

                <div className="bg-gradient  border border-black-900_0c border-solid flex flex-col gap-[17.86px] items-start justify-start p-[17.86px] rounded-[20px] w-full">
                  <div className="flex flex-row gap-[10.71px] items-center justify-start w-auto">
                    <div className="h-7 relative w-9">
                      <div className="bg-white-A700 h-7 m-auto rounded-[50%] w-7"></div>
                      <Img
                        className="absolute h-7 inset-[0] justify-center m-auto object-cover w-7"
                        src="/images/img_ellipse6.png"
                        alt="maskgroup"
                      />
                    </div>
                    <div className="flex flex-col gap-[3.57px] items-start justify-start w-auto">
                      <Text
                        className="text-[14.29px] text-white-A700 w-auto"
                        size="txtLatoBold1429"
                      >
                        Leo
                      </Text>
                      <Text
                        className="text-[10.71px] text-white-A700 w-auto"
                        size="txtLatoRegular1071"
                      >
                        Lead Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <Text
                    className="leading-[170.00%] text-[14.29px] text-white-A700 tracking-[-0.14px]"
                    size="txtLatoMedium1429"
                  >
                    <>
                      From the moment I integrated the AI SEO tool, I've seen
                      nothing but hassle free targeted growth. It's like having
                      a dedicated SEO expert working 24/7, while I focus on what
                      I do best.
                    </>
                  </Text>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <div className="flex flex-row gap-[10.71px] items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[5.36px] items-center justify-start p-[14.29px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.29px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1429"
                      >
                        8k+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.71px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1071"
                      >
                        Organic Traffic
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[5.36px] items-center justify-start p-[14.29px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.29px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1429"
                      >
                        7+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.71px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1071"
                      >
                        Blogs Ranking
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="h-[300px] w-[11%]"></div>
            </div>
            {/* <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Button
                className="border border-gray-300 border-solid flex h-10 items-center justify-center rotate-[-180deg] rounded-[50%] w-10"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-[30px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-[30px]"
                  src="images/img_send.svg"
                  alt="send"
                />
              </Button>
            </div> */}
          </div>
          {/* <Button
            className="!text-light_blue-A700 cursor-pointer font-medium text-base text-center underline w-full"
            shape="square"
            color="white_A700"
            size="2xl"
            variant="fill"
          >
            Connect to BeTimeful to continue reading your blog
          </Button> */}
        </div>
      </div>
    </>
  );
};

function BasicAccordion() {
  return (
    <Box sx={{ maxWidth: "700px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            What is SEO automation software?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            SEO automation software comprises tools designed to automate various
            SEO tasks, enhancing efficiency and accuracy in digital marketing
            strategies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How can SEO automation tools improve search engine rankings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            By automating repetitive tasks, providing precise analytics, and
            offering insights for optimization, these tools can significantly
            improve search engine rankings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Are SEO automation tools suitable for small businesses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely, many SEO automation tools are designed to be
            user-friendly and scalable, making them suitable for businesses of
            all sizes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Can SEO automation replace manual SEO efforts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            While automation can streamline many tasks, a combination of
            automated tools and manual strategies often yields the best results.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Seo_Automation_Software;

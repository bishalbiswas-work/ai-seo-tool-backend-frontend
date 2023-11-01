import React from "react";
import DataContext from "./DataState";
import { useState, useEffect } from "react";
import axios from "axios";

// Firebase
import { db } from "../Pages/Auth/Firebase";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// End Firebase
const DataState = (props) => {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  // const APP_ID = "834715744964121";
  // const APP_SECRET = "2582a389247cbe3902699eea25594d1d";
  const [appID, setAppID] = useState("834715744964121");
  const [appSecret, setAppSecret] = useState(
    "2582a389247cbe3902699eea25594d1d"
  );
  // const [appID, setAppID] = useState("267736178943787");
  // const [appSecret, setAppSecret] = useState(
  //   "2cbf96cf1d16da97da365d9964d585bf"
  // );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");

  const [uid, setUid] = useState("");
  const [docId, setDocId] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const [phoneNumber, setPhoneNumber] = useState(""); // Initialize with your default values
  const [website, setWebsite] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m MessengerGPT, ask me anything about MessengerGPT!",
    },
    {
      sender: "bot",
      text: "By the way, did you know you can have your own custom GPT connected to your messenger?",
    },
  ]);
  const [messagesLP, setMessagesLP] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m MessengerGPT, ask me anything about MessengerGPT!",
    },
    {
      sender: "bot",
      text: "By the way, did you know you can have your own custom GPT connected to your messenger?",
    },
  ]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [commonQuestions, setCommonQuestions] = useState([]);
  const [aboutBusiness, setAboutBusiness] = useState("");
  const [collectEmail, setCollectEmail] = useState(false);
  const [collectPhoneNo, setCollectPhoneNo] = useState(false);
  const [collectName, setCollectName] = useState(false);

  const [facebookToken, setFacebookToken] = useState({
    userProfileName: "",
    userProfileEmail: "",
    userId: "",
    userProfileToken: "",
    userProfileLongLiveToken: "",
    pageId: "",
    pageLongLiveToken: "",
    pageProfileImg: "",
  });
  const [facebookPages, setFacebookPages] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedPage, setSelectedPage] = useState();
  const [messageContext, setMessageContext] = useState();
  const [selectedBlog, setSelectedBlog] = useState(1);
  const [businessMetaData, setBusinessMetaData] = useState({
    status: false,
    domain: "",
    facebookLink: "",
    linkedinLink: "",
    twitterLink: "",
    redditLink: "",
    voice: "",
    message: "success",
    name: "wisesheets",
    faviconUrl: "https://www.wisesheets.io/favicon.ico",
    summary:
      "Wisesheets is a spreadsheet add-on for stock investors that provides instant access to stock financials in a spreadsheet. It eliminates the need for manual data entry and allows users to quickly access years of financial statements and compare thousands of stocks. The add-on also allows users to build custom screeners with key metrics and live data, as well as create custom models and templates. Customers have praised Wisesheets for its automation capabilities, data quality, and customer support. The add-on offers a simple pricing plan with access to historical financial data, comprehensive email support, and live price data. Wisesheets is compatible with Google Sheets and Excel and covers over 50 stock exchanges. The add-on is highly recommended by users for its value, time-saving features, and affordable pricing.                 Wisesheets is a spreadsheet add-on for stock investors that provides instant access to stock financials in a spreadsheet. It eliminates the need for manual data entry and allows users to quickly access years of financial statements and compare thousands of stocks. The add-on also allows users to build custom screeners with key metrics and live data, as well as create custom models and templates. Customers have praised Wisesheets for its automation capabilities, data quality, and customer support. The add-on offers a simple pricing plan with access to historical financial data, comprehensive email support, and live price data. Wisesheets is compatible with Google Sheets and Excel and covers over 50 stock exchanges. The add-on is highly recommended by users for its value, time-saving features, and affordable pricing.",
  });
  const [blogs, setBlogs] = useState([
    {
      title: "Streamline Stock Investing with Wisesheets",
      seoKeywords: [
        "stock investing, spreadsheet add-on, financial statements",
        "stock investors, custom screeners, data automation",
      ],
      imageKeywords: [
        "stock investor, spreadsheets, data automation",
        "stock analysis, comparison, templates",
      ],
      imagesUrl: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGludmVzdG9yJTJDJTIwc3ByZWFkc2hlZXRzJTJDJTIwZGF0YSUyMGF1dG9tYXRpb258ZW58MHx8fHwxNjk2OTQxMDE2fDA&ixlib=rb-4.0.3&q=85",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGFuYWx5c2lzJTJDJTIwY29tcGFyaXNvbiUyQyUyMHRlbXBsYXRlc3xlbnwwfHx8fDE2OTY5NDEwMTd8MA&ixlib=rb-4.0.3&q=85",
        },
      ],
      content: {
        title: "Streamline Stock Investing with Wisesheets",
        intro:
          "Streamlining stock investing can be a complex process, but with the right tools and resources, it becomes much easier. One such tool that has gained popularity in recent years is Wisesheets. In this blog, we will explore how Wisesheets can simplify stock investing and help investors make more informed decisions.",
        paragraphs: [
          {
            title: "Efficient Portfolio Tracking",
            body: "One of the key features of Wisesheets is its ability to provide efficient portfolio tracking. Instead of manually entering data and updating spreadsheets, Wisesheets automatically syncs with your brokerage account and imports all relevant information. This saves precious time and eliminates the chances of errors that can occur during manual data entry. With Wisesheets, you can easily keep track of your stocks, dividends, and overall portfolio performance in one centralized location.",
          },
          {
            title: "Advanced Analysis Tools",
            body: "Wisesheets offers a range of advanced analysis tools that can help investors make better-informed decisions. For example, it provides customizable charts and graphs that allow you to visualize your portfolio's performance over time. You can track key financial ratios, such as price-to-earnings and debt-to-equity, to identify potential investment opportunities or assess the health of your existing holdings. Additionally, Wisesheets offers historical data and performance metrics, enabling you to backtest investment strategies and evaluate their effectiveness.",
          },
          {
            title: "Real-Time Market Insights",
            body: "Staying updated with the latest market trends is crucial for successful stock investing. Wisesheets provides real-time market insights, including news articles, analyst ratings, and social media sentiment analysis. By aggregating information from various sources, Wisesheets helps investors stay on top of market developments and make timely decisions. Moreover, it offers customizable alerts and notifications, so you can receive updates on specific stocks or market events that are of interest to you.",
          },
        ],
        conclusion: {
          title: "Saving Time and Making Informed Decisions",
          body: "Overall, Wisesheets streamlines stock investing by saving time and providing investors with the necessary tools and resources to make informed decisions. Its efficient portfolio tracking and advanced analysis tools simplify the process of managing and analyzing investments. The real-time market insights ensure that investors are always up to date with relevant information. By using Wisesheets, investors can focus on strategic decision-making rather than spending excessive time on administrative tasks. If you're looking to streamline your stock investing process, Wisesheets is definitely worth exploring.",
        },
      },
    },
    {
      title: "Effortlessly Analyze Stocks with Wisesheets",
      seoKeywords: [
        "stock investors, customized models, comprehensive support",
        "stock investors, data automation, access to stock financials",
      ],
      imageKeywords: [
        "stock investing, financial data, automated tools",
        "financial data, stock market, spreadsheets",
      ],
      imagesUrl: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGludmVzdGluZyUyQyUyMGZpbmFuY2lhbCUyMGRhdGElMkMlMjBhdXRvbWF0ZWQlMjB0b29sc3xlbnwwfHx8fDE2OTY5NDEwNTF8MA&ixlib=rb-4.0.3&q=85",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTJDJTIwc3RvY2slMjBtYXJrZXQlMkMlMjBzcHJlYWRzaGVldHN8ZW58MHx8fHwxNjk2OTQxMDUyfDA&ixlib=rb-4.0.3&q=85",
        },
      ],
      content: {
        title:
          "Effortlessly Analyze Stocks with Wisesheets: A Game-Changer for Investors",
        intro:
          "As an investor, analyzing stocks can be a daunting task. The market is constantly changing, and making well-informed decisions requires a deep understanding of data and trends. Fortunately, there is a powerful tool that can make this process effortless - Wisesheets. In this blog, we will explore how Wisesheets can revolutionize the way you analyze stocks and equip you with the knowledge to make smarter investment decisions.",
        paragraphs: [
          {
            title: "Unlocking the Power of Data",
            body: "One of the key features of Wisesheets is its ability to unlock the power of data. By integrating with various data sources, including financial statements, stock prices, and market news, Wisesheets provides users with a comprehensive overview of a company's performance. This allows investors to make informed decisions based on quantitative data rather than speculative predictions. For example, by analyzing a company's financial statements, users can identify trends, such as increasing revenues or decreasing expenses, that may impact its stock price in the future. This data-driven approach takes the guesswork out of investing and empowers investors to make decisions based on solid evidence.",
          },
          {
            title: "Streamlining Analysis with Automation",
            body: "Another advantage of using Wisesheets is its ability to streamline the analysis process through automation. Traditionally, investors would spend hours manually entering data and performing calculations to evaluate a stock's performance. However, Wisesheets automates these tasks, saving investors valuable time and effort. By simply inputting the relevant data into predefined templates, Wisesheets generates comprehensive reports and visualizations, allowing investors to quickly grasp the essential information. This efficiency not only saves time but also reduces the margin for error, ensuring more accurate analysis and decision-making.",
          },
          {
            title: "Customization for Personalized Analysis",
            body: "Wisesheets understands that every investor has unique needs and preferences when it comes to stock analysis. That is why it offers extensive customization options to cater to individual requirements. Users can customize their spreadsheets to include specific metrics, indicators, and formulas that align with their investment strategies. This level of personalization allows investors to focus on the factors that matter most to them, whether it is evaluating a company's financial health, assessing its growth potential, or examining its competitive position. Wisesheets empowers investors to tailor their analysis, enabling them to make decisions that align with their investment goals.",
          },
        ],
        conclusion: {
          title:
            'Concluding Thoughts on "Effortlessly Analyze Stocks with Wisesheets"',
          body: "Wisesheets is truly a game-changer for investors looking to analyze stocks effortlessly. By unlocking the power of data, streamlining analysis through automation, and offering customization options, Wisesheets equips investors with the tools and insights necessary to make informed investment decisions. Whether you are a seasoned investor or just starting, Wisesheets can revolutionize the way you approach stock analysis. So why not give it a try and experience the power of effortless analysis with Wisesheets?",
        },
      },
    },
    {
      title: "Wisesheets: Your All-in-One Stock Investing Tool",
      seoKeywords: [
        "stock investors, custom templates, automated data updates",
        "stock investors, custom screeners, access to financial statements",
      ],
      imageKeywords: [
        "stock investing, financial data, seamless experience",
        "stock analysis, comparison, automated data updates",
      ],
      imagesUrl: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1683009427041-d810728a7cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGludmVzdGluZyUyQyUyMGZpbmFuY2lhbCUyMGRhdGElMkMlMjBzZWFtbGVzcyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjk2OTQxMDg0fDA&ixlib=rb-4.0.3&q=85",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGFuYWx5c2lzJTJDJTIwY29tcGFyaXNvbiUyQyUyMGF1dG9tYXRlZCUyMGRhdGElMjB1cGRhdGVzfGVufDB8fHx8MTY5Njk0MTA4NXww&ixlib=rb-4.0.3&q=85",
        },
      ],
      content: {
        title: "Wisesheets: Your All-in-One Stock Investing Tool",
        intro:
          "Investing in the stock market can be a daunting task, especially for novice investors. With so much information to sift through and numerous variables to consider, it's easy to feel overwhelmed. That's where Wisesheets comes in – a comprehensive stock investing tool that simplifies and streamlines the process. In this blog, we will explore the features, benefits, and importance of Wisesheets in making informed investment decisions.",
        paragraphs: [
          {
            title: "Efficient Portfolio Management",
            body: "One of the key features of Wisesheets is its ability to help investors manage their portfolios efficiently. With its intuitive interface and user-friendly design, investors can easily track their holdings, monitor performance, and make informed decisions about their investments. Wisesheets provides real-time updates on stock prices, along with essential financial data, allowing investors to stay on top of their investment strategies. Whether you're a seasoned trader or just starting out, Wisesheets can help you effectively manage your portfolio.",
          },
          {
            title: "In-Depth Research and Analysis",
            body: "Another significant aspect of Wisesheets is its built-in research and analysis tools. The platform provides access to a wealth of financial information, including company profiles, historical data, and industry trends. Wisesheets' advanced algorithms and data-driven insights help investors identify potential winners, evaluate risks, and make well-informed investment decisions. With just a few clicks, users can access comprehensive reports and analysis, saving valuable time and effort in conducting independent research.",
          },
          {
            title: "Risk Management and Diversification",
            body: "Wisesheets understands the importance of risk management and diversification in any investment strategy. The platform offers a range of features to help investors mitigate risks and optimize their portfolios. Wisesheets' risk assessment tools provide a comprehensive analysis of each stock's risk profile, helping investors make informed decisions based on their risk tolerance. Moreover, the platform offers portfolio optimization tools that suggest asset allocation strategies to ensure appropriate diversification. By utilizing Wisesheets, investors can reduce the overall risk and build a balanced portfolio.",
          },
        ],
        conclusion: {
          title:
            'Concluding Thoughts on "Wisesheets: Your All-in-One Stock Investing Tool"',
          body: "Wisesheets can be a game-changer for investors, regardless of their experience level. The platform's efficient portfolio management, in-depth research and analysis, and risk management features make it an invaluable tool for making informed investment decisions. By leveraging Wisesheets, investors can save time, reduce risks, and maximize their returns. Whether you're a seasoned investor or just dipping your toes into the stock market, Wisesheets is a tool worth considering. So, don't let the complexities of stock investing hold you back – empower yourself with Wisesheets and take control of your financial future.",
        },
      },
    },
    {
      title: "Unlock the Power of Stock Financials with Wisesheets",
      seoKeywords: [null, null],
      imageKeywords: [null, null],
      imagesUrl: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1557724630-96de91632c3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjk2OTQxMTI5fDA&ixlib=rb-4.0.3&q=85",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1557724630-96de91632c3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjk2OTQxMTI5fDA&ixlib=rb-4.0.3&q=85",
        },
      ],
      content: {
        title: "Unlock the Power of Stock Financials with Wisesheets",
        intro:
          "Do you want to take your stock analysis skills to the next level? Look no further than Wisesheets. In this blog, we will explore how Wisesheets can help you unlock the power of stock financials. Whether you are an experienced investor or just getting started, this powerful tool will provide you with valuable insights and information to make informed investment decisions.",
        paragraphs: [
          {
            title: "Access to Comprehensive Stock Financials",
            body: "One of the key advantages of using Wisesheets is the access it provides to comprehensive stock financials. Instead of spending hours researching and compiling data from various sources, Wisesheets brings all the relevant financial information together in one place. From balance sheets and income statements to cash flow statements and key financial ratios, you can easily access and analyze the financial health of any stock.",
          },
          {
            title: "Advanced Data Visualization and Analysis",
            body: "Another standout feature of Wisesheets is its advanced data visualization and analysis capabilities. Instead of relying on bland tables and numbers, Wisesheets utilizes interactive charts and graphs to present financial data in a visually appealing and easy-to-understand format.",
          },
          {
            title: "Real-Time Updates and Alerts",
            body: "In the fast-paced world of stock investing, staying up-to-date with the latest financial information is crucial. Wisesheets ensures that you never miss a beat by providing real-time updates and alerts.",
          },
        ],
        conclusion: {
          title:
            'Concluding Thoughts on "Unlock the Power of Stock Financials with Wisesheets"',
          body: "Wisesheets is a game-changer when it comes to stock analysis. Its ability to provide comprehensive stock financials, advanced data visualization and analysis features, and real-time updates and alerts make it an indispensable tool for investors of all levels.",
        },
      },
    },
    {
      title: "Discover the Ease of Stock Investing with Wisesheets",
      seoKeywords: [null, null],
      imageKeywords: [null, null],
      imagesUrl: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1557724630-96de91632c3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjk2OTQxMTI5fDA&ixlib=rb-4.0.3&q=85",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1557724630-96de91632c3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjk2OTQxMTI5fDA&ixlib=rb-4.0.3&q=85",
        },
      ],
      content: {
        title: "Discover the Ease of Stock Investing with Wisesheets",
        intro:
          "Stock investing can be an intimidating concept for many people. The complex jargon, volatile market conditions, and the fear of losing money often deter potential investors from taking the leap. However, with the advent of technology, there are now tools available that make stock investing easier and more accessible. One such tool is Wisesheets, a comprehensive investment platform that takes the hassle out of stock investing. In this blog, we will explore the various features and benefits of Wisesheets, and how it can help you navigate the world of stock investing with ease.",
        paragraphs: [
          {
            title: "Effortless Portfolio Management",
            body: "One of the key features of Wisesheets is its effortless portfolio management capabilities. With Wisesheets, you can track, analyze, and manage your investments all in one place. It provides a user-friendly interface that allows you to easily add your stocks, view their performance, and track dividends and other income streams. Wisesheets also provides detailed reports and charts that help you understand your portfolio's performance and make informed investment decisions. Gone are the days of manually tracking spreadsheets and spending hours analyzing your investments. Wisesheets simplifies the process and empowers you to manage your portfolio effortlessly.",
          },
          {
            title: "In-Depth Analysis and Research",
            body: "Understanding the fundamentals of each stock is crucial for successful investing. Wisesheets offers in-depth analysis and research tools that provide you with the necessary information to make informed decisions. It provides real-time market data, stock news, financial statements, and other relevant information that can help you evaluate potential investments. The platform also offers advanced charting tools and technical analysis indicators, enabling you to identify trends and patterns in the market. Wisesheets takes the guesswork out of stock investing and equips you with the tools you need to make well-informed decisions.",
          },
          {
            title: "Risk Management and Diversification",
            body: "Risk management is an essential aspect of stock investing, and Wisesheets offers features that help you manage and mitigate risks. The platform provides risk assessment tools that analyze your portfolio's risk exposure and suggest strategies to diversify your holdings. Wisesheets also offers a wide range of built-in financial models and calculators that help you assess different investment scenarios and determine optimal allocation strategies. By leveraging these risk management features, you can better protect your investments and optimize your portfolio for long-term growth.",
          },
        ],
        conclusion: {
          title:
            'Concluding Thoughts on "Discover the Ease of Stock Investing with Wisesheets"',
          body: "Investing in stocks doesn't have to be a daunting endeavor. With the help of tools like Wisesheets, you can simplify the process and make more informed investment decisions. From effortless portfolio management to in-depth analysis and research capabilities, Wisesheets offers a range of features that make stock investing easier and more accessible. By utilizing these tools, you can build a diversified portfolio, manage risks effectively, and make informed decisions based on data and insights. So why not give Wisesheets a try and discover the ease of stock investing for yourself?",
        },
      },
    },
    {
      title: "Simplify Stock Analysis with Wisesheets",
      seoKeywords: [null, null],
      imageKeywords: [null, null],
      imagesUrl: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1557724630-96de91632c3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjk2OTQxMTI5fDA&ixlib=rb-4.0.3&q=85",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1557724630-96de91632c3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTM3NDR8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjk2OTQxMTI5fDA&ixlib=rb-4.0.3&q=85",
        },
      ],
      content: {
        title: "Simplify Stock Analysis with Wisesheets",
        intro:
          "Stock analysis is a crucial part of making informed investment decisions. It involves studying past performance, examining financial statements, and keeping track of market trends. However, this process can be time-consuming and complex, especially for individual investors. Fortunately, there is a solution that simplifies stock analysis and empowers investors - Wisesheets.",
        paragraphs: [
          {
            title: "Efficiency and Accuracy",
            body: "One of the key advantages of using Wisesheets for stock analysis is the efficiency it brings to the process. With Wisesheets, investors can streamline their analysis by importing financial data directly from various sources, such as financial websites or brokerage accounts. This eliminates the need for manual data entry and reduces the chances of errors. By automating this step, investors have more time to focus on interpreting the data and making informed investment decisions.",
          },
          {
            title: "Visualization and Data Presentation",
            body: "Another significant advantage of using Wisesheets for stock analysis is the ability to create visually appealing and informative charts and graphs. Wisesheets provide built-in graphing tools that allow investors to present data in a visually impactful way. By visualizing data trends, investors can better understand the performance of a particular stock and identify patterns or anomalies.",
          },
          {
            title: "Risk Analysis and Scenario Modeling",
            body: "When it comes to stock analysis, understanding and evaluating risks is vital. Wisesheets provide investors with the tools to perform risk analysis and scenario modeling, helping them assess the potential impact of various factors on their investment portfolio.",
          },
        ],
        conclusion: {
          title:
            'Concluding Thoughts on "Simplify Stock Analysis with Wisesheets"',
          body: "Stock analysis can be a complex and time-consuming process, but with Wisesheets, investors can simplify and enhance their analysis efforts. By leveraging the efficiency and accuracy that Wisesheets offer, investors can save time, reduce errors, and focus on interpreting the data to make better-informed investment decisions.",
        },
      },
    },
  ]);
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const setBlogsFunction = ({ data }) => {
    setBlogs(data);
  };
  const setSelectedBlogFunction = ({ data }) => {
    setSelectedBlog(data);
  };
  const setBusinessMetaDataFunction = ({ data }) => {
    setBusinessMetaData(data);
  };
  const facebookPagesData = ({ data }) => {
    setFacebookPages(data);
  };
  const setAuthTokenFunction = ({ data }) => {
    setAuthToken(data);
    setIsLoggedIn(true);
  };
  const setUidFunction = ({ data }) => {
    setUid(data);
  };
  const setEmailFunction = ({ data }) => {
    console.log("phone number updated: ", data);
    setEmail(data);
  };
  const setNameFunction = ({ data }) => {
    console.log("phone number updated: ", data);
    setName(data);
  };
  const setPhoneNumberFunction = ({ data }) => {
    console.log("phone number updated: ", data);
    setPhoneNumber(data);
  };
  const setWebsiteFunction = ({ data }) => {
    setWebsite(data);
  };

  const setSourceUrlFunction = ({ data }) => {
    setSourceUrl(data);
  };
  const setProfileUrlFunction = ({ data }) => {
    setProfileUrl(data);
  };
  const setMessagesFunction = ({ data }) => {
    setMessages(data);
  };
  const setMessagesLPFunction = ({ data }) => {
    setMessagesLP(data);
  };
  const setQuestionsFunction = ({ data }) => {
    setQuestions(data);
  };
  const setAnswersFunction = ({ data }) => {
    setAnswers(data);
  };
  const setCommonQuestionsFunction = ({ data }) => {
    setCommonQuestions(data);
  };
  const setAboutBusinessFunction = ({ data }) => {
    setAboutBusiness(data);
  };
  const setCollectEmailFunction = ({ data }) => {
    setCollectEmail(data);
  };
  const setCollectPhoneNoFunction = ({ data }) => {
    setCollectPhoneNo(data);
  };
  const setCollectNameFunction = ({ data }) => {
    setCollectName(data);
  };
  const updateKnowledgeBase = async () => {
    // const docRef = db.collection("KnowledgeBase ").doc(uid);

    // Fetch the document
    // const docSnapshot = await docRef.get();

    // if (docSnapshot.exists) {
    // If the document exists, retrieve and print its data
    // const docData = docSnapshot.data();
    // console.log("Document data:", docData);

    // // Example: Print dummy field data
    // console.log("Dummy Field 1:", docData.dummyField1);
    // console.log("Dummy Field 2:", docData.dummyField2);
    // await docRef.setDoc({
    //   uid: uid,
    //   questions: questions,
    //   answers: answers,
    //   commonQuestion: commonQuestions,
    //   aboutBusiness: aboutBusiness,
    //   // created_time: serverTimestamp(),
    //   updated_time: serverTimestamp(),
    //   collectEmail: collectEmail,
    //   collectPhoneNo: collectPhoneNo,
    //   collectName: collectName,
    // });
    // } else {
    //   console.log("No document found with ID:", docId);
    // }
    const targetDoc = doc(db, "KnowledgeBase", uid);

    try {
      await setDoc(
        targetDoc,
        {
          uid: uid,
          questions: questions,
          answers: answers,
          commonQuestions: commonQuestions,
          aboutBusiness: aboutBusiness,
          // created_time: serverTimestamp(),
          updated_time: serverTimestamp(),
          collectEmail: collectEmail,
          collectPhoneNo: collectPhoneNo,
          collectName: collectName,
        },
        { merge: true }
      );

      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  //
  //
  //
  //
  const setFacebookUserProfileName = ({ name }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileName: name,
    }));
  };
  const setFacebookUserProfileEmail = ({ email }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileEmail: email,
    }));
  };
  const setFacebookUserID = ({ id }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userId: id,
    }));
  };
  const setFacebookUserProfileToken = ({ token }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileToken: token,
    }));
  };
  const setFacebookUserProfileLongLiveToken = ({ token }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileLongLiveToken: token,
    }));
  };
  const setFacebookPageId = ({ id }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      pageId: id,
    }));
  };
  const setFacebookPageLongLiveToken = ({ token }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      pageLongLiveToken: token,
    }));
  };
  const setFacebookPageProfileUrl = ({ url }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      pageProfileImg: url,
    }));
  };
  const setSelectedFacebookPageDetails = ({ data }) => {
    setSelectedPage(data);
    // setSelectedPage((prevState) => ({
    //   ...prevState,
    //   pageLongLiveToken: token,
    // }));
  };
  const setMessageContextDetails = ({ data }) => {
    setMessageContext(data);
    // setSelectedPage((prevState) => ({
    //   ...prevState,
    //   pageLongLiveToken: token,
    // }));
  };
  useEffect(() => {
    console.log(facebookToken);
  }, [facebookToken]);
  const updateOrCreateFirebaseDoc = async () => {
    if (docId) {
      const targetDoc = doc(db, "LP_Visitors_Data_AutoSEO", docId);

      try {
        await setDoc(
          targetDoc,
          {
            username: name,
            phoneNumber: phoneNumber,
            website: website,
            sourceUrl: sourceUrl,
            // messages: messages,

            timestamp: serverTimestamp(),
          },
          { merge: true }
        );

        console.log("Document updated successfully: ", docId);
      } catch (error) {
        console.error("Error updating document:", error);
      }
    } else {
      try {
        const newDocRef = await addDoc(
          collection(db, "LP_Visitors_Data_AutoSEO"),
          {
            username: name,
            phoneNumber: phoneNumber,
            website: website,
            sourceUrl: sourceUrl,
            // messages: messages,
            // messagesLP: messagesLP,
            timestamp: serverTimestamp(),
          }
        );
        setDocId(newDocRef.id); // Update the docId state with the new ID

        console.log("Document created successfully with ID:", newDocRef.id);
      } catch (error) {
        console.error("Error adding new document:", error);
      }
    }
  };

  // ==================================================================
  const createNewFirebaseDoc = async () => {
    try {
      const newDocRef = await addDoc(
        collection(db, "LP_Visitors_Data_AutoSEO"),
        {
          username: name,
          phoneNumber: phoneNumber,
          website: website,
          sourceUrl: sourceUrl,
          // messages: messages,
          // messagesLP: messagesLP,
          timestamp: serverTimestamp(),
        }
      );

      // If you still want to update some state with the new ID, you can keep this
      setDocId(newDocRef.id);

      console.log("Document created successfully with ID:", newDocRef.id);
    } catch (error) {
      console.error("Error adding new document:", error);
    }
  };
  // =====================================================
  const fetchData = async () => {
    console.log("Fetch is called: ", phoneNumber, website);
    // await createNewFirebaseDoc();
    const getSummary = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-summary`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    const getBlog = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-blogs`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };

    const submitData = {
      websiteUrl: website,
      UserPhoneNumber: phoneNumber,
    };
    // const output = await getLogin(submitData);
    try {
      const output = await getSummary(submitData);
      console.log("Backend Reponse Summary: ", output);
      const submitDataBlogs = {
        summary: output.data.summary,
        blogCount: 6,
        wordCount: 2500,
      };
      setBusinessMetaDataFunction({ data: output.data });

      const Blogs = await getBlog(submitDataBlogs);
      console.log("Backend Reponse Blogs: ", Blogs);

      setBlogsFunction({ data: Blogs.data.blogs });
      setDataLoaded(true);

      // delay(2000);
      //  navigate("/dashboard");
    } catch (error) {
      //  setstate(false);
      console.error("There was an error with getLogin:", error);
      // Handle the error or set some state here if necessary
    }
  };
  // ==================================================================
  const pushBlogs = async (docId) => {
    const targetDoc = doc(db, "AutoSEO_Blogs", docId);

    try {
      await setDoc(
        targetDoc,
        {
          ssl: false,
          blogs: blogs,
          businessMetaData: businessMetaData,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );

      console.log("Document updated successfully: ", docId);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  const verifiyDomainIP = async (domain) => {
    const getIp = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/check-domain-ip`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    try {
      let submitData = {
        domain: domain,
        ip: "159.223.182.225",
      };
      const response = await getIp(submitData);
      console.log("Backend Check Domain: ", response);
      return response;
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  return (
    <DataContext.Provider
      value={{
        appID,
        appSecret,
        authToken,
        uid,
        name,
        email,
        profileUrl,
        docId,
        phoneNumber,
        website,
        sourceUrl,
        messages,
        messagesLP,
        questions,
        answers,
        commonQuestions,
        aboutBusiness,
        collectEmail,
        collectPhoneNo,
        collectName,
        isLoggedIn,
        login,
        logout,
        blogs,
        selectedBlog,
        businessMetaData,
        fetchData,
        setBusinessMetaDataFunction,
        setProfileUrlFunction,
        setAuthTokenFunction,
        setUidFunction,
        setEmailFunction,
        setNameFunction,
        setPhoneNumberFunction,
        setWebsiteFunction,
        setSourceUrlFunction,
        setMessagesFunction,
        setMessagesLPFunction,
        setQuestionsFunction,
        setAnswersFunction,
        setCommonQuestionsFunction,
        setAboutBusinessFunction,
        setCollectEmailFunction,
        setCollectPhoneNoFunction,
        setCollectNameFunction,
        facebookToken,
        facebookPages,
        selectedPage,
        dataLoaded,
        setSelectedPage,
        messageContext,
        setBlogsFunction,
        setSelectedBlogFunction,
        facebookPagesData,
        setFacebookUserProfileName,
        setFacebookUserProfileEmail,
        setFacebookUserID,
        setFacebookUserProfileToken,
        setFacebookUserProfileLongLiveToken,
        setFacebookPageId,
        setFacebookPageProfileUrl,
        setFacebookPageLongLiveToken,
        setSelectedFacebookPageDetails,
        setMessageContextDetails,
        updateOrCreateFirebaseDoc,
        updateKnowledgeBase,
        pushBlogs,
        verifiyDomainIP,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;

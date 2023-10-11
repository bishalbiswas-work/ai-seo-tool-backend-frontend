import React, { Component } from "react";
import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages Import
import LandingPage from "./Pages/LandingPage";
import LandingPagev2 from "./Pages/LandingPagev2/LandingPagev2";
// import Desktop6MixpanelGenerateTextToVideoPage from "./Pages/Desktop6MixpanelGenerateTextToVideo";

// import { Prebuild_LandingPage } from "./Pages/Components/Prebuild_LandingPage/Prebuild_LandingPage";
import ExtractData from "./Pages/Onboard/ExtractData";
import Signup from "./Pages/Auth/Signup";
import ChatInterface from "./Dashboard/ChatInterface";
import ChatInterface_v2 from "./Dashboard/ChatInterface_v2";

import Dashboard from "./Dashboardv2/Pages/Dashboard";
import Dashboardv3 from "./Pages/Dashboardv3/Dashboardv3";
import BlogPage2 from "./Pages/BlogPage/BlogPage";
// import Logout from "./Pages/Auth/Logout";
import PaymentSuccess from "./Pages/Auth/PaymentSuccess";
import Pricing from "./Pages/Pricing";
// End Pages Imports
// Components Import
import WrapperComponent from "./Pages/WrapperComponent";
// import SelectPage from "./Pages/Onboard/SelectPage";
// End Components Imports

// ContextAPI
import DataState from "./ContextAPI/DataContext";
// import ExtractData from "./Pages/Onboard/ExtractData";
// import ChatInterface from "./Pages/Onboard/ChatInterface";
// import Success from "./Pages/Auth/Success";
// ContentAPI End
class App extends Component {
  render() {
    return (
      <>
        <DataState>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route
                  index
                  element={
                    <WrapperComponent>
                      <LandingPagev2 />
                      {/* <LandingPage /> */}
                      {/* <Desktop6MixpanelGenerateTextToVideoPage /> */}
                      {/* <Prebuild_LandingPage /> */}
                    </WrapperComponent>
                  }
                />
                {/* <Route
                  path="/home"
                  element={
                    <WrapperComponent>
                      {" "}
                      <LandingPage />{" "}
                    </WrapperComponent>
                  }
                /> */}
                <Route
                  path="/auth"
                  element={
                    <WrapperComponent>
                      <Signup />
                    </WrapperComponent>
                  }
                />
                {/* <Route
                  path="/logout"
                  element={
                    <WrapperComponent>
                      <Logout />
                    </WrapperComponent>
                  }
                /> */}
                <Route
                  path="/success"
                  element={
                    <WrapperComponent>
                      <PaymentSuccess />
                    </WrapperComponent>
                  }
                />
                {/* <Route
                  path="/select-page"
                  element={
                    <WrapperComponent>
                      <SelectPage />
                    </WrapperComponent>
                  }
                /> */}
                <Route
                  path="/extract-data"
                  element={
                    <WrapperComponent>
                      <ExtractData />
                    </WrapperComponent>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <WrapperComponent>
                      {/* <Dashboard /> */}
                      <Dashboardv3 />
                    </WrapperComponent>
                  }
                />
                <Route
                  path="dashboard/blogpage"
                  element={
                    <WrapperComponent>
                      <BlogPage2 />
                    </WrapperComponent>
                  }
                />
                <Route
                  path="dashboard/chat"
                  element={
                    <WrapperComponent>
                      <ChatInterface_v2 />
                    </WrapperComponent>
                  }
                />
                <Route
                  path="/pricing"
                  element={
                    <WrapperComponent>
                      <Pricing />
                    </WrapperComponent>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataState>
      </>
    );
  }
}

export default App;

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
import { getDatabase, ref, onValue, off, get, remove } from "firebase/database";

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
  const [userDetails, setUserDetails] = useState({
    email: "",
    name: "",
  });
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
  const [urlStored, setUrlStored] = useState("");
  // ===========================================

  useEffect(() => {
    const loadFromLocalStorage = () => {
      console.log("LocalStorage Update!");
      // Load blogs from local storage
      const storedBlogs = localStorage.getItem("blogs1");
      // if (storedBlogs) {
      //   try {
      //     setBlogs(JSON.parse(storedBlogs));
      //   } catch (e) {
      //     console.error("Failed to parse blogs from localStorage", e);
      //   }
      // }

      // Load summary from local storage and update businessMetaData individually
      const storedSummary = localStorage.getItem("summary1");
      if (storedSummary && !summaryLoad) {
        try {
          const summaryData = JSON.parse(storedSummary);
          console.log(summaryData);
          setBusinessMetaData((prevMetaData) => ({
            ...prevMetaData,
            // Update only if the key exists in the summary data
            ...Object.keys(prevMetaData).reduce((acc, key) => {
              if (summaryData[key] !== undefined) {
                acc[key] = summaryData[key];
              }
              return acc;
            }, {}),
          }));
          console.log("Summary loaded from localstorage!");
        } catch (e) {
          console.error("Failed to parse summary from localStorage", e);
        }
      }
    };
    loadFromLocalStorage();
  }, []); // The empty dependency array means this effect will only run once when the component mounts.
  useEffect(() => {
    console.log("Updated from localStorage: ", blogs, businessMetaData);
  }, []);
  // ==========================================
  const [businessMetaData, setBusinessMetaData] = useState({
    status: false,
    domain: "",
    facebookLink: "",
    linkedinLink: "",
    twitterLink: "",
    redditLink: "",
    voice: "",
    message: "",
    name: "",
    faviconUrl: "",
    summary: "",
  });
  const [blogs, setBlogs] = useState([
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
          body: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", "stock analysis, comparison, automated data updates"],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
          body: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
  ]);
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setIsLoggedIn(true);
      console.log("User Logged In");
    }
  }, []);
  const setonboardingUserDetails = ({ email, name }) => {
    setUserDetails({
      email: email,
      name: name,
    });
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const setUrlStoredFunction = ({ data }) => {
    setUrlStored(data);
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
      localStorage.setItem("summary1", JSON.stringify(output.data));

      const submitDataBlogs = {
        summary: output.data.summary,
        // blogCount: 6,
        blogCount: 3,
        wordCount: 2500,
      };
      setBusinessMetaDataFunction({ data: output.data });

      const Blogs = await getBlog(submitDataBlogs);
      console.log("Backend Reponse Blogs: ", Blogs);

      localStorage.setItem("blogs1", JSON.stringify(Blogs.data.blogs));

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

  // =====================================================
  const fetchData2 = async ({ data }) => {
    console.log("Fetch is called: ", data.phoneNumber, data.website);
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
      websiteUrl: data.website,
      UserPhoneNumber: data.phoneNumber,
    };
    // const output = await getLogin(submitData);
    try {
      const output = await getSummary(submitData);
      console.log("Backend Reponse Summary: ", output);
      localStorage.setItem("summary1", JSON.stringify(output.data));

      const submitDataBlogs = {
        summary: output.data.summary,
        // blogCount: 6,
        blogCount: 3,
        wordCount: 2500,
      };
      setBusinessMetaDataFunction({ data: output.data });

      const Blogs = await getBlog(submitDataBlogs);
      console.log("Backend Reponse Blogs: ", Blogs);

      localStorage.setItem("blogs1", JSON.stringify(Blogs.data.blogs));

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

  // =====================================================
  const [summaryLoad, setSummaryLoad] = useState(false);

  const generateSummary = async ({ data }) => {
    console.log("Fetch is called: ", data.phoneNumber, data.website);
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

    const submitData = {
      websiteUrl: data.website,
      UserPhoneNumber: data.phoneNumber,
    };
    // const output = await getLogin(submitData);
    try {
      const output = await getSummary(submitData);
      console.log("Backend Reponse Summary: ", output);
      localStorage.setItem("summary1", JSON.stringify(output.data));

      setSummaryLoad(true);

      // setBusinessMetaDataFunction({ data: output.data });
      setBusinessMetaData({
        name: output.data.name,
        summary: output.data.summary,
        faviconUrl: output.data.faviconUrl,
      });

      // delay(2000);
      //  navigate("/dashboard");
    } catch (error) {
      //  setstate(false);
      console.error("There was an error with summary:", error);
      // Handle the error or set some state here if necessary
    }
  };
  useEffect(() => {
    console.log("BusinessMetaData: ", businessMetaData);
  }, [businessMetaData]);
  useEffect(
    () => {
      const generateBlogs = async () => {
        await delay(3000);
        const getBlog = async (submitData) => {
          try {
            const response = await axios.post(
              `${API_BASE_URL}/api/get-blogs-lazy`,
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
          const submitDataBlogs = {
            summary: businessMetaData.summary,
            uid: uid,
            blogCount: 3,
            wordCount: 2500,
          };
          console.log("BusinessMetaData Get Blogs: ", businessMetaData);
          const Blogs = await getBlog(submitDataBlogs);
          console.log("Backend Reponse Blogs: ", Blogs);

          localStorage.setItem("blogs1", JSON.stringify(Blogs.data.blogs));

          setBlogsFunction({ data: Blogs.data.blogs });
        } catch (err) {
          console.log(err);
        }
      };
      if (uid && summaryLoad) {
        console.log("blog Generation Started");
        generateBlogs();
      }
    },
    // [uid, summaryLoad]
    [businessMetaData]
  );

  // ==================================================================

  const deleteUidIfExists = async ({ uid }) => {
    const db = getDatabase();
    const dbRef = ref(db, `AutoSEO-Blogs/${uid}`);
    console.log("doc ref:", dbRef);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        // If the uid exists, delete it
        await remove(dbRef);
        console.log(`UID ${uid} deleted successfully.`);
        setBlogs([]);
        setDataLoaded(false);
      } else {
        console.log(`UID ${uid} does not exist.`);
      }
    } catch (error) {
      console.error(`Error checking or deleting UID ${uid}:`, error);
    }
  };
  // ==================================================================

  useEffect(() => {
    if (uid) {
      const db = getDatabase();
      const dbRef = ref(db, `AutoSEO-Blogs/${uid}`);

      // Subscribe to the database changes
      const unsubscribe = onValue(
        dbRef,
        (snapshot) => {
          const dbData = snapshot.val();
          console.log("Realtime DB: ", dbData);

          if (dbData) {
            setBlogs(dbData);
            setDataLoaded(true);
          }
        },
        {
          onlyOnce: false, // If you want to listen to the changes only once
        }
      );

      // Cleanup subscription on component unmount
      // return () => off(dbRef);
    }
  }, [uid]); // This effect will run whenever the `uid` state changes.
  useEffect(() => {
    const tempUid = localStorage.getItem("uid");
    if (tempUid) {
      setUid(tempUid);
    }
  }, []);
  // useEffect(() => {
  //   const db = getDatabase();
  //   const handleNewData = (snapshot) => {
  //     const dbData = snapshot.val();
  //     // Use the current value of the uid ref to decide whether to update the state
  //     if (dbData && uid) {
  //       console.log("Realtime DB: ", dbData);
  //       setBlogs(dbData);
  //       setDataLoaded(true);
  //     }
  //   };

  //   // Since we're subscribing for any updates, we don't use a specific uid here
  //   const unsubscribe = onValue(ref(db, `AutoSEO-Blogs`), handleNewData);

  //   // Cleanup subscription on component unmount
  //   // return () => off(ref(db, `AutoSEO-Blogs`), handleNewData);
  // }, []); // Empty dependency array means this effect will only run once on mount
  // useEffect(() => {
  //   // Create a reference to the specific path in the Realtime Database
  //   const dbRef = ref(database, "AutoSEO-Blogs/uid");

  //   // Subscribe to the path, and this will listen to all changes in real-time
  //   const unsubscribe = onValue(
  //     dbRef,
  //     (snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log("Data: ", snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     },
  //     {
  //       onlyOnce: false, // This will make sure the subscription stays alive
  //     }
  //   );

  //   // Normally you would return unsubscribe to stop listening to changes
  //   // when the component unmounts, but since you specified not to unsubscribe,
  //   // we'll leave it out. This will cause a memory leak if the component unmounts,
  //   // so it's typically not recommended unless you have a specific reason.
  // }, []);
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
  const verifiyDomainIP = async (submitData) => {
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
        urlStored,
        uid,
        name,
        email,
        setonboardingUserDetails,
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
        fetchData2,
        deleteUidIfExists,

        setUrlStoredFunction,
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
        generateSummary,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;

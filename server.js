// const { admin } = require("./auth/firebaseConfig"); // Your firebase configuration
// const { facebookSDK } = require("./auth/facebookConfig"); // Your facebook SDK configuration
const {
  getLongLivedToken,
  getPageAccessToken,
  getPageData,
  fetchAndCleanFacebookMessages,
} = require("./auth/facebookConfig");
const {
  extractDomainName,
  fetchFavicon,
  getContentAndUrl,
  determineURLFormat,
  getContent,
} = require("./auth/webScrape");
const {
  createVectors,
  createVectors2,
  vectorExists,
  processQuery,
  processQuery2,
  generateListStringQA,
  processText,
  findAndRankCommonSentences,
  removeSensitiveDataAndSummarize,
  extractQAFromParagraph,
} = require("./auth/openAi");
const {
  contentSummarize,
  writeTitles,
  writeContent,
  writeImagesKeywords,
  limitWords,
} = require("./auth/opemAiv2");
const {
  writeBlog,
  convertBlobToJSONBlog,
  writeTitleAndImageKeyword,
  convertBlobToJSONMain,
  generateBlogs,
} = require("./auth/openAiv3");
//
//
//
const dns = require("dns");

var admin = require("firebase-admin");
var serviceAccount = require("./auth/messangergpt-firebase-adminsdk-b3qv7-42edd05227.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();

//
const path = require("path");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// App inisilizaton
const app = express();
// app.use(bodyParser.json());
app.use(express.json());

const whitelist = [
  "http://localhost:3000", // React app's location in development
  "http://localhost:5000", // Optional: If you have another service running in production on this port
  "https://autopilotseo.pro", // Production frontend domain
  "https://www.autopilotseo.pro", // Production frontend domain with www
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const PORT = process.env.PORT || 5000;
const SECRET_KEY =
  "t3klbsukjuecvzw61wllwxigltinwiz0v10duhkbjy35ws8h4zpobrmmgs5d2c9k0dye5nzav6evrv0f3xazib5l2g6lzpr0wixcj4r17j75otly007ib9dynzls7efwr8ln48jn49q7jlsw5i1htu";
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// 1. get-access-token

app.post("/api/get-access-token", async (req, res) => {
  try {
    // let facebookUserId = req.body.facebookUserId;
    // let facebookPageId = req.body.facebookPageId;
    // let facebookShortLiveToken = req.body.facebookShortLiveToken;

    let websiteUrl = req.body.websiteUrl;
    let UserPhoneNumber = req.body.UserPhoneNumber;
    // let urlLevel = req.body.urlLevel;
    console.log(websiteUrl, UserPhoneNumber);

    let userSnapshot = await firestore
      .collection("UserAutoSEO")
      .where("UserPhoneNumber", "==", UserPhoneNumber)
      .get();

    let uid, created_time, firebaseToken, name, faviconUrl;

    if (!userSnapshot.empty) {
      // User exists in our collection
      let userDoc = userSnapshot.docs[0];
      uid = userDoc.id; // Document ID serves as uid
      created_time = userDoc.data().created_time; // Fetch the original creation time
      firebaseToken = userDoc.data().authToken;
      name = userDoc.data().name;
      faviconUrl = userDoc.data().faviconUrl;
      websiteUrl = userDoc.data().websiteUrl;
      console.log("User Exist");
    } else {
      // New user, create a new uid and set created time
      uid = crypto.randomBytes(16).toString("hex");
      created_time = admin.firestore.FieldValue.serverTimestamp();
      console.log("User Not Exist");
      // let firebaseToken = await admin.auth().createCustomToken(uid);
      const payload = { uid: uid };
      const options = { expiresIn: "60d" }; // 60 days expiration

      firebaseToken = jwt.sign(payload, SECRET_KEY, options);
      name = await extractDomainName(websiteUrl);
      faviconUrl = await fetchFavicon(websiteUrl);

      let userRef = firestore.collection("Users2").doc(uid);
      await userRef.set(
        {
          uid: uid,

          // facebookPageId: facebookPageId,
          // facebookUserId: facebookUserId, // Always ensure the facebookId is present or updated
          authToken: firebaseToken,
          name: name,
          // urlLevel: urlLevel,
          websiteUrl: websiteUrl,
          UserPhoneNumber: UserPhoneNumber,
          faviconUrl: faviconUrl,
          // UserShortLiveToken: facebookShortLiveToken,
          // UserLongLiveToken: longLiveToken,
          // pageAccessToken: pageAccessToken,
          created_time: created_time,
          updated_time: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      let content = await getContent(websiteUrl);
      // let content = await getContentAndUrl(websiteUrl, 25, 2);

      console.log("Scraped Data: ", content.content);

      let summary = await contentSummarize(content.content);
      let topicsRaw = await writeTitleAndImageKeyword(summary, "3");
      let topics = convertBlobToJSONMain(topicsRaw);
      for (let i = 0; i < topics.length; i++) {
        console.log("Title:", topics[i].title);
        console.log("Image Keywords:", topics[i].imageKeywords.join(", "));

        let blogRaw = await writeBlog(topics[i].title, "2500");
        let blog = convertBlobToJSONBlog(blogRaw);
      }
      res.json({
        message: "success",
        content: summary,
        titles: titles,
        blogs: blogs,
        imageKeywords: imageKeywords,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//==============================================================

app.post("/api/get-summary", async (req, res) => {
  try {
    let websiteUrl = req.body.websiteUrl;
    let UserPhoneNumber = req.body.UserPhoneNumber;
    // let urlLevel = req.body.urlLevel;
    console.log(websiteUrl, UserPhoneNumber);
    let name = await extractDomainName(websiteUrl);
    let faviconUrl = await fetchFavicon(websiteUrl);
    let content = await getContent(websiteUrl);
    console.log("Scraped Data: ", content.content);
    let limitwords = limitWords(content.content);
    console.log("======================================================");
    console.log(limitwords);
    console.log("======================================================");
    let summary = await contentSummarize(limitwords);

    res.json({
      message: "success",
      name: name,
      faviconUrl: faviconUrl,
      summary: summary,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//===========================================================

app.post("/api/get-blogs", async (req, res) => {
  try {
    let summary = req.body.summary;
    let blogCount = req.body.blogCount;
    let wordCount = req.body.wordCount;

    let blogs = await generateBlogs(summary, blogCount, wordCount);
    res.json({
      message: "success",
      blogs: blogs,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================================================

// ========================================================
//                    Start Chec Url
// ========================================================

app.post("/api/check-url", async (req, res) => {
  try {
    console.log(req.body);
    let url = req.body.url;
    let response = await determineURLFormat(url);
    console.log(response);

    let rootUrl, status;
    if (response) {
      rootUrl = response;
      status = true;
    } else {
      rootUrl = response;
      status = false;
    }
    res.json({
      rootUrl: rootUrl,
      status: status,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ========================================================
//                    End Chec Url
// ========================================================

// =======================================================

app.post("/api/check-domain-ip", (req, res) => {
  const { domain, ip } = req.body;

  dns.lookup(domain, (err, address) => {
    if (err) {
      res.status(500).send({ error: `Error occurred: ${err.message}` });
      return;
    }

    if (address === ip) {
      res.send({
        message: `The domain ${domain} points to the given IP: ${ip}`,
        status: true,
      });
    } else {
      res.send({
        message: `The domain ${domain} does not point to the given IP: ${ip}. It points to ${address}`,
        status: false,
      });
    }
  });
});

// =======================================================

app.post("/api/get-response-self", async (req, res) => {
  try {
    // const bearerToken = req.headers.authorization;
    // if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    //   return res.status(403).json({ error: "Unauthorized request" });
    // }

    // const accessToken = bearerToken.split("Bearer ")[1];

    // // Verify the token using the secret key
    // let decodedToken;
    // try {
    //   decodedToken = jwt.verify(accessToken, SECRET_KEY);
    // } catch (err) {
    //   return res.status(403).json({ error: "Invalid token" });
    // }

    const uid = "messengergptvector"; // Assuming the UID is stored in the token payload

    // Get Response
    // let response = await getResponse(uid, req.body.userQuestion);
    let response = await processQuery(
      uid,
      req.body.userQuestion,

      req.body.secondLastMsg,
      req.body.thirdLastMsg,
      req.body.fourthLastMsg
    );
    // let response = "hello world " + req.body.userQuestion;
    res.json({ response: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

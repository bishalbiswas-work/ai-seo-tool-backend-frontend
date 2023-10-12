const { getImageFromUnsplash } = require("./OtherApi");

const axios = require("axios");
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});
const OPENAI_API_KEY = "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"; // Replace with your actual API key

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//======================================================================
//             Start Get Blog From OpenAI
//======================================================================

async function writeBlog(content, wordLimit) {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };
  const prompt = `  Write a blog on the topic of "${content}" that's approximately ${wordLimit} words. The blog should be structured with the following format:

    <title>Title specific to the topic</title>

    <intro>Introductory paragraph providing a brief overview of "${content}".</intro>

    <ptitle>First main point related to "${content}"</ptitle>
    <pbody>Several sentences elaborating on the first main point. Provide examples, details, and relevant information.</pbody>

    <ptitle>Second main point related to "${content}"</ptitle>
    <pbody>Several sentences elaborating on the second main point. Offer a deep dive, comparisons, or relevant anecdotes.</pbody>

    <ptitle>Third main point related to "${content}"</ptitle>
    <pbody>Several sentences discussing the third main point. Explain its importance, implications, or any controversies around it.</pbody>

    ... (You can continue this pattern for more paragraphs)

    <ctitle>Concluding Thoughts on "${content}"</ctitle>
    <cbody>A wrap-up paragraph summarizing the main points discussed, offering a final perspective, and possibly suggesting further reading or actions on the topic.</cbody>
    `;
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. And do content writing",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  };
  try {
    const response = await axios.post(endpoint, data, { headers: headers });
    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error("No content returned from OpenAI");
    }
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    throw error;
  }
}
//======================================================================
//             End Get Blog From OpenAI
//======================================================================

//======================================================================
//             Start Blog Blob To Json
//======================================================================

function convertBlobToJSONBlog(textBlob) {
  let jsonOutput = {};

  // Extracting title
  const titleMatch = textBlob.match(/<title>(.*?)<\/title>/);
  if (titleMatch && titleMatch[1]) {
    jsonOutput.title = titleMatch[1];
  }

  // Extracting intro
  const introMatch = textBlob.match(/<intro>(.*?)<\/intro>/);
  if (introMatch && introMatch[1]) {
    jsonOutput.intro = introMatch[1];
  }

  // Extracting paragraphs
  const paragraphMatches = [
    ...textBlob.matchAll(/<ptitle>(.*?)<\/ptitle>\s*<pbody>(.*?)<\/pbody>/g),
  ];
  let paragraphs = [];
  for (const match of paragraphMatches) {
    paragraphs.push({
      title: match[1],
      body: match[2],
    });
  }
  if (paragraphs.length > 0) {
    jsonOutput.paragraphs = paragraphs;
  }

  // Extracting conclusion
  const conclusionTitleMatch = textBlob.match(/<ctitle>(.*?)<\/ctitle>/);
  const conclusionBodyMatch = textBlob.match(/<cbody>(.*?)<\/cbody>/);
  if (
    conclusionTitleMatch &&
    conclusionTitleMatch[1] &&
    conclusionBodyMatch &&
    conclusionBodyMatch[1]
  ) {
    jsonOutput.conclusion = {
      title: conclusionTitleMatch[1],
      body: conclusionBodyMatch[1],
    };
  }

  return jsonOutput;
}
//======================================================================
//             End Blog Blob To Json
//======================================================================

//======================================================================
//             Start Get Blog From OpenAI
//======================================================================

async function writeTitleAndImageKeyword(content, count) {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };
  //   const prompt = `
  //     For a business with the description "${content}", generate top ${count} number of titles that are 4-10 words in length, high intent, and contain highly searchable SEO keywords. Each title should be directly wrapped in <title></title> tags. For each title, provide 2-3 stock image keywords that would best represent the topic of the blog. These should be wrapped in <imageKeyword></imageKeyword> tags. Do not include any additional tags or descriptive text in your response. The keywords should reflect what a customer of the business would actively search for.
  //     `;
  //   const prompt = `
  //    For a business with the description "${content}", generate top ${count} titles that are 4-10 words in length, high intent, and contain highly searchable SEO keywords. Each title should be wrapped in <title></title> tags.

  //    For each title, provide 2-3 stock image keywords. Each keyword should be individually wrapped in its own <imageKeyword></imageKeyword> tag and represent the topic of the blog.

  //    Ensure that there's no comma-separation; instead, each keyword should be distinctly wrapped. Do not include any additional tags or descriptive text in your response. The keywords should represent what a customer of the business would actively search for.
  // `;
  //   const prompt = `
  //    For a business with the description "${content}", generate top ${count} titles that are 4-10 words in length, high intent, and contain highly searchable SEO keywords. Each title should be wrapped in <title></title> tags.

  //    For each title, provide 2-3 stock image keywords and 2-3 SEO keywords. Each image keyword should be individually wrapped in its own <imageKeyword></imageKeyword> tag, and each SEO keyword should be wrapped in its own <keyword></keyword> tag. These keywords should represent the topic of the blog.

  //    Ensure that there's no comma-separation; instead, each keyword should be distinctly wrapped. Do not include any additional tags or descriptive text in your response. The keywords should represent what a customer of the business would actively search for.
  // `;

  //   const prompt = `
  //   For a business with the description "${content}", generate top ${count} titles that are 4-10 words in length, high intent, and contain highly searchable SEO keywords. Each title should be wrapped in <title></title> tags.

  // For each title, provide 2-3 stock image keywords and 2-3 SEO keywords. Each image keyword should be individually wrapped in its own <imageKeyword></imageKeyword> tag, and each SEO keyword should be wrapped in its own <SEOkeyword></SEOkeyword> tag. These keywords should represent the topic of the blog.

  // Ensure that there's no comma-separation; instead, each keyword should be distinctly wrapped. Do not include any additional tags or descriptive text in your response. The keywords should represent what a customer of the business would actively search for.
  // `;
  //   const prompt = `
  //     For a business described as "${content}", generate the top ${count} titles that are between 4 to 10 words long, with high intent, and embed relevant SEO keywords. Each title should be enclosed within <title></title> tags.

  // For every title, produce 2-3 individual stock image keywords and 2-3 SEO keywords. Each image keyword should be individually surrounded by <imageKeyword></imageKeyword> tags, and each SEO keyword should be encompassed by <SEOkeyword></SEOkeyword> tags. These keywords should aptly represent the subject matter of the blog.

  // Ensure that keywords are not separated by commas. Instead, each keyword should be uniquely wrapped in its respective tag. Abstain from integrating any other tags or additional descriptions in your response. Ideally, the keywords should represent the search queries a potential customer might use in relation to the business.

  //   `;
  const prompt = `
  For a business described as "${content}", generate the top ${count} titles that are between 4 to 10 words long. Each title should focus on high intent and be enclosed within <title></title> tags without any embedded keywords.

For every title, produce 2-3 individual stock image keywords and 2-3 SEO keywords. Each image keyword should be individually surrounded by <imageKeyword></imageKeyword> tags, and each SEO keyword should be encompassed by <SEOkeyword></SEOkeyword> tags. These keywords should aptly represent the subject matter of the blog.

Ensure that keywords are not separated by commas. Instead, each keyword should be uniquely wrapped in its respective tag. Abstain from integrating any other tags or additional descriptions in your response. Ideally, the keywords should represent the search queries a potential customer might use in relation to the business.


  `;

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. And do content writing",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  };
  try {
    const response = await axios.post(endpoint, data, { headers: headers });
    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error("No content returned from OpenAI");
    }
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    throw error;
  }
}
//======================================================================
//             End Get Blog From OpenAI
//======================================================================
//======================================================================
//             Start Title And Image Blob To Json
//======================================================================

// function convertBlobToJSONMain(textBlob) {
//   const titles = [...textBlob.matchAll(/<title>(.*?)<\/title>/g)].map(
//     (match) => match[1]
//   );
//   const imageKeywords = [
//     ...textBlob.matchAll(/<imageKeyword>(.*?)<\/imageKeyword>/g),
//   ].map((match) => match[1]);

//   const structuredData = titles.map((title, index) => {
//     return {
//       title: title,
//       imageKeywords: [imageKeywords[index * 2], imageKeywords[index * 2 + 1]],
//     };
//   });

//   return structuredData;
// }
function convertBlobToJSONMain(textBlob) {
  const titles = [...textBlob.matchAll(/<title>(.*?)<\/title>/g)].map(
    (match) => match[1]
  );
  const imageKeywords = [
    ...textBlob.matchAll(/<imageKeyword>(.*?)<\/imageKeyword>/g),
  ].map((match) => match[1]);

  const seoKeywords = [
    ...textBlob.matchAll(/<SEOkeyword>(.*?)<\/SEOkeyword>/g),
  ].map((match) => match[1]);

  const structuredData = titles.map((title, index) => {
    return {
      title: title,
      imageKeywords: [imageKeywords[index * 2], imageKeywords[index * 2 + 1]],
      seoKeywords: [seoKeywords[index * 2], seoKeywords[index * 2 + 1]],
    };
  });

  return structuredData;
}

//======================================================================
//             Start Title And Image Blob To Json
//======================================================================

// (async () => {
//   const topics = await writeTitleAndImageKeyword("a very good dog", "3");
//   console.log(topics);
//   const ImageKeywords = convertBlobToJSONMain(topics);
//   console.log(ImageKeywords);

//   //   const output = await writeBlog("a very good dog", "2500");
//   //   console.log(output);
//   //   const blogJson = convertBlobToJSONBlog(output);
//   //   console.log(blogJson);
// })();

// async function generateBlogs(contentObject, topicCount, wordLimit) {
//   let blogs = [];

//   let topicsRaw = await writeTitleAndImageKeyword(
//     contentObject,
//     `${topicCount}`
//   );
//   let topics = convertBlobToJSONMain(topicsRaw);

//   for (let i = 0; i < topics.length; i++) {
//     console.log("Title:", topics[i].title);
//     console.log("Image Keywords:", topics[i].imageKeywords.join(", "));

//     let blogRaw = await writeBlog(topics[i].title, `${wordLimit}`);
//     let blog = convertBlobToJSONBlog(blogRaw);
//     let imagesUrl = [];
//     for (let ix = 0; ix < topics[i].imageKeywords.length; ix++) {
//       let imageUrl = await getImageFromUnsplash(topics[i].imageKeywords[ix]);
//       imagesUrl.push({ imageUrl });
//       delay(500);
//       // console.log("Image keywoard", topics[i].imageKeywords[ix]);
//     }

//     blogs.push({
//       title: topics[i].title,
//       imageKeywords: topics[i].imageKeywords,
//       imagesUrl: imagesUrl,
//       content: blog,
//     });
//     delay(1000);
//   }

//   return blogs;
// }
async function generateBlogs(contentObject, topicCount, wordLimit) {
  let blogs = [];

  let topicsRaw = await writeTitleAndImageKeyword(contentObject, topicCount);
  console.log(topicsRaw);
  let topics = convertBlobToJSONMain(topicsRaw);

  // Helper function to ensure content meets criteria
  async function ensureContent(title, retryCount = 0) {
    if (retryCount > 3) {
      // Limit retries to avoid infinite loops
      throw new Error(
        "Failed to generate desired content after multiple attempts"
      );
    }

    let blogRaw = await writeBlog(title, `${wordLimit}`);
    let blog = convertBlobToJSONBlog(blogRaw);

    // Check if content contains all required sections
    if (blog.title && blog.intro && blog.paragraphs && blog.conclusion) {
      return blog;
    } else {
      await delay(1000); // Wait for a second before retrying
      return await ensureContent(title, retryCount + 1); // Retry
    }
  }

  for (let i = 0; i < topics.length; i++) {
    console.log("Title:", topics[i].title);
    console.log("Image Keywords:", topics[i].imageKeywords.join(", "));

    let blog = await ensureContent(topics[i].title);

    let imagesUrl = [];
    for (let ix = 0; ix < topics[i].imageKeywords.length; ix++) {
      let imageUrl = await getImageFromUnsplash(topics[i].imageKeywords[ix]);
      imagesUrl.push({ imageUrl });
      await delay(150); // Assuming delay() returns a promise
    }

    blogs.push({
      title: topics[i].title,
      seoKeywords: topics[i].seoKeywords,
      imageKeywords: topics[i].imageKeywords,
      imagesUrl: imagesUrl,
      content: blog,
    });
    await delay(150);
  }

  return blogs;
}

// (async () => {
//   // const blogs = await generateBlogs("a good dog", 3, 500);
//   // console.log(blogs);
//   const blob = await writeTitleAndImageKeyword("a good dog", 3);
//   const data = convertBlobToJSONMain(blob);
//   console.log(data);
// })();
module.exports = {
  writeBlog,
  convertBlobToJSONBlog,
  writeTitleAndImageKeyword,
  convertBlobToJSONMain,
  generateBlogs,
};

const axios = require("axios");
// import OpenAI from "openai";

const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});
const OPENAI_API_KEY = "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"; // Replace with your actual API key
const PINECONE_API_KEY = "ae6d35a4-4f54-4636-b409-aae56122f363";
const PINECONE_ENVIRONMENT = "asia-northeast1-gcp";

const Pinecone = require("@pinecone-database/pinecone").Pinecone;

const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
  environment: PINECONE_ENVIRONMENT,
});

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function contentSummarize(content) {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const data = {
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. And do summarization",
      },
      {
        role: "user",
        content: `Given this content, from this  paragraph, write a summary of 1000 words.: ${content}`,
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

async function writeTitles(content, titleConunt, keywordLength) {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const data = {
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. And do content writing",
      },
      {
        role: "user",
        content: `Write top ${titleConunt} list of ${keywordLength} words high intent, high searchable SEO keywords for business with the following description: """${content}""" :to tackle followed by high catchy and converting SEO optimized blog title. Each list should contain keywords. The keywords should be what the customer of the business would be actively searching about.: ${content}`,
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

async function writeImagesKeywords(titleConunt, keywordLength) {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const data = {
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. And do content writing",
      },
      {
        role: "user",
        content: `Recommended stock image ${keywordLength} keyword to use to get best image for each title ${titleConunt} `,
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

async function writeContent(titles, wordLimit) {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const data = {
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. And do content writing",
      },
      {
        role: "user",
        content: `Write the best ${wordLimit} word blog about ${titles}  with key takeaways in the beginning followed by table of contents with little bit of humor added to it. Next in the blog, write a concise FAQ. At the end, link to credible sources that’s written about this blog topic. Lastly, make sure the main keywords of the blog are bolded`,
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
module.exports = {
  contentSummarize,
  writeTitles,
  writeContent,
  writeImagesKeywords,
};

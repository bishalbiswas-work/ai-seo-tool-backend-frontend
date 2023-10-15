const puppeteer = require("puppeteer");
const urlModule = require("url");
const fs = require("fs");
const axios = require("axios");
const url = require("url");

const URL_FILE_NAME = "urls.txt";
const CONTENT_FILE_NAME = "content.txt";

let CONCURRENCY = 5;

let TARGET_URL = "https://www.betimeful.com"; // Replace with your URL
const FILE_NAME = "scraped_urls.txt";
let browser;

async function getBrowserInstance() {
  if (!browser) {
    browser = await puppeteer.launch({
      //   headless: false,
      executablePath: "/usr/bin/google-chrome-stable",
      //   args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
  return browser;
}
getBrowserInstance();

async function getContentv2(url) {
  const browser = await getBrowserInstance();

  const page = await browser.newPage();

  // Block images and other unnecessary assets to speed up load time
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (
      ["image", "stylesheet", "font", "media"].includes(request.resourceType())
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });

  await page.goto(url, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll("a"));
    const links = anchors.map((a) => a.href);
    const textContent = document.body.innerText;
    return { links, textContent };
  });

  await page.close();
  //   await browser.close();

  return {
    url,
    content: `URL: ${url}\nContent:\n${data.textContent.trim()}\n`,
  };
}
// ====================================================================
async function fetchContentAndFavicon(url) {
  const browser = await getBrowserInstance();
  const page = await browser.newPage();

  // Block images and other unnecessary assets to speed up load time
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (
      ["image", "stylesheet", "font", "media"].includes(request.resourceType())
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });

  await page.goto(url, { waitUntil: "networkidle2" });

  const result = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll("a"));
    const links = anchors.map((a) => a.href);
    const textContent = document.body.innerText;

    let favicon;
    try {
      favicon = document.querySelector(
        'head > link[rel="icon"], head > link[rel="shortcut icon"]'
      ).href;
    } catch (e) {
      favicon = "No favicon found!";
    }

    return {
      links,
      textContent,
      favicon,
    };
  });

  await page.close();

  return {
    url,
    content: `URL: ${url}\nContent:\n${result.textContent.trim()}\n`,
    favicon: result.favicon,
  };
}

module.exports = {
  getContentv2,
  fetchContentAndFavicon,
};

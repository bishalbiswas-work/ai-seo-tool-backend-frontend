const axios = require("axios");
const ACCESS_KEY = "HGmM-UvA_NQ-9tOe8K192Pd5fvW_EwHLmsxB-dRWoH4";

async function getImageFromUnsplash(keyword) {
  const endpoint = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=1`;

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    // Ensure there are results and return the first image URL
    if (
      response.data &&
      response.data.results &&
      response.data.results.length > 0
    ) {
      return response.data.results[0].urls.full; // or `.small` or `.regular` for different sizes
    } else {
      return null; // No images found for the given keyword
    }
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error.message);
    return null;
  }
}

// // Example usage:
// getImageFromUnsplash("mountain").then((imageUrl) => {
//   if (imageUrl) {
//     console.log("Image URL:", imageUrl);
//   } else {
//     console.log("No images found.");
//   }
// });
module.exports = {
  getImageFromUnsplash,
};

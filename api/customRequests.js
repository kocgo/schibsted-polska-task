const axios = require("axios");
const { query } = require("express");

const queryGiphy = async (searchTerm, limit = 100, offset = 0) => {
  return new Promise(async (resolve, reject) => {
    // Get All Results (as objects)
    let giphyResults = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: process.env.GIPHY_API_KEY,
        q: searchTerm,
        limit: limit,
        offset: offset,
        rating: "g",
        lang: "en",
      },
    });

    // Get only the links of the objects
    let linksOnly = giphyResults.data.data.map(
      (gifObject) => gifObject.images.fixed_height_still.url
    );

    resolve(linksOnly);
  });
};

module.exports = {
  queryGiphy,
};

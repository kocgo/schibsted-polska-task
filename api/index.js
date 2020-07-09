const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
dotenv.config();

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

app.get("/search-images", async (req, res) => {
  let resultsFromGiphy = await queryGiphy("cat");

  return res.json(resultsFromGiphy);
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});

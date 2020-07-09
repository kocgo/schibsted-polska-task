const axios = require("axios");

const queryGiphy = async (searchTerm, key, limit = 20, offset = 0) => {
  return new Promise(async (resolve, reject) => {
    // Get All Results (as objects)
    let giphyResults = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: key,
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

const queryPixabay = async (searchTerm, key, limit = 20, offset = 0) => {
  return new Promise(async (resolve, reject) => {
    // Get All Results (as objects)
    let pixabayResults = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: key,
        q: searchTerm,
        per_page: limit,
        page: offset / limit + 1,
        rating: "g",
        lang: "en",
      },
    });

    // Get only the links of the objects
    let linksOnly = pixabayResults.data.hits.map(
      (imageObject) => imageObject.webformatURL
    );

    resolve(linksOnly);
  });
};

module.exports = {
  queryGiphy,
  queryPixabay,
};

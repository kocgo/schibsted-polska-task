const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
dotenv.config();

const { queryGiphy } = require("./customRequests");

app.get("/search-images", async (req, res) => {
  let resultsFromGiphy = await queryGiphy("cat");

  return res.json(resultsFromGiphy);
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});

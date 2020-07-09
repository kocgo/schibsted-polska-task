const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const dotenv = require("dotenv");
dotenv.config();

const { queryGiphy, queryPixabay } = require("./customRequests");

// All Origins Allowed
app.use(cors());

app.get("/search-images", async (req, res) => {
  let { searchTerm, limit, offset } = req.query;

  if (!searchTerm) return res.send("Please provide a search term.");

  let resultsFromGiphy = await queryGiphy(
    searchTerm,
    process.env.GIPHY_API_KEY
  );

  let resultsFromPixabay = await queryPixabay(
    searchTerm,
    process.env.PIXABAY_API_KEY
  );

  // Return concat results
  return res.json([...resultsFromPixabay, ...resultsFromGiphy]);
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});

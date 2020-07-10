const express = require("express");
const app = express();
const cors = require("cors");
const port = 6666;
const dotenv = require("dotenv");
dotenv.config();

const { queryGiphy, queryPixabay } = require("./customRequests");

// All Origins Allowed
app.use(cors());
app.options("*", cors());

app.get("/schibstedtask/searchImages", async (req, res) => {
  console.log("recieved request");
  let { searchTerm, offset, limit } = req.query;
  console.log("search term: ", searchTerm);
  if (!searchTerm) return res.send("Please provide a search term.");

  let allResultsCombined = await Promise.all([
    queryGiphy(searchTerm, process.env.GIPHY_API_KEY, offset),
    queryPixabay(searchTerm, process.env.PIXABAY_API_KEY, offset),
  ]);
  // Return concat results
  return res.json([].concat(...allResultsCombined));
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});

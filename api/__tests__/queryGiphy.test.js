const { queryGiphy } = require("../customRequests");
const dotenv = require("dotenv");
dotenv.config();

// A simple example test
describe("Making image search with Giphy API", () => {
  it("should return any data", () => {
    return queryGiphy("cat", process.env.GIPHY_API_KEY).then((data) => {
      expect(data).toBeDefined();
      expect(data.length).toBeGreaterThan(0);
    });
  });
});

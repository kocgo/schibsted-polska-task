const { queryPixabay } = require("../customRequests");
const dotenv = require("dotenv");
dotenv.config();

// A simple example test
describe("Making image search with Pixabay API", () => {
  it("should return any data", () => {
    return queryPixabay("cat", process.env.PIXABAY_API_KEY).then((data) => {
      expect(data).toBeDefined();
      expect(data.length).toBeGreaterThan(0);
    });
  });
});

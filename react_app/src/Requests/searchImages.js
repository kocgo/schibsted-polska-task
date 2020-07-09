import Axios from "axios";
import { api_url } from "./api_url";

export const searchImages = (searchTerm) => {
  return new Promise(async (resolve, reject) => {
    let results = await Axios.get(
      `http://${api_url}/search-images?searchTerm=${searchTerm}`
    );
    console.log(results);
    resolve(results);
  });
};

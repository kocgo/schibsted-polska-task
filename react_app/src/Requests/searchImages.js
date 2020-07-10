import Axios from "axios";
import { api_url } from "./api_url";

export const searchImages = (searchTerm, offset) => {
  return new Promise(async (resolve, reject) => {
    let results = await Axios.get(`${api_url}/search-images`, {
      params: {
        searchTerm: searchTerm,
        offset: offset,
      },
    });
    console.log(results.data);
    resolve(results.data);
  });
};

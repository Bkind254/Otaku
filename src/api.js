import axios from "axios";
import { apiKey, apiUrl } from "./../config.js";

const fetchFromAPI = axios.create({
  baseURL: apiUrl,
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "anime-db.p.rapidapi.com",
  },
});

export const fetchAnime = (searchQuery) => {
  const params = {
    page: "1",
    size: "1",
    search: searchQuery,
  };
  return fetchFromAPI.get("/anime", { params });
};

export default fetchFromAPI;

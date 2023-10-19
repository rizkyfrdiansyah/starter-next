import axios from "axios";

const apiKey = "4e1b1ffc3c8009bd343474c579a3f359";
const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

export default apiAxios;

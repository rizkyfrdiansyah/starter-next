import axios from "axios";

const apiKey = "4e1b1ffc3c8009bd343474c579a3f359";
const baseUrl = "https://api.themoviedb.org/3";

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

export default apiAxios;

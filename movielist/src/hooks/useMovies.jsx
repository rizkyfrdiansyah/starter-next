import { useState, useEffect } from "react";
import axios from "@/lib/api";

const useGetMovies = () => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/discover/movie")
      .then((res) => setDataMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return dataMovies;
};

export { useGetMovies };

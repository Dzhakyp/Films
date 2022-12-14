import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../component/movies";
import Loadmore from "../../component/Loadmore";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const moviesApi = `https://api.themoviedb.org/3/trending/all/day?api_key=cd0424926ff3c009921c9fa2e813a15c&page=${page}`;
    axios(moviesApi).then((resp) => {
      const data = resp.data.results;
      setMovies(() => {
        return [...movies, ...data];
      });
    });
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <Movies movies={movies} />
      <Loadmore onClick={handleLoadMore} />
    </>
  );
}

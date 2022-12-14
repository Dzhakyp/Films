import axios from "axios";
import React, { useState, useLayoutEffect } from "react";
import Movies from "../../component/movies";
import Loadmore from "../../component/Loadmore";

import SearchBar from "../../component/SearchBar";
export default function MoviePage() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    const apiMovie = `
    https://api.themoviedb.org/3/search/movie?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US&page=${page}&include_adult=false&query=${query}`;

    const fetchData = async () => {
      try {
        await axios(apiMovie).then((resp) => {
          const data = resp.data.results;
          setFilms(() => {
            return [...films, ...data];
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = (data) => {
    setQuery(data);
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} data={query} />
      <Movies movies={films} />
      <Loadmore onClick={handleLoadMore} />
    </>
  );
}

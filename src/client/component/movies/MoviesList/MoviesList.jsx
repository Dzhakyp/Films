import React from "react";
import MoviesItem from "../MoviesItem";

export default function MoviesList({ movies }) {
  const newMovies = movies.map((item) => (
    <MoviesItem key={item.id} {...item} />
  ));
  return (
    <div className="container">
      <ul className="movie__list">{newMovies}</ul>;
    </div>
  );
}

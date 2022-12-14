import React from "react";
import { NavLink } from "react-router-dom";

export default function MoviesItem({
  title,
  name,
  poster_path,
  backdrop_path,
  id,
}) {
  return (
    <>
      <li className="movie__item">
        <NavLink to={`/movie/${id}/`}>
          <img
            className="movie__img"
            src={`https://image.tmdb.org/t/p/w500${
              poster_path || backdrop_path
            }`}
            alt=""
          />
          <h1 className="movie__title">{title || name}</h1>
        </NavLink>
      </li>
    </>
  );
}

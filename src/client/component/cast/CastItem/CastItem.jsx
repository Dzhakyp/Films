import React from "react";

export default function CastItem({ name, profile_path }) {
  return (
    <>
      <li className="cast__item">
        <img
          className="cast__img"
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt=""
        />
        <p>{name}</p>
      </li>
    </>
  );
}

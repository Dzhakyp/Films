import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Route, Routes, Link, useNavigate } from "react-router-dom";
import Cast from "../../component/cast";
import BtnFavorites from "../../component/BtnFavorites";

export default function SingleMoviePage() {
  const [movie, setMovie] = useState({});
  const [favorite, setFavorite] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const movieApi = `
    https://api.themoviedb.org/3/movie/${id}?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`;
    axios(movieApi).then((resp) => {
      setMovie(resp.data);
    });
  });

  const handleAddMovie = () => {
    localStorage.setItem("films", JSON.stringify(movie));
  };

  const goback = () => navigate(-1);

  return (
    <>
      <div className="container">
        <button
          onClick={goback}
          style={{
            marginBottom: "-80px",
            color: "black",
            fontFamily: "sans-serif",
            marginTop: "20px",
            backgroundColor: "#fff",
            padding: "3px 10px ",
            border: "0",
            borderRadius: "10px 80px 10px 60px ",
          }}
        >
          Back Home
        </button>
      </div>

      {movie && (
        <div className="container">
          <div className="single">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                movie.poster_path || movie.backdrop_path
              }`}
              alt=""
            />
            <div className="single__wrapper">
              <h1 className="single__title">{movie.title}</h1>
              <p className="single__text">{movie.overview}</p>
              <p className="single__text">
                Popularity: {Math.round(movie.popularity)}
              </p>
              <p className="single__text">
                Vote average: {Math.round(movie.vote_average)}
              </p>
              <p className="single__text">Data: {movie.release_date}</p>
              <ul className="addition">
                <li>
                  <Link className="addition__title" to={"cast"}>
                    Cast
                  </Link>
                </li>
                <li>
                  <BtnFavorites onClick={handleAddMovie} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="cast" element={<Cast id={id} />} />
      </Routes>
    </>
  );
}

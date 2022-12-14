import { Route, Routes } from "react-router-dom";
import { useContext, createContext } from "react";
import Navbar from "./client/component/navbar";
import HomePage from "./client/Pages/HomePage";
import MoviePage from "./client/Pages/MoviePage";
import SingleMoviePage from "./client/Pages/SingleMoviePage";
import FavoritesPage from "./client/Pages/FavoritesPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id/*" element={<SingleMoviePage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
// import styles from "./BtnFavorites.module.scss";

export default function BtnFavorites({ onClick }) {
  return (
    <button onClick={onClick} className="">
      Add to favorites
    </button>
  );
}

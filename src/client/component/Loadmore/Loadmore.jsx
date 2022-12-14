import React from "react";

export default function Loadmore({ onClick }) {
  return (
    <>
      <div className="container">
        <button onClick={onClick} className="load__btn">
          Load More
        </button>
      </div>
    </>
  );
}

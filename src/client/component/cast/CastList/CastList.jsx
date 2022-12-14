import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import CastItem from "../CastItem";

export default function CastList({ id }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`
    ).then((resp) => {
      console.log(resp);
      const data = resp.data.cast;
      setCast(data);
    });
  }, []);

  const cast_item = cast.map((item) => {
    return <CastItem key={item.id} {...item} />;
  });
  return (
    <>
      <div className="container">
        <ul className="cast__list">{cast_item}</ul>
      </div>
    </>
  );
}

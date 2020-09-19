import React from "react";
import "./Films.css";

export const Films = ({ films }) => {
  return (
    <div className="films">
      {films.map((film) => (
        <div
          className="eachFilm"
          style={{ backgroundImage: `url(${film.Image})` }}
        ></div>
      ))}
    </div>
  );
};

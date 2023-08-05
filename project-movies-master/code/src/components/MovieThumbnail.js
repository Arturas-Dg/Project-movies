import React from "react";
import { MovieList } from "./MovieList";

export const MovieThumbnail = ({ overview, title, vote_average }) => {
  return (
    <section className="movie-thumbnail">
      <div>{title}</div>
      <div>{vote_average}</div>
    </section>
  );
};

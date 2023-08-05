import React from "react";

export const MovieThumbnail = (overview, vote_average, title) => {
  return (
    <section className="movie-thumb">
      <h1>{title}</h1>
      <div>{overview}</div>
      <div>{vote_average}</div>
    </section>
  );
};

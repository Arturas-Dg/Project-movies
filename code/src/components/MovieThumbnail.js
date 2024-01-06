import React from "react";

export const MovieThumbnail = ({ title, vote_average }) => {
  return (
    <section className="movie-thumbnail">
      <div className="thumbnail-title">{title}</div>
      <div className="thumbnail-rating">Rating: {vote_average}/10</div>
    </section>
  );
};

import React from "react";

export const MovieThumbnail = ({ title, vote_average, release_date }) => {
  return (
    <section className="movie-thumbnail">
      <div className="thumbnail-title">{title}</div>
      <div className="thumbnail-rating">Rating: {vote_average}/10</div>
      <div className="release-date">Released in {release_date}</div>
    </section>
  );
};

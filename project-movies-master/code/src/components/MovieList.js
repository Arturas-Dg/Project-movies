import React, { useEffect, useState } from "react";

import { MovieThumbnail } from "./MovieThumbnail";

export const MovieList = () => {
  const MOVIE_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9864558546d876a6012b8c0ebbc01d17&language=en-US&page=1";

  const IMAGE_URL =
    "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg";

  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((json) => SetMovies(json.results));
  }, []);

  return (
    <section className="popular-movie-list">
      {movies.map((movie) => (
        <>
          <img
            className="movie-image"
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
          <MovieThumbnail {...movie} />
        </>
      ))}
    </section>
  );
};

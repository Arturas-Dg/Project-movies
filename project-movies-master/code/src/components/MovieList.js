import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { MovieThumbnail } from "./MovieThumbnail";

export const MovieList = () => {
  const MOVIE_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9864558546d876a6012b8c0ebbc01d17&language=en-US&page=1";

  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((json) => SetMovies(json.results));
  }, []);

  return (
    <section className="popular-movie-list">
      {movies.map((movie) => (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
          className="popular-movie-single">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
          <MovieThumbnail {...movie} />
        </Link>
      ))}
    </section>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const MovieDetail = () => {
  const { slug } = useParams();
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${slug}}?api_key=9864558546d876a6012b8c0ebbc01d17&language=en-US&page=1`;
  const [detail, setDetail] = useState();

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((data) => setDetail(data)),
      [];
  }, []);

  if (detail === undefined) {
    return <></>;
  }

  return (
    <div className="details-page">
      <img
        className="background-image-details"
        src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}></img>
      <div className="details-informaion">
        <img
          className="display-image-details"
          src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}></img>
        <div className="detail-title">{detail.title}</div>
        {console.log(MOVIE_URL)}
        <div className="film-description-details">{detail.overview}</div>
      </div>
    </div>
  );
};

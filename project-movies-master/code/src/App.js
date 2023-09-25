import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MovieList } from "./components/MovieList";
import { MovieDetail } from "pages/MovieDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:slug" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
  return;
};

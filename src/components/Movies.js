import React from "react";
import { movies } from "../data";

function Movies() {
  const eachMovie = movies.map((movie, index) => (
    <div key={index}>
      <h4>Title: {movie.title}</h4>
      <h6>Time: {movie.time} minutes</h6>
      <ul>{(movie.genres).map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}</ul>
    </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {eachMovie}
  </div>;
}

export default Movies;
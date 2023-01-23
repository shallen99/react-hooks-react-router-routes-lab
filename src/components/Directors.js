import React from "react";
import { directors } from "../data";

function Directors() {
  const eachDirector = directors.map((director, index) => (
    <div key={index}>
      <h4>Name: {director.name}</h4>
      <ul>{(director.movies).map((movie, index) => (
          <li  key={index}>{movie}</li>
        ))}</ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {eachDirector}
  </div>;
}

export default Directors;
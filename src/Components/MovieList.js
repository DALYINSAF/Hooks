import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {movies.map((film,i) => (
        <MovieCard film={film}  key={i}/>
      ))}
    </div>
  );
};

export default MovieList;
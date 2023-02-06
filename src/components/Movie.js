import React from "react";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  return (
    <div>
      (
      <div key={movie.id}>
        <img src={movie.medium_cover_image} />
        <h2>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h2>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
      )
    </div>
  );
};

export default Movie;

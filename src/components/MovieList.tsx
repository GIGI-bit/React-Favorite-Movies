/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Props {
  movies: any[];
  onAddFavorite: (movie: any) => void;
}

const MovieList: React.FC<Props> = ({ movies, onAddFavorite }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
          <button onClick={() => onAddFavorite(movie)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

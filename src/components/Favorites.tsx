import React from "react";

interface Props {
  favorites: any[];
  onRemoveFavorite: (id: string) => void;
}

const Favorites: React.FC<Props> = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
          <button onClick={() => onRemoveFavorite(movie.imdbID)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;

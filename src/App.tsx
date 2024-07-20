// src/App.tsx
import React, { useState } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";

const App: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  const handleSearch = (searchResults: any[]) => {
    setMovies(searchResults);
  };

  const handleAddFavorite = (movie: any) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const handleRemoveFavorite = (id: string) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <MovieList movies={movies} onAddFavorite={handleAddFavorite} />
      <Favorites
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
      />
    </div>
  );
};

export default App;

"use client";

import { useState } from "react";
import MovieList from "../MovieList/MovieList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./moviesection.module.css";

const filterMovies = (movies, value) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(value.toLowerCase())
  );
};

const MovieSection = ({ entries }) => {
  const [movies, setMovies] = useState(entries);
  const [value, setValue] = useState("");

  const handleSearch = (value) => {
    setValue(value);
    const filteredMovies = filterMovies(entries, value);
    setMovies(filteredMovies)
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <SearchBox value={value} onSearch={handleSearch} />
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieSection;

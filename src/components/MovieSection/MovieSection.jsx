"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    return router?.push("/movies/login");
  }

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

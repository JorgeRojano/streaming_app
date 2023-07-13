"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./movielist.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <div key={movie.title} className={styles.movie}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={movie.images["Poster Art"].url}
              alt=""
            />
          </div>
          <div className={styles.title}>{movie.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

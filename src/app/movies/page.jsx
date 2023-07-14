import MovieSection from "@/components/MovieSection/MovieSection";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://assets-aivo.s3.amazonaws.com/movies.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Movies = async () => {
  const data = await getData();
  const { entries } = data;

  return (
    <MovieSection entries={entries} />
  );
};

export default Movies;

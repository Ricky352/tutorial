import { MovieCard } from "../components/MovieCard";

export default function Home() {
  return (
    <>
      <MovieCard
        title="Lord of the Rings"
        duration="179 MIN"
        genre="Fantasy"
        src="/lotr.jpeg"
      />
    </>
  );
}

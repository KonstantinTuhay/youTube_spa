import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";
import ShowMovie from "../ShowMovie";

const ListMovies = () => {
  const text = useSelector((state) => state.getSlice);

  const { data: movies, error, isLoading } = useGetMoviesQuery(text);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(movies);

  return (
    <div>
      <h5>Видео по запросу {`"${text}"`}</h5>

      {/* {(movies.length === 0 || undefined) && ""} */}
      {movies.map((movie) => {
        return <ShowMovie key={movie.id.videoId} movie={movie} />;
      })}
    </div>
  );
};

export default ListMovies;

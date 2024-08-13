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
    <>
      <div>
        {/* {(movies.length === 0 || undefined) && ""} */}
        {movies.map((movie) => {
          <ShowMovie key={movie.id.videoId} movie={movie} />;
          // <p key={movie.id.videoId}>{movie.snippet.title}</p>;
        })}
      </div>
    </>
  );
};

export default ListMovies;

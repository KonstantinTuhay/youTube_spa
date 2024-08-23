import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";
import ShowMovie from "../ShowMovie";
import CircularProgress from "@mui/material/CircularProgress";
import SearchSystem from "../SearchSystem";
import styles from "./index.module.css";

const ListMovies = () => {
  const text = useSelector((state) => state.getSlice);

  const { data: movies, error, isLoading } = useGetMoviesQuery(text);
  console.log(movies);

  if (isLoading) {
    return (
      <p>
        {" "}
        <CircularProgress color="inherit" />
      </p>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className={styles.content}>
        <SearchSystem />

        <h5>Video on demand {`"${text}"`}</h5>

        <div className={styles.allMovies}>
          {movies.map((movie) => {
            return <ShowMovie key={movie.id.videoId} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ListMovies;

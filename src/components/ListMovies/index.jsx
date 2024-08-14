import { useRef } from "react";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enterText } from "../../redux/slices/textSlice";
import ShowMovie from "../ShowMovie";
import styles from "./index.module.css";

const ListMovies = () => {
  const dispatch = useDispatch();

  const focusOnInput = useRef(null);

  const navigate = useNavigate();

  const text = useSelector((state) => state.getSlice);

  const { data: movies, error, isLoading } = useGetMoviesQuery(text);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(movies);

  const findMovies = () => {
    navigate("/list");
  };

  return (
    <div>
      <h3>Search video</h3>

      <input
        type="text"
        ref={focusOnInput}
        onChange={(event) => dispatch(enterText(event.target.value))}
      />
      <button onClick={findMovies}>Search</button>

      <h5>Video on demand {`"${text}"`}</h5>

      <div className={styles.allMovies}>
        {movies.map((movie) => {
          return <ShowMovie key={movie.id.videoId} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default ListMovies;

import { useRef } from "react";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enterText } from "../../redux/slices/textSlice";
import { change } from "../../redux/slices/changesColors";
import { HeartOutlined } from "@ant-design/icons";
import { addFavoriteMovie } from "../../redux/slices/addFavorites";
import ShowMovie from "../ShowMovie";
import styles from "./index.module.css";

const ListMovies = () => {
  const color = useSelector((state) => state.changesColors);

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

  const style = {
    color: color,
  };

  const changeColor = () => {
    dispatch(change(style.color));
    dispatch(addFavoriteMovie(text));
  };

  return (
    <div>
      <h3>Search video</h3>

      <div className={styles.searchSystem}>
        <input
          type="text"
          ref={focusOnInput}
          value={text}
          onChange={(event) => dispatch(enterText(event.target.value))}
        />
        <div className={styles.heart}>
          <HeartOutlined onClick={changeColor} style={style} />
        </div>
        <button onClick={findMovies}>Search</button>
      </div>

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

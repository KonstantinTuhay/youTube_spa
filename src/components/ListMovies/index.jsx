import { useRef } from "react";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enterText } from "../../redux/slices/textSlice";
import { change } from "../../redux/slices/changesColors";
import { HeartOutlined } from "@ant-design/icons";
import { addFavoriteMovie } from "../../redux/slices/addFavorites";
import { Link } from "react-router-dom";
import { Popover } from "antd";
import ShowMovie from "../ShowMovie";
import styles from "./index.module.css";

const ListMovies = () => {
  const color = useSelector((state) => state.changesColors);
  const favoriteMovie = useSelector((state) => state.addFavorites);

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

  const content = (
    <div>
      <p>Search saved in {`"Favorites"`} section</p>
      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );

  const similarText = (e) => {
    dispatch(enterText(e.target.value));
    const isSimilar = favoriteMovie.find((item) => item === e.target.value);
    if (isSimilar) {
      dispatch(change("black"));
    } else {
      dispatch(change("red"));
    }
  };

  return (
    <div>
      <div className={styles.content}>
        <h3>Search video</h3>

        <div className={styles.searchSystem}>
          <input
            type="text"
            ref={focusOnInput}
            value={text}
            onChange={(e) => similarText(e)}
          />
          <div className={styles.heart}>
            <Popover content={content} trigger="click">
              <HeartOutlined onClick={changeColor} style={style} />
            </Popover>
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
    </div>
  );
};

export default ListMovies;

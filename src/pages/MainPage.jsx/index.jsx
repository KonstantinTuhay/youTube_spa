import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { enterText } from "../../redux/slices/textSlice";
// import { useGetMoviesQuery } from "../../redux/apiMovies";
import styles from "./index.module.css";

const MainPage = () => {
  // const { data } = useGetMoviesQuery();

  const dispatch = useDispatch();
  // const text = useSelector((state) => state.getSlice);
  // console.log(text);
  // const navigate = useNavigate();

  const focusOnInput = useRef(null);

  useEffect(() => {
    focusOnInput.current.focus();
  });

  const findMovies = () => {
    // console.log(text);
    // await getSomeMovies(text);
    // navigate("/list");
  };

  return (
    <>
      <div className={styles.content}>
        <h1>Search video</h1>
        <input
          type="text"
          ref={focusOnInput}
          onChange={(event) => dispatch(enterText(event.target.value))}
        />
        <button onClick={findMovies}>Search</button>
      </div>
    </>
  );
};

export default MainPage;

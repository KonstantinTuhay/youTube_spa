import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enterText } from "../../redux/slices/textSlice";
import styles from "./index.module.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const focusOnInput = useRef(null);

  useEffect(() => {
    focusOnInput.current.focus();
  });

  const findMovies = () => {
    navigate("/list");
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

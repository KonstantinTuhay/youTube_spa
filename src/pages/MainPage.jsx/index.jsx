import { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const focusOnInput = useRef(null);

  useEffect(() => {
    focusOnInput.current.focus();
  });

  const findMovies = () => {
    navigate("list");
  };

  return (
    <>
      <div className={styles.content}>
        <h1>Search video</h1>
        <input type="text" ref={focusOnInput} />
        <button onClick={findMovies}>Search</button>
      </div>
    </>
  );
};

export default MainPage;

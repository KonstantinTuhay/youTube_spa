import { useEffect, useRef } from "react";
import { useGetToDosQuery } from "../../redux/apiVideos";
import styles from "./index.module.css";

const MainPage = () => {
  const { data: tasks } = useGetToDosQuery();
  const focusOnInput = useRef(null);

  useEffect(() => {
    focusOnInput.current.focus();
  });

  const findMovies = () => {
    console.log(tasks);
  };

  return (
    <>
      <div className={styles.content}>
        <h1>Search video</h1>
        <input type="text" ref={focusOnInput} />
        <button onClick={findMovies}>Search</button>
        {/* <button>Search</button> */}
      </div>
    </>
  );
};

export default MainPage;

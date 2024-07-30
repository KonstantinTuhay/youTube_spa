import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const MainPage = () => {
  const focusOnInput = useRef(null);

  useEffect(() => {
    focusOnInput.current.focus();
  });

  return (
    <>
      <div className={styles.content}>
        <h1>Search video</h1>
        <input type="text" ref={focusOnInput} />
        <button>Search</button>
      </div>
    </>
  );
};

export default MainPage;

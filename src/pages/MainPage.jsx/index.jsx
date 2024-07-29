import styles from "./index.module.css";

const MainPage = () => {
  return (
    <>
      <div className={styles.content}>
        <h1>Search video</h1>
        <input type="text" />
        <button>Search</button>
      </div>
    </>
  );
};

export default MainPage;

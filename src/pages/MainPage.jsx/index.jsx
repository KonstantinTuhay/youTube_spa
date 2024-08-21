import SearchSystem from "../../components/SearchSystem";
import styles from "./index.module.css";

const MainPage = () => {
  return (
    <>
      <div className={styles.content}>
        <SearchSystem />
      </div>
    </>
  );
};

export default MainPage;

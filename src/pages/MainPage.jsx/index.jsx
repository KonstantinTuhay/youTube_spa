import { useState } from "react";
import SearchSystem from "../../components/SearchSystem";
import ModalWindow from "../../components/ModalWindow";
import styles from "./index.module.css";

const MainPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />
      <div className={styles.content}>
        <SearchSystem open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default MainPage;

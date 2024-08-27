import { useState } from "react";
import SearchSystem from "../../components/SearchSystem";
import ModalWindow from "../../components/ModalWindow";
import styles from "./index.module.css";

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const style = {
    width: 900,
    textAlign: "center",
    variant: "h2",
    marginBottom: "50px",
  };

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />
      <div className={styles.content}>
        <SearchSystem open={open} setOpen={setOpen} style={style} />
      </div>
    </>
  );
};

export default MainPage;

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { enterText } from "../../redux/slices/textSlice";
import { change } from "../../redux/slices/changesColors";
import { addFavoriteMovie } from "../../redux/slices/addFavorites";
import { HeartOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import styles from "./index.module.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.changesColors);
  const text = useSelector((state) => state.getSlice);

  const navigate = useNavigate();

  const focusOnInput = useRef(null);

  useEffect(() => {
    focusOnInput.current.focus();
  });

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

  return (
    <>
      <div className={styles.content}>
        <h1>Search video</h1>
        <div className={styles.searchSystem}>
          <input
            type="text"
            ref={focusOnInput}
            value={text}
            onChange={(event) => dispatch(enterText(event.target.value))}
          />
          <div className={styles.heart}>
            <Popover content={content} trigger="click">
              <HeartOutlined onClick={changeColor} style={style} />
            </Popover>
          </div>
          <button onClick={findMovies}>Search</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;

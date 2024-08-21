import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { enterText } from "../../redux/slices/textSlice";
import { change } from "../../redux/slices/changesColors";
import { addFavoriteMovie } from "../../redux/slices/addFavorites";
import { editPreText } from "../../redux/slices/editPreviousText";
import { editId } from "../../redux/slices/editIdSlice";
import styles from "./index.module.css";

const SearchSystem = ({ open, setOpen }) => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const dispatch = useDispatch();
  const color = useSelector((state) => state.changesColors);
  const text = useSelector((state) => state.getSlice);
  const favoriteMovie = useSelector((state) => state.addFavorites);
  console.log(favoriteMovie);

  const style = {
    color: color,
    fontSize: "40px",
  };

  const changeColor = () => {
    const objRequest = { id: crypto.randomUUID(), text: text };
    dispatch(change(style.color));
    dispatch(addFavoriteMovie(objRequest));
    dispatch(editId(objRequest.id));
    dispatch(editPreText(text));
    setOpen(true);
  };

  const similarText = (e) => {
    dispatch(enterText(e.target.value));
    const isSimilar = favoriteMovie.find((item) => item === e.target.value);
    if (isSimilar) {
      dispatch(change("black"));
    } else {
      dispatch(change("red"));
    }
  };

  const findMovies = () => {
    navigate("/list");
  };

  const navigate = useNavigate();

  return (
    <>
      <h2>Search video</h2>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 900,
        }}
      >
        <InputBase
          fullWidth="true"
          className={styles.inputBase}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter your request"
          // ref={focusOnInput}
          value={text}
          onChange={(e) => similarText(e)}
        />

        <div className={styles.container} onClick={() => toggle(!state)}>
          <animated.div
            className={styles.text}
            style={{
              opacity: x.to({ range: [0, 1], output: [1, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.0, 1.03, 1],
              }),
            }}
          >
            <FavoriteSharpIcon
              className={styles.favoriteHeart}
              onClick={changeColor}
              style={style}
            />
          </animated.div>
        </div>

        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon onClick={findMovies} style={{ fontSize: "40px" }} />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchSystem;

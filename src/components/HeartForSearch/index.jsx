import { useState } from "react";
import { change } from "../../redux/slices/changesColors";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { isDivide } from "../../redux/slices/divideFeatureForModal";

const HeartForSearch = ({ setOpen }) => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const dispatch = useDispatch();
  const color = useSelector((state) => state.changesColors);
  const itemSlider = useSelector((state) => state.getItemSlider);

  const style = {
    color: color,
    fontSize: "40px",
  };

  const changeColor = () => {
    console.log(itemSlider);
    dispatch(change(style.color));
    dispatch(isDivide(false));
    setOpen(true);
  };
  return (
    <>
      <animated.div
        onClick={() => toggle(!state)}
        style={{
          opacity: x.to({ range: [0, 1], output: [1, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.0, 1.03, 1],
          }),
        }}
      >
        <FavoriteSharpIcon onClick={changeColor} sx={style} />
      </animated.div>
    </>
  );
};

export default HeartForSearch;

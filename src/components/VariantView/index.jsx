import { useDispatch, useSelector } from "react-redux";
import { switchCard } from "../../redux/slices/switchCards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListIcon from "@mui/icons-material/List";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const VariantView = ({ textFromInput }) => {
  const dispatch = useDispatch();
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "25px 0 0",
          color: dayNightTheme ? "black" : "white",
          lineHeight: 0,
        }}
      >
        <Typography sx={{ opacity: 0.8 }}>
          Video on demand {`"${textFromInput}"`}
        </Typography>

        <ToggleButtonGroup exclusive aria-label="text alignment">
          <ToggleButton
            sx={{
              borderColor: dayNightTheme ? "black" : "white",
            }}
            value="left"
            aria-label="left aligned"
            onClick={() => dispatch(switchCard(false))}
          >
            <ListIcon
              sx={{
                color: dayNightTheme ? "black" : "white",
              }}
            />
          </ToggleButton>
          <ToggleButton
            sx={{
              borderColor: dayNightTheme ? "black" : "white",
            }}
            value="center"
            aria-label="centered"
            onClick={() => dispatch(switchCard(true))}
          >
            <GridViewOutlinedIcon
              sx={{
                color: dayNightTheme ? "black" : "white",
              }}
            />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export default VariantView;

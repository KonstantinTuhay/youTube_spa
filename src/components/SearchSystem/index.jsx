import InputForSearch from "../InputForSearch";
import HeartForSearch from "../HeartForSearch";
import ButtonForSearch from "../ButtonForSearch";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const SearchSystem = ({ open, setOpen, style }) => {
  const { width, textAlign, variant, marginBottom } = style;
  return (
    <>
      <Typography
        variant={variant}
        textAlign={textAlign}
        marginBottom={marginBottom}
      >
        Search video
      </Typography>

      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: width,
        }}
      >
        <InputForSearch />

        <HeartForSearch setOpen={setOpen} />

        <ButtonForSearch />
      </Paper>
    </>
  );
};

export default SearchSystem;

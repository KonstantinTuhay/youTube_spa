import InputForSearch from "../InputForSearch";
import HeartForSearch from "../HeartForSearch";
import ButtonForSearch from "../ButtonForSearch";
import { Typography, Paper } from "@mui/material";

const SearchSystem = ({ open, setOpen, style, textFromInput }) => {
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
        <InputForSearch textFromInput={textFromInput} />

        <HeartForSearch setOpen={setOpen} />

        <ButtonForSearch />
      </Paper>
    </>
  );
};

export default SearchSystem;

import InputForSearch from "../InputForSearch";
import HeartForSearch from "../HeartForSearch";
import ButtonForSearch from "../ButtonForSearch";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const SearchSystem = ({ open, setOpen }) => {
  return (
    <>
      <Typography variant="h2" textAlign="center" marginBottom="50px">
        Search video
      </Typography>

      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: 900,
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

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { edit } from "../../redux/slices/addEditRemoveFavorites";
import { getId } from "../../redux/slices/getIdMovie";
import { getPreText } from "../../redux/slices/getPreviousText";
import { getCurrentItemSlider } from "../../redux/slices/getItemSlider";
import { getText } from "../../redux/slices/getTextFromInput";
import { addFavoriteMovie } from "../../redux/slices/addEditRemoveFavorites";
import { setValueForSorting } from "../../redux/slices/setSortValue";

const FormByModal = ({ setOpen }) => {
  const dispatch = useDispatch();

  const getEditText = useSelector((state) => state.getPreviousText);
  const getEditId = useSelector((state) => state.getIdMovie);
  const textFromInpit = useSelector((state) => state.getTextFromInput);
  const isDivideFeature = useSelector((state) => state.divideFeatureForModal);
  const itemSlider = useSelector((state) => state.getItemSlider);
  const setSort = useSelector((state) => state.setSortValue);
  console.log(setSort);
  const handleChange = (e) => {
    dispatch(setValueForSorting(e.target.value));
  };

  const saveChangeRequest = (id) => {
    if (isDivideFeature) {
      dispatch(
        edit({
          id: id,
          text: getEditText,
          maxQuantity: itemSlider,
          sort: setSort,
        })
      );
      dispatch(getId(null));
      dispatch(getPreText(null));
      // dispatch(setValueForSorting("relevance"));
      setOpen(false);
    } else {
      const objRequest = {
        id: crypto.randomUUID(),
        text: textFromInpit,
        maxQuantity: itemSlider,
        sort: setSort,
      };
      dispatch(addFavoriteMovie(objRequest));
      // dispatch(setValueForSorting("relevance"));
      dispatch(getId(objRequest.id));
      dispatch(getPreText(textFromInpit));
      setOpen(false);
    }
  };

  const typeEdit = (e) => {
    isDivideFeature ? dispatch(getPreText(e)) : dispatch(getText(e));
  };

  const handleCloseModal = () => {
    dispatch(getId(null));
    dispatch(getPreText(null));
    setOpen(false);
  };

  const getItemSlider = (e) => {
    dispatch(getCurrentItemSlider(e.target.value));
  };

  return (
    <>
      {" "}
      <FormControl
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: "30px",
        }}
      >
        {isDivideFeature ? (
          <Typography id="modal-modal-title" variant="h4">
            Change request{" "}
          </Typography>
        ) : (
          <Typography id="modal-modal-title" variant="h4">
            Save request{" "}
          </Typography>
        )}

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl variant="standard" disabled>
              <InputLabel htmlFor="component-simple" disabled>
                Request
              </InputLabel>
              <Input
                id="component-simple"
                defaultValue={isDivideFeature ? getEditText : textFromInpit}
              />
            </FormControl>
            <br />
            <FormControl variant="standard">
              {isDivideFeature ? (
                <InputLabel htmlFor="component-simple">
                  Change request
                </InputLabel>
              ) : (
                <InputLabel htmlFor="component-simple">Save request</InputLabel>
              )}
              <Input
                id="component-simple"
                defaultValue={isDivideFeature ? getEditText : textFromInpit}
                onChange={(e) => typeEdit(e.target.value)}
              />
            </FormControl>
            <br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="sorting">Sorting</InputLabel>
              <Select
                labelId="sorting"
                id="sorting"
                value={setSort}
                onChange={(e) => handleChange(e)}
                label="Sorting"
              >
                <MenuItem value={"relevance"}>relevance</MenuItem>
                <MenuItem value={"date"}>date</MenuItem>
                <MenuItem value={"rating"}>rating</MenuItem>
                <MenuItem value={"title"}>title</MenuItem>
                <MenuItem value={"viewCount"}>view</MenuItem>
              </Select>
            </FormControl>
            <br />

            <FormControl>
              <InputLabel
                id="maximum"
                sx={{
                  position: "relative",
                  left: -13,
                }}
              >
                Maximum quantity
              </InputLabel>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Slider
                label="Maximum quantity"
                labelId="maximum"
                aria-label="Videos"
                defaultValue={isDivideFeature ? itemSlider : 24}
                valueLabelDisplay="auto"
                shiftStep={24}
                step={4}
                marks
                min={4}
                max={48}
                onChange={(e) => getItemSlider(e)}
              />
            </FormControl>
            <br />
            <Box>
              <Button
                variant="contained"
                onClick={() => saveChangeRequest(getEditId)}
              >
                Save
              </Button>{" "}
              <Button variant="outlined" onClick={handleCloseModal}>
                Do not save
              </Button>
            </Box>
          </Box>
        </Typography>
      </FormControl>
    </>
  );
};

export default FormByModal;

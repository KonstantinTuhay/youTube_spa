import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { getId } from "../../redux/slices/getIdMovie";
import { getPreText } from "../../redux/slices/getPreviousText";
import FormByModal from "../FormByModal";

const ModalWindow = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(getId(null));
    dispatch(getPreText(null));
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormByModal setOpen={setOpen} />
    </Modal>
  );
};

export default ModalWindow;

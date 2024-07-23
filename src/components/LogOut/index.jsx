import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("token", "");
    navigate("/registr");
  };
  return (
    <>
      <Flex gap="small" wrap>
        <Button type="primary" onClick={handleClick}>
          Log out
        </Button>
      </Flex>
    </>
  );
};

export default LogOut;

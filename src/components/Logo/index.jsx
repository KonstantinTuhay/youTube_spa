// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Logo = () => {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate("/main");
  //   };
  return (
    <div>
      {" "}
      {/* <Link to="/main"> */}
      {/* <button onClick={handleClick}> */}
      <Link to="/main">
        <img src="../../../public/monitor26.png" width="60px" alt="logo" />
      </Link>
      {/* </button> */}
      {/* </Link> */}
    </div>
  );
};

export default Logo;

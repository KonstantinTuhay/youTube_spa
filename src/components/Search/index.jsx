import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <>
      {" "}
      <NavLink to="/main" activeClassName="active">
        Search
      </NavLink>
    </>
  );
};

export default Search;

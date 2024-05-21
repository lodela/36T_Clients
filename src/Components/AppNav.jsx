import { Link } from "react-router-dom";

export const AppNav = () => {
  return (
    <>
      <Link to="/" children="Home" />
      <Link to="/users" children="Users" />
    </>
  );
};

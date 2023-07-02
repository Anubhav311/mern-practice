import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const clickHandler = () => {
    console.log("running running");
  };
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link to="/" className="flex items-center justify-center h-20">
        <p>ProCoder</p>
      </Link>
      <div className="flex items-center">
        {/* <Link to="/login">
          <Button>Login</Button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;

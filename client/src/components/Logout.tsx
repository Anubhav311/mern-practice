import * as React from "react";
import { Button } from "./ui/button";
import { FiLogOut } from "react-icons/fi";

interface ILogoutProps {}

const Logout: React.FunctionComponent<ILogoutProps> = (props) => {
  return (
    <Button>
      <FiLogOut />
    </Button>
  );
};

export default Logout;

import * as React from "react";
import { Button } from "./ui/button";
import { FiLogOut } from "react-icons/fi";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

interface ILogoutProps {}

const Logout: React.FunctionComponent<ILogoutProps> = (props) => {
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = () => {
    signOut();
  };
  return (
    <Button onClick={handleLogout}>
      <FiLogOut />
    </Button>
  );
};

export default Logout;

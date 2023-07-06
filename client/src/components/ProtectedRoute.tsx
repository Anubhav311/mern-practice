import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

interface IProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FunctionComponent<IProtectedRouteProps> = ({
  children,
}) => {
  const [user, load, err] = useAuthState(auth);
  const navigate = useNavigate();

  if (load) {
    return (
      <div>
        <p>Loading User...</p>
      </div>
    );
  }

  if (err) {
    return (
      <div>
        <p>Error: {err.message}</p>
      </div>
    );
  }

  if (!user) {
    navigate("/");
  }

  return children;
};

export default ProtectedRoute;

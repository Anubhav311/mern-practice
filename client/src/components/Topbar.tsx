import * as React from "react";
import Logout from "./Logout";

interface ITopbarProps {}

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {
  return (
    <div className="flex items-centered justify-between px-6 py-2">
      <div>topbar</div>
      <Logout />
    </div>
  );
};

export default Topbar;

import * as React from "react";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";

interface ICodeAreaProps {}

const CodeArea: React.FunctionComponent<ICodeAreaProps> = (props) => {
  return (
    <div>
      <PreferenceNav />
      <div>Code Area</div>
    </div>
  );
};

export default CodeArea;

interface IPreferenceNavProps {}

const PreferenceNav: React.FunctionComponent<IPreferenceNavProps> = (props) => {
  return (
    <div className="flex items-center justify-between bg-black h-11 w-full">
      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-stone-700 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center m-2">
        <button className="preferenceBtn group">
          <div className="h-4 w-4 text-white font-bold text-lg">
            <AiOutlineSetting />
          </div>
        </button>
      </div>
    </div>
  );
};

PreferenceNav;

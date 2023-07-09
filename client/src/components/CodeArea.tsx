import * as React from "react";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import CodeEditorFooter from "./CodeEditorFooter";
import { DBProblems } from "../types/problems";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { problems } from "../problems/index";

interface ICodeAreaProps {
  problem: DBProblems | null;
  loading: boolean;
}

const CodeArea: React.FunctionComponent<ICodeAreaProps> = ({
  problem,
  loading,
}) => {
  const [userCode, setUserCode] = React.useState<string>("");
  const boilerPlate = problem?.boilerPlate.replaceAll("_n", "\n");
  const [user] = useAuthState(auth);

  const handleSubmit = () => {
    if (!user) {
      alert("Please login first");
      return;
    }
    try {
      const cb = new Function(`return ${userCode}`)();
      const success = problems[problem?.id as string].handlerFunction(cb);

      if (success) {
        alert("Congrats!!! All tests passed!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value: string) => {
    setUserCode(value);
    localStorage.setItem(`code-${problem?.id}`, JSON.stringify(value));
  };

  return (
    <div className="flex flex-col relative overflow-x-hidden">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        {/* <div className="w-full overflow-auto codearea"> */}
        <div className="w-full overflow-auto codearea">
          <CodeMirror
            value={boilerPlate}
            theme={vscodeDark}
            onChange={handleChange}
            extensions={[javascript()]}
            style={{ fontSize: "16px" }}
          />
        </div>
        <div className="w-full px-5 overflow-auto">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5">Test Cases</div>
            </div>
          </div>

          <div className="flex">
            <div className="mr-2 "></div>
          </div>
        </div>
      </Split>
      <CodeEditorFooter handleSubmit={handleSubmit} />
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

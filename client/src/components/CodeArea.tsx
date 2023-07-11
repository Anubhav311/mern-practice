import React, { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import CodeEditorFooter from "./CodeEditorFooter";
import { DBProblems, TestCase } from "../types/problems";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { problems } from "../problems/index";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

interface ICodeAreaProps {
  problem: DBProblems | null;
  loading: boolean;
}

const CodeArea: React.FunctionComponent<ICodeAreaProps> = ({
  problem,
  loading,
}) => {
  const [userCode, setUserCode] = React.useState<string>("");
  const [user] = useAuthState(auth);
  const { testCases, loadingTest } = useGetTestCases(problem?.id);
  const [testResult, setTestResult] = useState("");

  const handleSubmit = () => {
    if (!user) {
      alert("Please login first");
      return;
    }
    try {
      const sanitisedCode = userCode.slice(
        userCode.indexOf(problems[problem?.id as string].starterFunctionName)
      );
      const cb = new Function(`return ${sanitisedCode}`)();
      const success = problems[problem?.id as string].handlerFunction(
        cb,
        testCases?.input,
        testCases?.output,
        testCases?.inputCount,
        testCases?.testCasesCount
      );
      console.log("Success: ", success);
      if (success.success) {
        setTestResult(success.message);
      } else {
        setTestResult(success.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value: string) => {
    setUserCode(value);
    localStorage.setItem(`code-${problem?.id}`, JSON.stringify(value));
  };

  useEffect(() => {
    const code = localStorage.getItem(`code-${problem?.id}`);
    if (user) {
      setUserCode(
        code ? JSON.parse(code) : problem?.boilerPlate.replaceAll("_n", "\n")
      );
    }
  }, [user, problem?.boilerPlate, problem?.id]);

  return (
    <div className="flex flex-col relative overflow-x-hidden">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto codearea">
          <CodeMirror
            value={userCode}
            theme={vscodeDark}
            onChange={handleChange}
            extensions={[javascript()]}
            style={{ fontSize: "16px" }}
          />
        </div>
        <div className="w-full px-5 overflow-auto">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5">Test Results</div>
            </div>
          </div>
          {testResult}
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

function useGetTestCases(problemId: string | undefined) {
  const [testCases, setTestCases] = useState<TestCase | null>(null);
  const [loadingTest, setLoading] = useState<boolean>(true);
  const testCaseId = problemId + "-tc1";
  // const [problemDifficultyClass, setProblemDifficultyClass] =
  //   useState<string>("");

  useEffect(() => {
    if (problemId != undefined) {
      const getProblem = async () => {
        setLoading(true);

        const docRef = doc(firestore, "testCases", testCaseId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const testCases = docSnap.data();
          setTestCases({ id: docSnap.id, ...testCases } as TestCase);

          // setProblemDifficultyClass(
          //   problem.difficulty == "easy"
          //     ? "bg-olive text-olive"
          //     : problem.difficulty == "medium"
          //     ? "bg-dark-yellow text-dark-yellow"
          //     : "bg-dark-pink text-dark-pink"
          // );

          setLoading(false);
        }
      };
      getProblem();
    }
  }, [testCaseId, problemId]);
  return { testCases, loadingTest };
}

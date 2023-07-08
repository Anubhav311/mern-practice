import * as React from "react";
import { useParams } from "react-router-dom";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeArea from "./CodeArea";
import { firestore } from "../firebase/firebase";
import { DBProblems } from "../types/problems";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

interface IWorkSpaceProps {}
interface ProblemParams {
  problemId: string;
}

const WorkSpace: React.FunctionComponent<IWorkSpaceProps> = (props) => {
  const { problemId } = useParams<string>();
  const nonNullableProblemId = problemId!;
  const { problem, loading, problemDifficultyClass } =
    useGetProblem(nonNullableProblemId);

  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} loading={loading} />
      <CodeArea problem={problem} loading={loading} />
    </Split>
  );
};

export default WorkSpace;

function useGetProblem(problemId: string) {
  const [problem, setProblem] = useState<DBProblems | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [problemDifficultyClass, setProblemDifficultyClass] =
    useState<string>("");

  useEffect(() => {
    const getProblem = async () => {
      setLoading(true);

      const docRef = doc(firestore, "problems", problemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const problem = docSnap.data();
        setProblem({ id: docSnap.id, ...problem } as DBProblems);

        setProblemDifficultyClass(
          problem.difficulty == "easy"
            ? "bg-olive text-olive"
            : problem.difficulty == "medium"
            ? "bg-dark-yellow text-dark-yellow"
            : "bg-dark-pink text-dark-pink"
        );

        setLoading(false);
      }
    };
    getProblem();
  }, [problemId]);
  return { problem, loading, problemDifficultyClass };
}

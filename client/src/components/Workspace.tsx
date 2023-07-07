import * as React from "react";
import { useParams } from "react-router-dom";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeArea from "./CodeArea";

interface IWorkSpaceProps {}
interface ProblemParams {
  problemId: string;
}

const WorkSpace: React.FunctionComponent<IWorkSpaceProps> = (props) => {
  const { problemId } = useParams<string>();

  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problemId={problemId} />
      <CodeArea />
    </Split>
  );
};

export default WorkSpace;

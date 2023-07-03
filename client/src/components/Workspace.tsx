import * as React from "react";
import { useParams } from "react-router-dom";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";

interface IWorkSpaceProps {}
interface ProblemParams {
  problemId: string;
}

const WorkSpace: React.FunctionComponent<IWorkSpaceProps> = (props) => {
  const { problemId } = useParams();

  return (
    <Split className="split">
      <ProblemDescription />
      <div>Code editor</div>
    </Split>
  );
};

export default WorkSpace;

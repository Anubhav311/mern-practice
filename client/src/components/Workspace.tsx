import * as React from "react";
import { useParams } from "react-router-dom";

interface IWorkSpaceProps {}
interface ProblemParams {
  problemId: string;
}

const WorkSpace: React.FunctionComponent<IWorkSpaceProps> = (props) => {
  const { problemId } = useParams();

  return <div>Workspace: {problemId}</div>;
};

export default WorkSpace;

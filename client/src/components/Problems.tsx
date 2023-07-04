import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useMatch,
} from "react-router-dom";

export type Problem = {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  order: number;
  videoId?: string;
};

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 1,
    videoId: "8-k1C6ehKuw",
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Hard",
    category: "Linked List",
    order: 2,
    videoId: "",
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    videoId: "",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    order: 4,
    videoId: "xty7fr-k0TU",
  },
  {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Binary Search",
    order: 5,
    videoId: "ZfFl4torNg4",
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    order: 6,
    videoId: "",
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "intervals",
    order: 7,
    videoId: "",
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    order: 8,
    videoId: "4qYTqOiRMoM",
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    order: 9,
    videoId: "",
  },
  {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    order: 10,
    videoId: "",
  },
];

interface IProblemsProps {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
}

const Problems: React.FunctionComponent<IProblemsProps> = ({
  setLoadingProblems,
}) => {
  return (
    <TableBody>
      {problems.map((problem) => {
        return (
          <TableRow key={problem.id}>
            <TableCell className="font-medium">Pass</TableCell>
            <Link to={`/problems/${problem.title}`}>
              <TableCell>{problem.title}</TableCell>
            </Link>
            <TableCell>{problem.difficulty}</TableCell>
            <TableCell className="text-right">{problem.category}</TableCell>
            <TableCell>
              {problem.videoId ? <p>Video Link</p> : <p>Coming Soon</p>}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default Problems;

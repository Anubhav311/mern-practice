import { DBProblems } from "../types/problems";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { SubmitHandler } from "../types/problems";

interface ProblemMap {
  [key: string]: SubmitHandler;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "search-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
};

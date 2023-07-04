import * as React from "react";
import Topbar from "./Topbar";
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
import { Skeleton } from "./ui/skeleton";
import Problems from "./Problems";

export interface IProblemsProps {}

export default function ProblemsTable(props: IProblemsProps) {
  const [loadingProblems, setLoadingProblems] = React.useState(false);
  const path = "/problems";
  return (
    <div>
      <Topbar />
      <h1>Problems for Pro Coders</h1>
      {loadingProblems && (
        <div>
          {[...Array(10)].map((_, i) => (
            <ProblemsTableSkeleton key={i} />
          ))}
        </div>
      )}
      <Table className="w-4/6 m-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        {!loadingProblems && (
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead className="text-right">Category</TableHead>
              <TableHead>Solution</TableHead>
            </TableRow>
          </TableHeader>
        )}
        <Problems setLoadingProblems={setLoadingProblems} />
      </Table>
    </div>
  );
}

function ProblemsTableSkeleton() {
  return (
    <div className="mb-8 flex itmes-center justify-between w-4/6 m-auto">
      <Skeleton className="h-6 w-6 rounded-full" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}

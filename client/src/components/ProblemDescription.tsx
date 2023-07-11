import { firestore } from "../firebase/firebase";
import { Problem } from "../problems/two-sum";
import { DBProblems } from "../types/problems";
import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import parse from "html-react-parser";

interface IProblemDescriptionProps {
  problem: DBProblems | null;
  loading: boolean;
}

const ProblemDescription: React.FunctionComponent<IProblemDescriptionProps> = ({
  problem,
  loading,
}) => {
  return (
    <div className="bg-dark-layer-1 h-screen">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-black text-black overflow-x-hidden">
        <div
          className={
            "bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer text-white"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          {!loading && problem && (
            <div className="w-full">
              <div className="flex space-x-4">
                <div className="flex-1 mr-2 text-lg text-black font-medium">
                  {problem.title}
                </div>
              </div>
              <div className="flex items-center mt-3">
                <div
                  className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
                >
                  {problem.difficulty}
                </div>
                {/* <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                  <BsCheck2Circle />
                </div>
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                  <AiFillLike />
                  <span className="text-xs">{problem.likes}</span>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                  <AiFillDislike />
                  <span className="text-xs">{problem.dislikes}</span>
                </div>
                <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                  <TiStarOutline />
                </div> */}
              </div>

              {parse(problem.problemStatement)}

              {/* Examples */}
              <div className="mt-4">
                {problem.examples.map((example, idx) => (
                  <div key={idx} className="mb-5">
                    <p className="font-medium text-black ">
                      Example {example.id}:{" "}
                    </p>
                    <div className="example-card">
                      <pre>
                        <strong className="text-black">Input: </strong>
                        {example.input}
                        <br />
                        <strong>Output:</strong> {example.output} <br />
                        <strong>Explanation:</strong>
                        {example.explanation}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>

              {/* Constraints */}
              <div className="my-5">
                <div className="text-black text-sm font-medium">
                  Constraints:
                </div>
                <ul className="text-black ml-5 list-disc">
                  <li className="mt-2">
                    <code>2 ≤ nums.length ≤ 10</code>
                  </li>

                  <li className="mt-2">
                    <code>-10 ≤ nums[i] ≤ 10</code>
                  </li>
                  <li className="mt-2">
                    <code>-10 ≤ target ≤ 10</code>
                  </li>
                  <li className="mt-2 text-sm">
                    <strong>Only one valid answer exists.</strong>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {loading && <h1>Loading...</h1>}
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;

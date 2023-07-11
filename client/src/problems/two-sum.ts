import assert from "assert";

export type Example = {
  id: number;
  input: string;
  output: string;
  explanation?: string;
  img?: string;
};

export type Problem = {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  order: number;
  starterCode: string;
  handlerFunction: (
    fn: any,
    input: any,
    inputCount: number,
    output: any,
    testCasesCount: number
  ) => TestResult;
  starterFunctionName: string;
};

const starterCodeTwoSum = `function twoSum(nums, target) {
    // write your code here
};`;

export type TestResult = {
  success: boolean;
  message: string;
};

// checks if the code is correct or not
const handlerTwoSum = (
  fn: any,
  input: any,
  inputCount: number,
  output: any,
  testCasesCount: number
): TestResult => {
  try {
    for (let i = 0; i < testCasesCount; i++) {
      const inputIndex = i * inputCount;

      const inp1 = JSON.parse(input[inputIndex]);
      const inp2 = JSON.parse(input[inputIndex + 1]);
      const outp = JSON.parse(output[i]);

      const errorMessage = `Test failed with the following input: ${
        inp1[inputIndex]
      }, ${inp1[inputIndex + 1]}`;

      const result = fn(inp1, inp2);
      assert.deepStrictEqual(result, outp, errorMessage);
    }

    return { success: true, message: "All Tests Passed" } as TestResult;
  } catch (error: any) {
    console.log("Error: ", error.message);
    return { success: false, message: error.message } as TestResult;
  }
};

export const twoSum: Problem = {
  id: "two-sum",
  title: "1. Two Sum",
  problemStatement: `<p className="mt-3">
  Given an array of integers <code>nums</code> and an integer{" "}
  <code>target</code>, return
  <em>
    indices of the two numbers such that they add up to
  </em>{" "}
  <code>target</code>.
</p>
<p className="mt-3">
  You may assume that each input would have{" "}
  <strong>exactly one solution</strong>, and you may not use
  thesame element twice.
</p>
<p className="mt-3">You can return the answer in any order.</p>`,
  examples: [
    {
      id: 1,
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Becase num[0] + num[1] == 9, we return [0,1]",
    },
  ],
  constraints: `<li className="mt-2">
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
</li>`,
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum(",
};

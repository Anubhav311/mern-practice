import assert from "assert";
import { SubmitHandler } from "../types/problems";

export type TestResult = {
  success: boolean;
  message: string;
};

// checks if the code is correct or not
export const submitHandlerTwoSum = (
  fn: any,
  input: any,
  output: any,
  inputCount: number,
  testCasesCount: number
): TestResult => {
  try {
    for (let i = 0; i < testCasesCount; i++) {
      const inputIndex = i * inputCount;

      const inp1 = JSON.parse(input[inputIndex]);
      const inp2 = JSON.parse(input[inputIndex + 1]);
      const outp = JSON.parse(output[i]);

      const errorMessage = `Test failed with the following input: ${inp1}, ${inp2}`;

      const result = fn(inp1, inp2);
      assert.deepStrictEqual(result, outp, errorMessage);
    }

    return { success: true, message: "All Tests Passed" } as TestResult;
  } catch (error: any) {
    console.log("Error: ", error.message);
    return { success: false, message: error.message } as TestResult;
  }
};

export const twoSum: SubmitHandler = {
  handlerFunction: submitHandlerTwoSum,
  starterFunctionName: "function twoSum(",
};

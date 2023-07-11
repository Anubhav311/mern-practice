import assert from "assert";
import { SubmitHandler, TestResult } from "../types/problems";

export const jumpGameHandler = (
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
      const outp = JSON.parse(output[i]);

      const errorMessage = `Test failed with the following input: ${inp1}`;

      const result = fn(inp1);
      assert.deepStrictEqual(result, outp, errorMessage);
    }
    return { success: true, message: "All Tests Passed" } as TestResult;
  } catch (error: any) {
    console.log("Error: ", error.message);
    return { success: false, message: error.message } as TestResult;
  }
};

export const jumpGame: SubmitHandler = {
  handlerFunction: jumpGameHandler,
  starterFunctionName: "function jumpGame(",
};

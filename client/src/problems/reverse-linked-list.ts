import assert from "assert";
import { SubmitHandler, TestResult } from "../types/problems";

// JS doesn't have a built in LinkedList class, so we'll create one
class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  reverse(): LinkedList {
    let current: LinkedList | null = this;
    let prev: LinkedList | null = null;
    while (current !== null) {
      const next = current.next as LinkedList;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev!;
  }
}

export const reverseLinkedListHandler = (
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
      const list = createLinkedList(inp1);
      const result = fn(list);

      assert.deepStrictEqual(getListValues(result), outp, errorMessage);
    }
    return { success: true, message: "All Tests Passed" } as TestResult;
  } catch (error: any) {
    console.log("Error: ", error.message);
    return { success: false, message: error.message } as TestResult;
  }
};

// it creates a linked list from an array
function createLinkedList(values: number[]): LinkedList {
  const head = new LinkedList(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    const node = new LinkedList(values[i]);
    current.next = node;
    current = node;
  }
  return head;
}

// it returns an array of values from a linked list
function getListValues(head: LinkedList): number[] {
  const values = [];
  let current: LinkedList | null = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  return values;
}

export const reverseLinkedList: SubmitHandler = {
  handlerFunction: reverseLinkedListHandler,
  starterFunctionName: "function reverseLinkedList(",
};

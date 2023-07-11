export type Example = {
  id: number;
  input: string;
  output: string;
  explanation?: string;
  img?: string;
};

export type DBProblems = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  likes: number;
  dislikes: number;
  order: number;
  videoId?: string;
  link?: string;
  boilerPlate: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  handlerFunction: (
    fn: any,
    input: any,
    output: any,
    inputCount: number,
    testCasesCount: number
  ) => TestResult;
  starterFunctionName: string;
};

export type TestResult = {
  success: boolean;
  message: string;
};

export type TestCase = {
  id: string;
  input: Input[];
  output: Output[];
  inputCount: number;
  testCasesCount: number;
};

export type Input = string;
export type Output = string;

export type SubmitHandler = {
  handlerFunction: (
    fn: any,
    input: any,
    output: any,
    inputCount?: number,
    testCasesCount?: number
  ) => TestResult;
  starterFunctionName: string;
};

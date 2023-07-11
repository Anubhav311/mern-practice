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
};

// local problem data
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

type TestResult = {
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

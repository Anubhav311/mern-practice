import * as React from "react";
import { BsChevronUp } from "react-icons/bs";

type CodeEditorFooterProps = {
  handleSubmit: () => void;
};

const CodeEditorFooter: React.FunctionComponent<CodeEditorFooterProps> = ({
  handleSubmit,
}) => {
  return (
    <div className="flex bg-dark-layer-1 absolute bottom-0 z-10 w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex bg-black text-sm hover:bg-dark-fill-2 text-white rounded-lg pl-3 pr-2">
            Console
            <div className="ml-1 transform transition flex items-center">
              <BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6" />
            </div>
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-black hover:bg-dark-fill-2 text-white rounded-lg">
            Run
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-black hover:bg-green-3 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorFooter;

import React from "react";
import { Child } from "./Child";

const Parent: React.FC = () => {
  return (
    <Child color="red" onClick={() => alert("hi")}>
      asldkfj
    </Child>
  );
};

export default Parent;

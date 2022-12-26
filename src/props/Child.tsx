import React from "react";

interface ChildProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

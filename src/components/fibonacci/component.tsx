//FC is functional component
import React, { FC } from "react";
import { Fibonacci } from "../../problems";
import { FibonacciDisplayProps } from "./types";

export const FibonacciDisplay: FC<FibonacciDisplayProps> = ({
  position,
  onChange,
}) => {
  return (
    <div>
      <input type="number" onChange={onChange} />
      <h3>Fibonacci number</h3>
      <p>{Fibonacci(position)}</p>
    </div>
  );
};

import { ChangeEvent } from "react";

export interface FibonacciDisplayProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  position: number;
}

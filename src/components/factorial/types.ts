import { ChangeEvent } from "react";

export interface FactorialDisplayProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  position: number;
}

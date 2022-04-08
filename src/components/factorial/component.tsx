import React, { ChangeEvent, FC, useState } from "react";
import { Factorial } from "../../problems";
import { FactorialDisplayProps } from "./types";

export const FactorialDisplay: FC<FactorialDisplayProps> = ({
  onChange,
  position,
}) => {
  return (
    <div>
      <input type="number" onChange={onChange} />
      <h3>Factorial number</h3>
      <p>{Factorial(position)}</p>
    </div>
  );
};
// export const FactorialDisplay: FC<FactorialDisplayProps> = ({
//   onChange,
//   position,
// }) => {
//   const [factorialNumber, setFactorialNumber] = useState<number>(0);

//   const getFactorialPosition = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.value !== "")
//       setFactorialNumber(parseInt(event.target.value));
//     else setFactorialNumber(0);
//   };
//   return (
//     <div>
//       <input type="number" onChange={getFactorialPosition} />
//       <h3>Factorial number</h3>
//       <p>{Factorial(factorialNumber)}</p>
//     </div>
//   );
// };

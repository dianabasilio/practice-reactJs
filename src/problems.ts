export const Fibonacci = (n: number): number => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let lastValue = 0,
    actualValue = 1,
    aux;

  for (let i = 2; i < n; i++) {
    aux = lastValue;
    lastValue = actualValue;
    actualValue = aux + actualValue;
  }

  return actualValue;
};

const FiboList = {};

export const FibonacciRecursive = (n: number): number => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (FiboList[n - 1] === undefined)
    FiboList[n - 1] = FibonacciRecursive(n - 1);
  if (FiboList[n - 2] === undefined)
    FiboList[n - 2] = FibonacciRecursive(n - 2);

  return FiboList[n - 1] + FiboList[n - 2];
};

export const Factorial = (n: number): number => {
  if (n === 0 || n === 1) return 1;

  let result = 1;

  for (let i = n; i > 1; i--) {
    result = result * i;
  }

  return result;
};

const FactorialList = {};

export const FactorialRecursive = (n: number): number => {
  if (n === 0 || n === 1) return 1;
  if (FactorialList[n - 1] === undefined)
    FactorialList[n - 1] = FactorialRecursive(n - 1);

  return n * FactorialList[n - 1];
};

interface Bank {
  name: string;
  address: string;
  country: string;
  telephoneNumber: string;
  SWIFT: string;
}

type transferStates = "processing" | "sent" | "finish" | "failed";

// enum transferStatesEnum {
//   processing = "processing",
//   sent = "sent",
//   finish = "finish",
//   failed = "failed",
// }

// type transferStates = transferStatesEnum[number];

export interface Transfer {
  amount: number;
  currency: string;
  creationDate: Date;
  confirmationDate: Date;
  originBank: Bank;
  destinyBank: Bank;
  state: transferStates;
  description?: string;
}

export const isInternalTransfer = (transfer: Transfer): boolean => {
  const stringOrigin = JSON.stringify(transfer.originBank);
  const stringDestiny = JSON.stringify(transfer.destinyBank);

  return stringOrigin === stringDestiny;
};

const MyTransfer: Transfer = {
  amount: 1000,
  currency: "MXN",
  creationDate: new Date(),
  confirmationDate: new Date(),
  originBank: {
    name: "BBVA",
    address:
      "Av Jose Ma. Morelos 53, El Rosario, Xochimilco, 16070 Ciudad de México, CDMX",
    SWIFT: "BCMRMXMMPYM",
    telephoneNumber: "5523669984",
    country: "MX",
  },
  destinyBank: {
    name: "BBVA",
    address:
      "Av Jose Ma. Morelos 53, El Rosario, Xochimilco, 16070 Ciudad de México, CDMX",
    SWIFT: "BCMRMXMMPYM",
    telephoneNumber: "5523669984",
    country: "MX",
  },
  state: "processing",
};

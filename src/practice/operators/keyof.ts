type AType = {
  a: string;
  b: number;
}

interface BType {
  c: boolean;
  d: string[];
}

let foo3: keyof AType;
foo3 = 'a';
foo3 = 'b';
// foo3 = 'c'; // error TS2322: Type '"c"' is not assignable to type 'keyof AType'.

let foo4: keyof BType;
foo4 = 'c';
foo4 = 'd';
// foo4 = 'g'; // Type '"g"' is not assignable to type 'keyof BType'.

type Person3 = {
  name: string;
  age: number;
  city: string;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person3: Person3 = {
  name: 'John',
  age: 30,
  city: 'New York',
};

getProperty(person3, 'name'); // John
getProperty(person3, 'age'); // 30
getProperty(person3, 'city'); // New York
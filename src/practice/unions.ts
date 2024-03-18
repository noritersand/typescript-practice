type MyBool = true | 0;
let foo: MyBool = 0;

function fn(arg: string | null | undefined) {
  // ...
}
fn('Hello');
// fn(NaN);
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

function fn2(arg: 'a' | 'b' | 'c') {
  // ...
}
fn2('b');
// fn2('d'); // error TS2345: Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'.

type myNumber = number | string;
let n: myNumber = 1;
n = '1';
// n = false; // error TS2322: Type 'boolean' is not assignable to type 'myNumber'.

type myNumber2 = 1 | 2 | 3 | '1' | '2' | '3';
let n2: myNumber2 = 1;
n2 = '3';
// n2 = 4; // error TS2322: Type '4' is not assignable to type 'myNumber2'.

let arr2: myNumber2[] = [1, '2', 3]; // OK

// type Person = { name: string, age: number };
// type Human = { breathing: boolean };

// let waldo: Person | Human;

waldo = {
  name: 'waldo', 
  age: 47,
  breathing: true,
};

// waldo = {
//   hello: 'Hello there!'
//   // error TS2353: Object literal may only specify known properties, and 'hello' does not exist in type 'Person | Human'.
// };
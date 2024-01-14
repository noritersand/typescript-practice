function printFooBar2(foobar: { foo: string, bar: number }) {
  console.log(foobar.foo, foobar.bar);
}
printFooBar2({ foo: 'foo', bar: 1 });
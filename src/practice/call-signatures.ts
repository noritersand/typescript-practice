function getSymbol(): symbol {
  return Symbol('me');
}

const getSymbol2 = (): symbol => {
  return Symbol('me');
}

console.log(getSymbol2());

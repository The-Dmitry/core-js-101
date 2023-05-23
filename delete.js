const test = (x1, x2, x3, x4) => x1 + x2 + x3 + x4;

function partialUsingArguments(fn, ...args1) {
  console.log(fn);
  return (...args2) => fn(...args1, ...args2);
}


console.log(partialUsingArguments(test, 'a')('b','c','d'));


/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 * https://javascript.info/currying-partials
 */
function curry(fn) {
  // your code here
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  }
}

function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);
console.log( curriedSum(1, 2, 3) );
console.log( curriedSum(1)(2,3) );
console.log( curriedSum(1)(2)(3) );

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

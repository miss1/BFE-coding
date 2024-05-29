// Implement undefinedToNull() to return a copy that has all undefined replaced with null.
/**
 * @param {any} arg
 * @returns any
 * deep clone, replace undefined with null
 */
function undefinedToNull(arg) {
  // your code here
  if (typeof arg !== 'object' || arg == null) {
    return arg === undefined ? null : arg;
  }
  let obj = arg instanceof Array ? [] : {};
  for (let key in arg) {
    if (arg.hasOwnProperty(key)) {
      const k = key === undefined ? null : key;
      obj[k] = undefinedToNull(arg[key]);
    }
  }
  return obj;
}

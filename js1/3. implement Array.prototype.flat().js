// flat array
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  if (depth === 0) return arr;
  return arr.reduce((res, a) => {
    if (a instanceof Array) res.push(...flat(a, depth - 1));
    else res.push(a);
    return res;
  }, [])
}

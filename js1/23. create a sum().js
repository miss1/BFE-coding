/**
 * @param {number} num
 * curry, valueOf
 * valueOf: 将对象转换成基本类型值，当需要时(==)，js会自动调用该方法
 */
function sum(num) {
  // your code here
  const currentSum = (b) => sum(num + b);
  currentSum.valueOf = () => num;  // 手动修改primitive data
  return currentSum;
}

const sum1 = sum(1)
console.log(sum1(2) == 3) // true, == 比较，自动调用valueOf获取function的primitive值
console.log(sum1(3) == 4) // true
console.log(sum(1)(2)(3) == 6) // true
console.log(sum(5)(-1)(2) == 6) // true

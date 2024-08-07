/**
 * 함수명 : sameFrequency
 * 1. 2개의 양의 정수가 주어졌을때 두 숫자의 자릿수가 같은 빈도를 갖는지 구함
 */

/**
 *
 * @param {number} num1
 * @param {number} num2
 */
function sameFrequency(num1, num2) {
  const [strNum1, strNum2] = [num1.toString(), num2.toString()];

  if (strNum1.length !== strNum2.length) {
    return false;
  }

  const counter1 = {};
  for (const i of strNum1) {
    counter1[i] = (counter1[i] || 0) + 1;
  }

  const counter2 = {};
  for (const i of strNum2) {
    counter2[i] = (counter2[i] || 0) + 1;
  }

  for (const key in counter1) {
    if (!(key in counter2)) {
      return false;
    }

    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

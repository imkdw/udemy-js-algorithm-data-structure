/**
 * 함수명 : averagePair
 * 1. 정수 배열과 목표하는 평균값이 주어짐
 * 2. 배열 내부에서 2개이상의 값을 더한 평균이 목표하는 평균값이 되는지 확인
 */

/**
 * @param {number[]} arr
 * @param {number} average
 */
function averagePair(arr, average) {
  if (!arr.length) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === average) {
      return true;
    } else if (avg < average) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

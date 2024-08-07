/**
 *
 * @param {number[]} arr
 * @param {number} num
 */
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let max = arr.slice(0, num).reduce((acc, cur) => acc + cur, 0);
  let temp = max;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(temp, max);
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

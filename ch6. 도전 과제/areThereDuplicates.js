/**
 * 함수명 : areThereDuplicates
 * 가변적인 인수를 받아서 그 내부에 중복이 있는지 검사한다
 */

/**
 * @param  {...any} args
 */
function areThereDuplicates(...args) {
  const set = Array.from(new Set(args));
  return set.length !== args.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

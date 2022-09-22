/* Factorial example: 5! = 5 * 4 * 3 * 2 * 1 = 120*/

function findFactorialRecursive(number) {
  // base case that stops the recursive calls
  if (number === 2) {
    //when 2 is returned the previous recursive calls then run, popping off the stack, returning the decremeted value from each call and multiplying it by the next call in the stack.
    return 2;
  }
  // no "real" processing takes places we are just decrementing the number with each call
  return number * findFactorialRecursive(number - 1)
};


function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) return answer = 2;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
};


console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
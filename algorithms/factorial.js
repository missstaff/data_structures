/* Factorial example: 5! = 5 * 4 * 3 * 2 * 1 = 120*/

function findFactorialRecursive(number){
  
  if(number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number){
  let answer = 1;
  if(number === 2) answer = 2;
  for(let i = 2; i <= number; i++){
    answer = answer * i;
  }
  return answer;
}
console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
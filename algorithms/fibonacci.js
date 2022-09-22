
/* Fibonacci Number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... *each item is a sum of the two items before it*/

// n is the index number of item not the value 
function fibonacciRecursive(n){
  //handles 1 and 0
  if(n < 2){
    return n;
  }
  //returns the sum of two recursive function calls that decrement the number by 1 and 2 respectively
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}


function fibonacciIterative(n){
  //begins the array of numbers w/ 0 and 1
 let arr = [0, 1];
 //increments until index is 1 more than the number passed in
 for(let i = 2; i < n+1; i++){
  //at each increment pushes the sum of arr[i-2] + arr[i-1] to the array 
    arr.push(arr[i-2] + arr[i-1])
 } 
 return arr
}

// console.log(fibonacciRecursive(89));
// console.log(fibonacciIterative(8));
// console.log(fibonacciIterative(5));
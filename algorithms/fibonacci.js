
/* Fibonacci Number: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... *each item is a sum of the two items before it*/

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

/////////////////////////////////// CALL STACK ////////////////////////////////////
// fibonacciR(2) = fibonacciR(1) + fibonacciR(1) = 1 + 1 = 2
// fibonacciR(3) = fibonacciR(2) + fibonacciR(1) = 2 + 1 = 3
// fibonacciR(5) = fibonacciR(3) + fibonacciR(2) = 3 + 2 = 5
// fibonacciR(6) = fibonacciR(5) + fibonacciR(3) = 5 + 3 = 8
// fibonacciR(7) = fibonacciR(6) + fibonacciR(5) = 8 + 5 = 13
// fibonacciR(8) = fibonacciR(7) + fibonacciR(6) = 13 + 8 = 21
///////////////////////////////////////////////////////////////////////////////////

// console.log(fibonacciRecursive(89));
// console.log(fibonacciIterative(8));
// console.log(fibonacciIterative(5));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // outer loop iterates # of items in the array so looping continues after 1 iteration ~ keeps it looping
  for (let i = 0; i < array.length; i++) {
    //inner loop compares values and swaps them from 0 to -1 for each iteration of loop 1 
   for(let j = 0; j < array.length; j++){
    if(array[j] > array[j+1]){
      //put array [j] in a variable
      let temp = array[j];
      // swap out the value of array[j] with array[j+1]
      array[j] = array[j+1];
      //we placed the value of array[j] in temp so it was not lost in previous swap. Now assign array[j+1] the value of temp to complete swapping the values.
      array[j+1] =  temp;
    }
   }
  }
  return array
}


console.log(bubbleSort(numbers));
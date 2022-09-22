
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    //starts min value at 0 index
    let min = i;
    // holds value of index to be swapped with min
    let temp = array[i];
    //looking forward to next items in array
    for (let j = i + 1; j < array.length; j++) {
      //compares the minumum found so far to the next items in the array
      if (array[j] < array[min]) {
        //changes min to a new index that is smaller in value if one is found
        min = j;
      }
    }
    //swaps the min value to the lowest index --> [0, 1, 2, 44, ..., 98, 283] lowest value in 0 index and so on
    array[i] = array[min];
    //swaps the value that was in the lowest available index into the min value original index
    array[min] = temp;
  }
  return array;
}


console.log(selectionSort(numbers));
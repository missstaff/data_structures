const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array){
  for(let i = 0; i < array.length; i++){
   if(array[i] < array[0]){
    array.unshift(array.splice(i,1)[0]);
   }else{
    for(let j = 1; j < i; j++){
      if(array[i] > array[j-1] && array[i] < array[j]){
        let a = array.splice(j,0, array.splice(i,1)[0])
      }
    }
   }
  }
}

function insertionSort2(array){
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    while (array[j] < array[j - 1]) {
      const temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j--;
    }
  }
  return array;
}

insertionSort(numbers);
console.log(numbers);
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items


let array1 = ['a', 'b', 'c', 'x'];
let array2 = ['z', 'y', 'i'];
// should return false.
//-----------
// let array1 = ['a', 'b', 'c', 'x'];
// let array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for ( let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false
}

//O(a*b)
//O(1) - Space Complexity

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  
  // loop through second array and check if item in second array exists on created object. 
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

//O(a + b) Time Complexity
//O(a) Space Complexity


function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

// let x = containsCommonItem(array1, array2);
// console.log("1", {x});
// x = containsCommonItem2(array1, array2);
// console.log("2", {x});
// x = containsCommonItem3(array1, array2);
// console.log("3", {x});


//REVERSE A STRING//
const string = 'Hi my name is Miss';

function reverse1(str){
  if(typeof str !== 'string' || !str || str.length < 2) return;

  const newArr = [];

  for(let i = str.length; i >= 0; i--){
    newArr.push(str[i]);
  }

  return newArr.join('');
}

function reverse2(str){
  if(typeof str !== 'string' || !str || str.length < 2) return;
  return str.split('').reverse().join('');
}

const reverse3 = (str) =>  str.split('').reverse().join('');

const reverse4 = (str) =>  [...str].reverse().join('');


// const revStr1 = reverse1(string);
// console.log(revStr1);

// const revStr2 = reverse2(string);
// console.log(revStr2);

// const revStr3 = reverse3(string);
// console.log(revStr3);

// const revStr4 = reverse4(string);
// console.log(revStr4);


//MERGE SORTED ARRAYS//
let sortedArr1 = [1,2,3,4,5];
let sortedArr2 = [3,4,7,8];

function mergeSortedArrays(arr1, arr2){

  if(typeof arr1 !== 'object' || typeof arr2 !== 'object') return;
  if(arr1.length === 0)return arr2;
  if(arr2.length === 0)return arr1;

  const mergedArr = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 0;
  let j = 0;
  
  while(arr1Item || arr2Item){
  
    if(!arr2Item || arr1Item < arr2Item){
      mergedArr.push(arr1Item);
      i++;
      arr1Item = arr1[i];

    } else {
      mergedArr.push(arr2Item);
      j++;
      arr2Item = arr2[j];

    }
  }

  return mergedArr;

}
const mergedArr = mergeSortedArrays(sortedArr1, sortedArr2);
// console.log(mergedArr);



//Google Question
function firstRecurringCharacter(input){
   
  if(!input.length) return;

  let temp = [];

  for(let i = 0; i < input.length; i++){
    const item = input[i];
    if(temp.includes(item)) return item;
    temp.push(item);
  }

  return undefined;
}


function firstRecurringCharacter2(input){
   
  if(!input.length) return;

  let map = {};
  
  for(let i = 0; i < input.length; i++){
    
    if(map[input[i]] !== undefined) return input[i];
    map[input[i]] = i;
  }

  return undefined;
}

// Given an 
array1 = [2,5,1,2,3,5,1,2,4];
//It should return 2

//Given an 
array2 = [2,1,1,2,3,5,1,2,4];
//It should return 1

//Given an 
let array3 = [2,3,4,5];
//It should return undefined

//Bonus... What if we had this:
let array4 = [2,5,5,2,3,5,1,2,4];
// return 5 because the pairs are before 2,2
console.log(firstRecurringCharacter(array));
console.log(firstRecurringCharacter2(array));

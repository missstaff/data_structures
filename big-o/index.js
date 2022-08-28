// O(1) --> Constant Time
// O(n) --> Linear Time
// O(n^2) --> Quadratic Time
// O(n!) --> Factorial Time (Oh no!)

const nemo = ["nemo"];

const everyone = ["dory", "bruce", "merlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];

const large = new Array(10000).fill("nemo");

const findNemo = (array) => {
  for(let i = 0; i < array.length; i++){
    console.log("Found NEMO");
  }
};


findNemo(large); // O(n)

const boxes = [0, 1, 2, 3, 4, 5];
const logFirstTwoBoxes = array => {
  console.log(array[0]); // O(1)
  console.log(array[1]); // O(1)
};

logFirstTwoBoxes(boxes); // O(2)

// What is the Big O of the below function? 
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    //anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
};

// 3 + n + n + n + n
// 3 + 4n
// BIG O(3 + 4n)
// = O(n)

funChallenge(boxes); 

// What is the Big O of the below function? 
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input.length; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input.length; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// 4 + 7n = 0(n)
anotherFunChallenge(boxes);

/* RULES */
// 1. Worst case
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop Non Dominants


const logAllPairs = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      console.log({i}, {j});
    }
  }
};

// nested loops O(n*n)
// O(n^2)
logAllPairs(boxes);


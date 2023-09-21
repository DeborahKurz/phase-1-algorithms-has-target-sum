//Has Target Sum Lab Solution Refractored Optimized Code:
// function hasTargetSum(array, target){
//   const seenNumbers = {}
//   for(const number of array) {
//     const complement = target - number;
//     if(complement in seenNumbers) return true;
//     seenNumbers[number] = true;
//   }
//   return false;
// }


//Has Target Sum Lab Solution Optimized Code:
function hasTargetSum(array, target){
  const seenNumbers = {}
  for(let i = 0; i<array.length; i++){
    const complement = target-array[i];
    if(seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true
  }
  return false;
}

//My Original Code:
// function hasTargetSum(array, target) {
//   for(let i = 0; i<array.length; i++){
//     for(let j = i+1; j<array.length; j++){
//       if(array[i] + array[j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

/* 
  Write the Big O time complexity of your function here
  Quadratic Time 0(n²)
*/

/* 
  Add your pseudocode here
  //1. Write a function called hasTargetSum
  //2. Add two arguments: array , target
  3. Create two nested for loops (i, and j) to check each item in the array
  4. Create an if statment in the second for loop to see if the sum equals 'target'
  5. If the sum equals 'target', return true
  6. Outside of the for loops, return false
*/

/*
  Add written explanation of your solution here
  I  am writing a function that takes two arguments and adds together two items in the first argument(an array), to see if they equual the second argument. The function will return true or false accordingly.

  Write a function
  Takes in two arguments
  Check that to numbers in the 1st argument add up to the 2nd argument by using a for loop to check if there is another nubmer in the array with a sum of x.
     If the two numbers equal the sum, return true.
     Otherwise, continue searching the arguments
  If none is found, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0,8,4], 0))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([100,1000, 10, 10], 20))
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 1))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 6], 5))
}

module.exports = hasTargetSum;

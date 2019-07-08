// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });


function getLength(arr, cb) {
  cb(arr.length);
}

getLength(items, length => {
  console.log(`The length is ${length}`)
});

getLength(items, console.log);



//////////

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}

last(items, (end) => {
  console.log(end);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(2, 4, (total) => {
  console.log(total);
});



///////////

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 5, (product) => {
  console.log(product);
});


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  
  if(list.includes(item)){
    cb(true)
  } else {
    cb(false)
  }
}

contains('Pencil', items, function(search) {
  console.log(search);
});



//ADDITIONAL PRACTICE WRITING OUT CALLBACKS. NOT RELATED TO THE ASSIGNMENT//


// const tattooShop = ['ink', 'tattoo gun', 'chairs', 'TV'];

// function contains(item, list, cb) {
//   if(list.includes(item)){
//     cb(true);
//   }else {
//     cb(false);
//   }
// }

// contains('tattoo gun', tattooShop, function(search) {
//   console.log(search);
// })



// /* STRETCH PROBLEM */
let duplicate = [5, 5, 3, 6, 2, 8, 2];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let dupeFree = [];
  
}
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function boss() {
  const manager = 'Sam';
  console.log(`${manager} wants to know what his employee is doing.`)

  function employee() {
    const worker = 'James';
    console.log(`${worker} is slacking off. Better hope his manager doesn't find out.`)
  }
  employee();
}
boss();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let count = 0;
  return function () {
    count = count + 1;
    return count;
  }
};

const newCounter = counter();
console.log(newCounter()); //Will log 1.
// console.log(newCounter()); //will log 2.
// console.log(newCounter()); //will log 3.


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
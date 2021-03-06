// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sampleClosure(material) {
  let element = ['copper'];

  function addElement(material) {
    element.push(material);
    console.log(element);
  }

  return addElement(material);
}

sampleClosure('nickel');


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  function counting() {
    count++;
    return count;
  }

  return counting;
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
//   let exampleObject = {
//     "count": 0,
//     increment: function() {
//       this.count++;
//       return count;
//     },
//     decrement: function() {
//       this.count--;
//       return count;
//     }
//   };

//   return exampleObject;
// };

// console.log(counterFactory);

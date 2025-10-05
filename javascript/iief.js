// 🔹 What is IIFE?

// IIFE = A function that runs immediately after it is defined, without needing to call it separately.
// It’s usually anonymous and wrapped in ().

(function() {
  console.log("I run immediately!");
})();// I run immediately!


//  with paramters
(function(name) {
  console.log(`I run immediately! ${name}`);
})("ali");
// I run immediately! ali

// with named functon
(function name(name) {
  console.log(`I run immediately! ${name}`);
})("ali");
// I run immediately! ali

// with return
(function name(name) {
  return `I run immediately! ${name}`;
})("ali");
// I run immediately! ali

// with arrow function
(() => {
  console.log("I run immediately!");
})();// I run immediately!

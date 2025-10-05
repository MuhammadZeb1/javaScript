



function a() {
  console.log("Inside a");
  b();
}

function b() {
  console.log("Inside b");
}

a();
console.log("End");

/* 
Call Stack Flow:

Start → [ Global ]

Call a() → [ Global, a ]

Call b() → [ Global, a, b ]

Finish b → [ Global, a ]

Finish a → [ Global ]

End program → [ Empty ]



Great question 👍 Let’s break it down step by step so you clearly understand how JavaScript executes code and the role of the call stack.

🔹 1. JavaScript Execution Context

JavaScript is a single-threaded language, meaning it executes one task at a time in a sequence.

Whenever JS code runs, it creates an Execution Context which has:

Memory Component (Variable Environment) → stores variables and functions.

Code Component (Thread of Execution) → where the code is executed line by line.

🔹 2. Call Stack

The Call Stack is a data structure (stack → LIFO: Last In, First Out) used to keep track of function execution.

When a function is invoked, a new execution context is created for it.

This execution context is pushed onto the call stack.

When the function finishes, its execution context is popped off the stack.

🔹 3. Execution Flow Example
function a() {
  console.log("Inside a");
  b();
}

function b() {
  console.log("Inside b");
}

a();
console.log("End");

Step by Step in the Call Stack:

Global Execution Context (GEC) is created → pushed into the stack.

a() is called → Execution context of a is created → pushed to stack.

Inside a, console.log("Inside a") executes.

b() is called → Execution context of b is created → pushed to stack.

Inside b, console.log("Inside b") executes → b finishes → popped off the stack.

Back to a, function finishes → popped off the stack.

Global context executes console.log("End").

Finally, the Global Execution Context is popped when the program ends.

🔹 4. Visualization of Call Stack
Initial:
[ Global ]

After calling a():
[ Global ]
[ a ]

After calling b():
[ Global ]
[ a ]
[ b ]

After b finishes:
[ Global ]
[ a ]

After a finishes:
[ Global ]

After program ends:
[ Empty ]

🔹 5. Key Points

JavaScript executes code synchronously, one line at a time.

Call stack keeps track of where we are in the execution.

If functions keep calling themselves without ending, the stack overflows (→ Stack Overflow Error).

⚡ Quick Check for You:
Do you also want me to explain how asynchronous code (like setTimeout, Promises) works with the Call Stack + Event Loop + Callback Queue? That’s the next step after this.
*/
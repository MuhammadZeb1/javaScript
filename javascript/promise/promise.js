// Define the promises
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task One");
    resolve("Promise One Resolved");
  }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task Two");
    resolve("Promise Two Resolved");
  }, 1000);
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task Three");
    resolve("Promise Three Resolved");
  }, 1000);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task Four");
    resolve("Promise Four Resolved");
  }, 1000);
});

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task Five");
    resolve("Promise Five Resolved");
  }, 1000);
});

// Handle promises using async/await
async function handlePromises() {
  try {
    

    const result5 = await promiseFive;
    console.log(result5);
  } catch (error) {
    console.log("Error:", error);
  }
}

handlePromises();

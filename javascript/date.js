const myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toISOString())// 2025-09-22T14:28:38.796Z
// console.log(myDate.toDateString())// Mon Sep 22 2025
// console.log(myDate.toLocaleString()) // 22/09/2025, 7:28:38 am

// const myOwnDate = new Date(2003,2,23)
// const myOwnDate = new Date(2003,2,23,12,7,)
// const myOwnDate = new Date("2003-03-23")// yy-mm-dd
// const myOwnDate = new Date("3-23-2003")// mm-dd-yy
// console.log(myOwnDate.toLocaleString()) // 23/03/2003, 12:00:00 am

const date = new Date(); // or new Date(Date.now())
console.log(date.getTime());        // 1695389318796
console.log(date.getFullYear());    // 2025
console.log(date.getMonth());       // 8 (September, 0-indexed)
console.log(date.getDate());        // 22
console.log(date.getHours());       // 7 (depends on local time)
console.log(date.getMinutes());     // 28
console.log(date.getSeconds());     // 38
console.log(date.getMilliseconds());// 796

console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" })); // 9/21/2025, 11:28:38 PM

console.log(Math.floor(date.getTime() / 1000)); // 1695389318 (seconds)

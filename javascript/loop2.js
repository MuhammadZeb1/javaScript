// for of loop 
const arr = [1, 2, 3, 4, 5, 4, 5];
const uniqArr = [];
const dupArr = [];

for (const val of arr) {
    if (uniqArr.indexOf(val) === -1) {   // check کریں کہ val پہلے uniqArr میں موجود نہیں ہے
        uniqArr.push(val);               // اگر نہیں ہے تو add کریں
    } else {
        dupArr.push(val);                // اگر پہلے سے موجود ہے تو duplicate array میں ڈالیں
    }
}

// console.log("Unique:", uniqArr);
// console.log("Duplicates:", dupArr);


// for of loop on array


const arr2 = [1, 2, 3, 4, 5];
for (const val of arr) {
    // console.log(val);
}

// for of loop on string
const str = "hello world";
for (const val of str) {
    // console.log(val);
}



// maps 
/* 
🔹 Definition

A Map in JavaScript is a built-in object that stores key-value pairs.
Unlike objects, the keys in a Map can be of any data type
 (string, number, object, function, etc.), and it preserves the insertion order of the keys.
 🔹 Key Points

Keys can be any type (not just strings).

Maintains the order in which elements are added.

Provides a .size property to know how many entries exist.

Easy iteration using for...of or .forEach().
 */

const map2 = new Map()

map2.set("name", "ali")
map2.set("age", 22)
map2.set("gender", "male")
map2.set("gender", "male")
// console.log(map2)

for (const [key, value] of map2) {
    // console.log(key, value)
}

const map = new Map();

map.set("name", "Muhammad Zeb");
map.set(10, "Ten");
map.set({ id: 1 }, "Object as a key");

// console.log(map)
// console.log(map.get("name"));  // Muhammad Zeb
// console.log(map2.size);         // 3

// for of loop on object

const obj = {
    name: "Muhammad Zeb",
    age: 22,
    gender: "male",
};

for (const [key, value]of obj) {
    // console.log(key, value);// obj is not iterable
}

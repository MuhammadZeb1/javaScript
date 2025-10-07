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

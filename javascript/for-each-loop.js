const arr = [1, 2, 3, 4, 5];
arr.forEach((element,index,arr) => {
    // console.log(element,index,arr);
});




// for each loop on array of object 

const aO = [
    {
        name :"khan",
        city:"peshawer"
    },

    {
        name :"ali",
        city:"karachi"
    },
    {
        name :"numan",
        city:"lahore"
    },
]


aO.forEach((item)=>(
    console.log(item.name)
))

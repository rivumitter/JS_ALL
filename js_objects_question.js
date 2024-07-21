// q1. multiplyByTwo(obj) convert all numeric property mul by two

/*
let nums = {
    a: 100,
    b: 200,
    title: "my nums"
}

function multiplyByTwo(nums) {
    if(nums) {
        for(key in nums) {
            let val = nums[key];
            if(typeof val === "number") {
               nums[key] = val*2;
            }
        }
    }
}

multiplyByTwo(nums);

console.log(nums);
*/

// q2
/*
const a = {};

const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;

console.log(a[b]);

a[c] = 456;

console.log(a[b]); //  bcz when we are assigning a object as a key it converted to [object Object] 
// same for a[b] and a[c] so last one is ovveriden

*/


// JSON.stringify(obj) -> obj to string 
// JSON.parse(str) -> string to obj 

// use case local storage 

function getItems(fruitList, favFruit, ...args) { // ...rest has to be last param
    return [...fruitList, ...args, favFruit];
}

// console.log(getItems(["banana","apple"],"peer","orange"));


// 

const value = {
    number: 10
}

 const multply = (x = {...value} ) => { // {..value} is creating a new obj which is not reffrencing value
    console.log(x.number*=2);
 }

 multply();
 multply();

 multply(value);
 multply(value);
// custom map polifill 

// Array.map(num, i , arr)

/*
Array.prototype.myMap = function(cb) {
    let temp = [];

    for(let i=0;i<this.length;i++) {
        temp.push(cb(this[i], i, this));
    }

    return temp;
}


let arr = [1,2,3,4];

let ans = arr.myMap((num, i, arr) => num * 2);

console.log(ans);

*/

// filter polifills

/*
Array.prototype.myFilter = function(cb) {
    let temp = [];

    for(let i=0;i<this.length;i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }

    return temp;
}

let arr = [1,2,3,4];

let ans = arr.myFilter((num, i, arr) => num % 2 == 0);

console.log(ans);

*/


// reduce polifills

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;

    for(let i=0;i<this.length;i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]; 
    }

    return accumulator;
}



let arr = [1,2,3,4];

let ans = arr.myReduce((accumulator, num, i, arr) => accumulator + num, 0);

console.log(ans);
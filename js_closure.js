// q1

/*
function createBase(initial) {
    return function (val) {
        return (initial + val);
    }
}

let addSix = createBase(6);

console.log(addSix(10));

console.log(addSix(21));

*/

// q2
/*
function find() {
    let arr = [];

    for(let i=0;i<10000;i++)
        arr[i] = i*i;

    return function(index) {
        console.log(arr[index]);
    }
}

let closure = find(); // the array is calculated ... 

closure(9);

closure(81);

*/

// print 0 1 2 without let in setTimeout 
/*
for(var i=0;i<3;i++) {

    function inner(index) {
        setTimeout(()=>{
            console.log(index);
        }, (index*1000));
    }

    inner(i);
}
*/

// q3 private counter
/*
function counter() {
    let _count = 0;

    function add(val) {
        _count+=val;
    }

    function retrive() {
        return _count;
    }

    return {
        add,
        retrive
    }
}

const c1 = counter();

c1.add(10);
c1.add(8);

console.log(c1.retrive());

const c2 = counter();

c2.add(6);
c2.add(11);

console.log(c2.retrive());
*/

// q4 module pattern
/*
const Module = (function() {
    function privateFun() {
        console.log("private");
    }

    return {
        publicFun: function () {
            console.log("public");
           privateFun();
        }
    }
})();

Module.publicFun();

Module.privateFun();
*/

//q5 make function run once

let view;

function printView() {
    let count = 0;
    view = "new view";
    return function () {
        if (count > 0)
            console.log("already viewed");
        else {
            console.log(view);
            count++;
        }
    }
}

const isViewed = printView(); // by this scope of count is made and gonna be reused 

isViewed();
isViewed();
isViewed();



/*
const animals = [
    {species: "Lion", name: "king"},
    {species: "Whale", name: "Queen"}
];


function printAnimal(i) {
    this.print = function() {
        console.log("#"+i+" "+ this.species + " " + this.name);
    }

    this.print();
}

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];

    printAnimal.call(animal, i);
    
}
*/

// concat using apply 

/*

const arr = [1,2,3];

const temp = ['a','b','c'];

arr.push.apply(arr, temp);

console.log(arr);

*/

/*
function checkPwd(ok, fail) {
    let pwd = prompt("enter ur pwd", "");

    if("rivu"===pwd) {
        ok();
    }
    else
        fail();
}

let user = {
    name: "Arghya",
    // login: (result)=> { // arrow funtion will not work with call bind apply , it will always reffer to its parent notmal func . here window
    //     console.log(this.name + (result ? " login success" : " login failed"));
    // }

    login: function (result) {
        console.log(this.name + (result ? " login success" : " login failed"));
    }
}

checkPwd(user.login.bind(user, true), user.login.bind(user, false));

*/



// polyfill for call bind apply 

// apply 

/*

let car = {
    name: 'BMW',
    color: 'Red'
}

function purchaseCar(currency, price) {
    console.log(`I have purchased a ${this.color} color ${this.name} for ${currency}:${price}`);
}

Function.prototype.myApply = function (context, args) {
    if(typeof this!='function') {
        throw new Error('Not a funtion');
    }

    context.fn = this;
    context.fn(...args);
}


purchaseCar.myApply(car, ['rupee', 50000000]);

*/

// call 

/*
let car = {
    name: 'BMW',
    color: 'Red'
}

function purchaseCar(currency, price) {
    console.log(`I have purchased a ${this.color} color ${this.name} for ${currency}:${price}`);
}

Function.prototype.myCall = function (context, ...args) {
    if(typeof this!='function') {
        throw new Error('Not a funtion');
    }

    context.fn = this;
    context.fn(...args);
}


purchaseCar.myCall(car, 'dollar', 50000000);

*/

/*

let car = {
    name: 'BMW',
    color: 'Red'
}

function purchaseCar(currency, price) {
    console.log(`I have purchased a ${this.color} color ${this.name} for ${currency}:${price}`);
}

Function.prototype.myBind = function (context, ...args) {
    if(typeof this!='function') {
        throw new Error('Not a funtion');
    }

    context.fn = this;

    return function(...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}


let pc = purchaseCar.myBind(car,'USD');

pc(50000000);

*/

/*
const user = {
    name: "rivu",

    printName() {
        console.log("name is: "+ this.name);
    }
}

setTimeout(user.printName.bind(user), 2000);

*/

const cal = {

    total: 0,

    add(num) {
        this.total = this.total + (+num);
        return this;
    },
    muliply(num) {
        this.total = this.total * (+num);
        return this;
    },
    substract(num) {
        this.total = this.total - (+num);
        return this;
    }
}


const result = cal.add(10).muliply(5).substract(30).add(10);

console.log(result.total);





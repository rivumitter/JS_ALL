/*
const alph = ['A', 'B', 'C', 'D', 'E'];

const num = [1,2,3,4,5];

const [a, b, ...rest] = alph; // spread the rest

console.log(a);
console.log(b);
console.log(rest);

const newArr = [...alph, ...num];

console.log(newArr);

*/

/*

const personOne = {
    name: 'rivu',
    age: 27,
    address: {
        state: 'West Bengal',
        city: 'Howrah'
    }
};

const personTwo = {
    name: 'arghya',
    age: 26,
    address: {
        state: 'Karnataka',
        city: 'Bengaluru'
    }
};


const { name, address: { state = 'Kolkata' } } = personTwo; // unlike array its based on name of the key of the obj
// using = we can define default value and using : we can aias it eg: state: homeState = 'Kolkata'

console.log(state);

const newPerson = { ...personOne, ...personTwo }; // ovveride all keys of personOne with personTwo

console.log(newPerson);


function printPerson({ name, address: { city } }) {
    console.log(`name is ${name} and city is ${city}`);
}


printPerson(personOne);

*/

// dynamic key and value 
/*

const property = "firstName";
const value = "Rivu";

const user = {
    [property]: value
};
//user[property] = value;

console.log(user);


*/

// loop 

const personTwo = {
    name: 'arghya',
    age: 26,
    address: {
        state: 'Karnataka',
        city: 'Bengaluru'
    }
};

for(key in personTwo) {
    console.log(key+":"+personTwo[key]);
}
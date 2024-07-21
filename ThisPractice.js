function makeUser() {
    return {
        name: 'rivu',
        ref: function() {
            return this;
        }
    }
}

let user = makeUser();

//console.log(user.ref().name);

const person = {
    name: 'arghya',
    logMessage() {
        console.log(this.name);
    }
}

setTimeout(person.logMessage, 2000);
// to solve the above we need to set the context 
// setTimeout(person.logMessage.bind(person), 2000);
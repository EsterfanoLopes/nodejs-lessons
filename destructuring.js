// ---- Object ---- //
const person = {
    name: 'Max',
    age: 29,
    // greet: function() {
    //     console.log('Hi, I am ' + this.name)
    // },
    // Inside object short function syntax
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

// Using destructuring in arguments of a function. 
// We say exactly what we want from the incoming object
const printName = ({ name, age }) => {
    console.log(name, age);
}
printName(person);

// Destructuring an object
const {name, greet} = person;
console.log(name, greet);

// ---- Array ---- //

// Destructuring a array
const hobbies = ['sports', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
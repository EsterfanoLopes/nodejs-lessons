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
// Spread Operator. Pull out all elements from an array or properties from an object.
const copiedPerson = {...person};
console.log(copiedPerson);


const hobbies = ['sports', 'cooking'];

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// // Functions of array. Using short function with one argument in .map
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // original array
// console.log(hobbies);

// hobbies.push('RPG');
// console.log(hobbies);

// Spread Operator. Pull out all elements from an array or properties from an object.
const copiedArray = [...hobbies];
console.log(copiedArray);

// Spread Operator will turn in Rest operator when
// used to merge n elements in one array
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4));
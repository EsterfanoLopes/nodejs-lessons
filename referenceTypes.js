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

const hobbies = ['sports', 'cooking'];

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// // Functions of array. Using short function with one argument in .map
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // original array
// console.log(hobbies);

hobbies.push('RPG');
console.log(hobbies);
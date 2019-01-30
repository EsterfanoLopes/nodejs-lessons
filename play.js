const name = "Max";
let age = 29;
const hasHobbies = true;
// Do not never assign const constants
age = 30;

// General function syntax
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' +
        userHasHobby
    );
};
console.log(summarizeUser(name, age, hasHobbies));

// Short syntax to one line function. This will return a + b;
const add = (a, b) => a + b;
console.log(add(1, 2));

// Short tag to one line function with one argument only. This will return a++
const addOne = a => a + 1;
console.log(addOne(1));

const addRandom = () => 3 + 2;
console.log(addRandom());
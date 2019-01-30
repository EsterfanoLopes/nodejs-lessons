const name = "Max";
let age = 29;
const hasHobbies = true;
// Do not never assign const constants
age = 30;

function summerizeUser(userName, userAge, userHasHobby) {
    return (
    'Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' +
    userHasHobby
    );
}

console.log(summerizeUser(name, age, hasHobbies));
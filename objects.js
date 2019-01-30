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

person.greet();
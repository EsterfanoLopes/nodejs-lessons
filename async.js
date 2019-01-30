// // Callback inside callback - USE PROMISSES!
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!');
//     }, 1500);
// };

// // async
// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);

const fetchData = () => {
    const promisse = new Promise((resolve, refect) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promisse;
};

// async
setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData()
    }).then(text2 => {
        console.log(text2);
    });
}, 2000);

// sync
console.log('Hello!');
console.log('Hi!');

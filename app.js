"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const strResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    return +num1 + +num2;
}
const printResult = (resultObj) => {
    console.log(resultObj.val);
};
if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = add(+num1, +num2);
        const stringResult = add(num1, num2);
        numResults.push(result);
        strResults.push(stringResult);
        console.log(numResults, strResults);
        printResult({ val: result, timestamp: new Date() });
    });
}
const myPromise = new Promise<string>((res, rej) => {
    setTimeout(() => {
        res('It worked!');
    }, 1000);
});
myPromise.then((result => {
    console.log(result.split('w'));
}));

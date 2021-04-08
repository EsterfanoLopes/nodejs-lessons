const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

const numResults: number[] = [];
const strResults: string[] = [];

type NumberOrString = number | string;
type Result = { val: number; timestamp: Date }

interface resultObj {
  val: number;
  timestamp: Date;
}

function add(num1: NumberOrString, num2: NumberOrString) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }

  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + '' + num2;
  }

  return +num1 + +num2;
}

const printResult = (resultObj: resultObj) => {
  console.log(resultObj.val)
}

if (buttonElement) {
  buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    
    numResults.push(result as number);
    strResults.push(stringResult as string);
    
    console.log(numResults, strResults);

    printResult({ val: result as number, timestamp: new Date() });
  });
}

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('It worked!');
  }, 1000);
});

myPromise.then((result => {
  console.log(result.split('w'))
}))

// accumulator
const arr = [1, 2, 3, 4, 5, 6];

// single value output
// sum | avg | max | mix etc...

// accumulator = sum var -- initial value  = accumulator
// function sum (accumulator, current){
//     accumulator += current;
//     return accumulator;
// }

const sumTotal = arr.reduce(
    (accumulator, current) => {
        accumulator += current;
        return accumulator;
    }
    ,5);

console.log(sumTotal);

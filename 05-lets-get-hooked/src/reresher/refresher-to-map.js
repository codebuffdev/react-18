const arr = [1,2,3,4,5,6];
// transformation

// f() {double the value of arr}
// f() {square the value of arr}
// f() {find binary  value of arr ele}
// array.map(f);

function double (x) {
    return x * 2;
}

function binary(x){
    return x.toString(2);
}

const output = arr
.map(double);

const binaryForm = arr.map(binary);

console.log(arr);
console.log(binaryForm);
console.log(output);

console.log(arr.map(x => x * x));

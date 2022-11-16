// Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array – double([1,2,3]) // [2,4,6].

// Imperative code:
function double(array) {
    let newArray = [];
    for (let i = 0; i < 100, i++) {
    newArray.push(array[i] * 2);
    }
    return newArray;
};

// Declarative code:
function double(array) {
    return array.map((item) => item * 2);
};
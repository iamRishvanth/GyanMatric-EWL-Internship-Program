let myBoolean = true;
let myString = "hello world";
let firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
let myArray = [];
myArray.push(myBoolean);
myArray.push(myBoolean);
let myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber
};
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);



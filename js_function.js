function myFunction(string){
  console.log("Hai, ",string);
  console.log("i am a normal function");
}

let arrowFunction = (string) => {
  console.log("Heyy, ",string);
  console.log("i am an arrow function");
  return "arrow function was runned and returned a string";
}

myFunction("Rishvanth");

let returnValue = arrowFunction("Ashok");

console.log(returnValue);

'use strict';

console.log("Hello World");
console.log("this is Javascript");

let x = "hello";
x = 42;

let Hourslept;
console.log(Hourslept);

console.log( typeof x);

console.log("40"+2);// prints 402 as a string, tries to int> string bc its easier

console.log("40"-2); // prints 38

const num = 10;
const str = "10";

const result = (num == str);
const result2 = (num === str);

console.log(result);
console.log(result2);

const test = 0;
const test2 = "";
console.log( (test == test2));

// Arrays
const lettersArray = ["a","b","c"];

console.log(lettersArray);

console.log(lettersArray[2]);

lettersArray[5] = "f";

console.log(lettersArray);

lettersArray [7] = "i";


console.log(lettersArray);

console.log(lettersArray.length);

lettersArray.push("z");

console.log(lettersArray);

const Friends = ["Carlos Marroquin","Boris Uittenbogard","Mariano Calderon"]

console.log(Friends);

const dinnnerOptionsList = [
    ["chicken","other one"],
    ["wowo a second list","this is crazy"],
    ["this looks like a last list","it sure does"]
];

const fishoption = dinnnerOptionsList[2];// the third line

// Objects literally just hashmaps

const exampleObjects ={"sarah":42,"amit":35,"zhang":13}// values can literallly be whatever but keys are always STRINGS
// you can often skip the quotes for objects since the first object is always a string

const keyArray = Object.keys(exampleObjects);

console.log (keyArray);

const ages0bj = {alice:40, bob:35, charles:13};

//access ("look up") values
console. log ( ages0bj ['alice'] ); //=> 40
console. log( ages0bj ['bob'] ); //=> 35
console. log( ages0bj ['charles'] ); //=> 13

//keys not in the object have undefined values
console. log( ages0bj ['fred']); //=> undefined

//assign values
ages0bj ['alice'] = 41;
console. log( ages0bj ['alice'] ); //=> 41

ages0bj ['fred' ] = 19; //adds the key and assigns value

console. log( ages0bj ['fred']); //=> 19

const person = {
firstName: 'Alice',
lastName: "Wong",
age: 40,
favorites: {
music: 'jazz',
food: 'pizza',
numbers: [12, 42]
}
};

// can use . notation like in R

// this i fine

console.log(person["firstName"]);//c this one is required for variables

// this is also fine

console.log(person.firstName); // either work

const peopleArray = [
{name: 'Ada', height: 64, weight: 135},
{name: 'Bob', height: 74, weight: 156},
{name: 'Chris', height: 69, weight: 139},
{name: 'Diya', height: 69, weight: 144},
{name: 'Emma', height: 71, weight: 152}

]

console.log(peopleArray[1].height);

// for loops are of for

for ( let i=0; i< peopleArray.length;i++){
    const thePerson = peopleArray[i];
    console.log(thePerson);
}

// enhanced for loops or foreach probably better 80% of the time

for (const thePerson of peopleArray){ //  you can also do this with object but you use in instead
    console.log(thePerson.name);
}

// you can also loop explicitely through the keys of an object for clarity
const keysArray =Object.keys(person);
for (const key of keysArray){
    console.log(key+":"+person[key]);
}


// functions time

function merge (param1, param2){
    return param1 +" "+ param2;
}

console.log(merge("Howdy","Hey"))
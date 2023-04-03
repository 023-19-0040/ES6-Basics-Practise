// Task 1: Introduction

console.log('Hello, ES6!!!!!!!!!');

console.log('I am saiqa ,hello world!!')



// ---------------------------------------------
// Task 2: Variables (let) and Scoping
//Var has functional  Scope 

console.log(dogo)
var dogo='Akita';
console.log(dogo);
var dogo='Shipe'
console.log(dogo)
dogo='Cho cho'
console.log(dogo)



//console.log(cate)
let cate='british short hair'
console.log(cate)
 cate ='Turkish Angora'
console.log(cate)

var dogo='Akita'
function printBreed(){
    let dogo="Cocker Spaniel";
    console.log('insode:'+dogo)
}
printBreed();
console.log('outsode:'+dogo)

/*for(let i=0;i<2;i++){
    let parrot='Hey!'
}
console.log(parrot);
console.log(i)*/


// Task 2: Execise 1: Fix the code to print 15

let age = 15;

for (let age = 1; age <= 10; age++) {
  console.log(age);
}

console.log(age); // Should print 15 instead of 10

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

 let myDog = "Jack Russell Terrier";
 let shortLeggies = true;

if (shortLeggies) {
         let myDog = "Welsh Corgie";
 console.log(myDog);
} else {
    let myDog = "Border Collie";
   console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier







// ---------------------------------------------
// Task 3: Variables (const) and Immutability








// TASK 3: Exercise: Refactor the code to use let/const

var painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};
Object.freeze(painter)
Object.freeze(painter.paintings)
//painter.birthDate = "March 30, 1853";
//painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }





// ---------------------------------------------
// TASK 4: Destructuring
const recipe={
    name:'Red lentil',
    timeInMinutes:30,
    ingredients:['red lentils','cumin',
    'turmeric']

}
//const name=recipe.name;
//const ingredients=recipe.ingredients;
const {name:myname,ingredients:ing}=recipe;
console.log(recipe,myname,ing)
const spices=['A','B','C']
const[a,b]=spices;
console.log(a,b)

function cook({name,ingredients}){
    console.log(name);
    console.log(ingredients)
}
cook(recipe)
// Task 4: Exercise: Extract data with destructuring

 const ingredients = {
//tea: 'black',
    milk: 'soy',
sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg'] }

// // Destructure the parameters
function prepareChai({tea='regular',spices,milk,sweetener}) {
    // const tea = ingredients.tea;
    // const spices = ingredients.spices;
    // const milk = ingredients.milk;
    // const sweetener = ingredients.sweetener;

    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(ingredients);





// ---------------------------------------------
// TASK 5: Strings and Interpolation
const language='English';
console.log(language.includes("g"))
console.log(language.startsWith("Eng"))
console.log(language.endsWith("sh"))
console.log(language.repeat(3))

console.log('I Speak '+language)
console.log(`I Speak ${language==="English"?"British English":"None"}`)





// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

const country = "Bulgaria";
const city = "Sofia";

if (country.startsWith("Bulg")) {
    console.log("The country starts with Bulg");
}

if (city.startsWith('So')) {
    console.log("The name starts with So");
}

if (city.endsWith('a')) {
    console.log("The name ends with a");
}

console.log(`The capital of  ${country} is the city of ${city}`
);









// ---------------------------------------------
// TASK 6: Arrow functions

const numbers = [1,2,3,4,5,6]
// let doubledNumbers = numbers.map(
//     function(number){
//         return number *2;
//     }
// )

let doubledNumbers=numbers.map(
    // (number)=>{
    //     return number*2;
    // }
    //simple way
    number=>number*2
)
console.log(doubledNumbers)
const doublecalculate=number=>number*2;
console.log(numbers.map(doublecalculate))



// TASK 6: Exercise: Filter out only the prime numbers from the array
const isPrime=number=>number%2===0;
const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime);

console.log(primeNumbers);
console.log(primeNumbers);






// ---------------------------------------------
// TASK 7: Arrow functions and this
function Dog(){
    this.age=0;
    setInterval(()=>{
        this.age+=1;
        console.log(this.age);
    },1000);
    }
    //const puppy=new Dog();
    // const isOdd=()=>{console.log(arguments)
    // return arguments[0]%2===1};
    // console.log(isOdd(1))//false
    const isOdd=(...args)=>{console.log(args)
        return args[0]%2===1;};
        console.log(isOdd(1,2,3,4))







// Task 7: Exercise

function Translator() {
   this.phrase = "good day";
   this.englishBulgarianDictionary = {
       good: "добър",
       day: "ден"
   }
}

Translator.prototype.getBulgarianPhrase = function() {
   return this.phrase
       .split(" ")
       .map((word) => this.englishBulgarianDictionary[word])
       .join(" ");
}
 
const translator = new Translator();
console.log(translator.getBulgarianPhrase());

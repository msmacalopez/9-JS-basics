console.log("Hellow js");

// alert("dfdfdf");

// create and assign value
name1 = "maca"; //if u don't say anything, it saves as VAR
console.log(name1);

// only creating
var name2;
// assign values
name2 = "suman";
name = "sofia";

console.log(name2, name1);

//maths
let c = 9;
const b = 0;
//change in memory:
console.log(c++);
//shows/read first and later update in memory
console.log(c);
console.log(++c);
//update first and later print/read

//Comparisons
//==, === (case sensitive)

// check datatype
console.log(typeof c);
let fname = null;
console.log(typeof fname);

let lname;
console.log(typeof lname);

// Referencial datatype => object, array, functions
//OBJECT
const user2 = {};
console.log(user2, typeof user2); //type is object

const userObject = {
  fName: "Prem",
  phone: 2345,
};
console.log(userObject);
console.log(typeof userObject);

//ARRAY -->they must be store in sequential order
const userArray = [];
// console.log(userArray);  --> non defined
console.log(typeof userArray);
userArray2 = ["prem", 2345, true, { skills: "lots, css" }];
console.log(userArray2);
console.log(typeof userArray2);

//FUNCTION
function add() {
  console.log(1 + 2);
}
console.log(add());

//check values in Primitive datatype
let fName = "maca";
const user = fName;
console.log(fName, user);
fName = "prem";
console.log(fName, user);

//check values in Referencial datatype
const object1 = {
  fName: "maca",
};

const object2 = object1;
console.log(object1, object2);
object1.fName = "prem";
console.log(object1, object2);

//Class MATH
const myvalue = Math;
console.log(myvalue); //check Math possible values

console.log(Math.round(4.4999));
console.log(Math.ceil(4.0000001));
console.log(Math.floor(4.9999));

console.log(Math.pow(5, 3));
console.log(Math.sqrt(25));
console.log(Math.cbrt(125));

console.log(Math.min(10, -33));
console.log(Math.max(10, -33));

console.log(Math.random()); //   ]0-1[

//---------------------Conditions // control flow (if)
//true: true, 1, "sdf",{}, [], ()=>{}
//false: false, 0, "", null, undefined
console.log(true);
//if
let cns = () => {};
cns = false;
if (!cns) {
  console.log("condition 2 is true");
} else console.log("condition 2 is false");
// if else
const age = 18;
if (age >= 18) {
  console.log("Come In");
} else console.log("Sorry only adults");
//else if
const pet = "cat";
if (pet === ("cat" || "dog")) {
  console.log("Nice pet");
} else if (pet === "rino") {
  console.log("Be careful");
} else {
  console.log("alien");
}
//switch
switch (pet) {
  case "cat":
    console.log("meowww");
    break;
  case "dog":
    console.log("wooof");
    break;
  case "cow":
    console.log("momooo");
    break;
  default:
    console.log("nott");
    break;
}

//------inline if condition
cns = false;
cns = cns || "prem";
cns && console.log("its true");
console.log(cns); //prints "prem" not "true"

//if else TERNARY:  exp1?true:false;
age >= 18 && true ? console.log("Adult") : console.log("Minor");
age >= 18 ? console.log("Adult") : console.log("Minor");

pet === "cat"
  ? console.log("meowww")
  : pet === "dog"
  ? console.log("wooof")
  : pet === "cow"
  ? console.log("momooo")
  : console.log("nott");

try {
  const ffname = "maca";
  throw new Error("Test error throw");
  //   const bio = ffname + " is the person you will meet";
  //   console.log(bio);
} catch (error) {
  //send
  console.log(error.message);
} finally {
  //this part will be always executed
  console.log("This executes anyways");
}

//Timeschedulling
//set time out: wait for 3 second to execute the FX inside
setTimeout(() => {
  console.log("From set timeout");
}, 3000);

//set Interval: know the time interval and keep executing after the interval time
// let i = 0;
// const counter = setInterval(() => {
//   console.log("from interval", i++);
//   if (i === 10) {
//     clearInterval(counter);
//   }
// }, 1000);

//challenge

console.log("1. starting");
console.log("2. starting");
console.log("3. starting");
console.log("4. starting");
console.log("5. starting");
console.log("6. starting");

console.log("1 executed");

const info = () => {
  console.log("2 executed");
};

console.log("3 executed");

setTimeout(() => {
  console.log("4 executed goes to call back queue position 2");
}, 1);

info();

setTimeout(() => {
  console.log("5 executed goes to call back queue position 1");
}, 0);

console.log("6 executed");
console.log("6 executed");
console.log("6 executed");
console.log("6 executed");
console.log("6 executed");

// debugger;

// Loops
//for

//while

//do while

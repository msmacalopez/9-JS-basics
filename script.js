console.log("Hellow js");

// alert("dfdfdf");

//Primitive datatypes: number, string, boolean, undefined, null

// create and assign value
name1 = "maca"; //if u don't say anything, it saves as VAR
console.log(name1);

// only creating
var name2;
// assign values
name2 = "suman";

console.log(name2, name1);

//maths
a = 3;
console.log(typeof a); //number

let c = 9;
const b = 0;

//change in memory:

console.log(c++); //9
//shows/read first and later update in memory

console.log(c); //10
console.log(++c); //11
//update first and later print/read

//Comparisons
//==, === (case sensitive, type sensitive)

// check datatype
console.log(typeof c); //number

let fname = null;
console.log(typeof fname); // object

let lname;
console.log(typeof lname); //undefined (cause doesn't have any value, only declared)

// Referencial datatype => object, array, functions
//OBJECT
const user2 = {};
console.log(user2, typeof user2); //type is object

const userObject = {
  fName: "Prem",
  phone: 2345,
};
console.log(userObject); //{}
console.log(typeof userObject); //object

//ARRAY -->they must be store in sequential order
const userArray = [];
console.log(userArray); // []
console.log(typeof userArray); //object

let userArray2;
userArray2 = ["prem", 2345, true, { skills: "lots, css" }];
console.log(userArray2);
console.log(typeof userArray2); //object

//FUNCTION
function add() {
  console.log(1 + 2);
}
add();
console.log(typeof add()); //undefined

//check values in Primitive datatype
let fName = "maca";
const user = fName; //assign value not pointing
console.log(fName, user); //maca maca
fName = "prem";
console.log(fName, user); //prem maca

//check values in Referencial datatype
const object1 = {
  fName: "maca",
};

const object2 = object1; //object2 point same than object1
console.log(object1, object2); //maca maca

object1.fName = "prem";
console.log(object1, object2); //prem prem (inside object)
console.log(object1.fName, object2.fName); //prem prem (only values)

//Class MATH
const myvalue = Math;
console.log(myvalue); //check Math possible values

//Math property
console.log(Math.PI);

//Math methods
console.log(Math.round(4.4999));
console.log(Math.ceil(4.0000001));
console.log(Math.floor(4.9999));

console.log(Math.pow(5, 3));
console.log(Math.sqrt(25));
console.log(Math.cbrt(125));

console.log(Math.min(10, -33));
console.log(Math.max(10, -33));

console.log(Math.random()); //   [0-1[

//---------------------Conditions // control flow (if)
//true: true, 1, "sdf",{}, [], ()=>{}
//false: false, 0, "", null, undefined
console.log(true);

//if
let cns = () => {};
// cns = false;
if (!cns) {
  console.log("cnd 2 is false");
} else console.log("cnd 2 is true");

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

//switch (case, break, default)
switch (pet) {
  case "cat":
    console.log(`meowww ${pet}hino`);
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
cns = cns || "prem"; //cns now is true
cns && console.log(`cns is true: ${cns}`); //print
!cns && console.log("this one never prints, only prints when !cns=true");
console.log(cns); //prints "prem" not "true"

//if else TERNARY:  exp1?true:false;
age >= 18 && true ? console.log("Adult") : console.log("Minor");
age >= 18 ? console.log("Adult") : console.log("Minor");

//if - else if... - else
pet === "cat"
  ? console.log("meowww")
  : pet === "dog"
  ? console.log("wooof")
  : pet === "cow"
  ? console.log("momooo")
  : console.log("N/A");

try {
  const ffname = "maca";
  console.log("Executes?: YES");
  throw new Error("Test error throw"); //this is the message
  //   const bio = ffname + " is the person you will meet";
  //   console.log(bio);
  console.log("Executes NO");
} catch (error) {
  //send
  console.log(error.message); //this prints the message
} finally {
  //this part will be always executed
  console.log("Finally: This executes always");
}

//Timeschedulling

//set time out: wait for 3 second to execute the FX inside

setTimeout(() => {
  console.log("From set timeout at 3sec");
}, 3000);

//set Interval: know the time interval and keep executing after the interval time

let ii = 0;
const counter = setInterval(() => {
  console.log("from set Interval", ii++);
  if (ii === 10) {
    clearInterval(counter);
  }
}, 1000);

//challenge: guess order of execution???
// console.log("1 executed");

// const info = () => {
//   console.log("2 executed");
// };

// console.log("3 executed");

// setTimeout(() => {
//   console.log("4 executed goes to call back queue position 2");
// }, 1);

// info();

// setTimeout(() => {
//   console.log("5 executed goes to call back queue position 1");
// }, 0);

// console.log("6 executed");

//SLN: EXECUTES: 1,3,2,6,5,4

// debugger;

// Loops
//for - next with problems:
for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    console.log(i);
    continue;
    //continue dismisses the rest of the for, to to next iteration
  }
  //the following never get to execute
  if (i === 6) {
    console.log(i);
    break;
  }
}

//while
let i = 0;
while (i <= 10) {
  i++;
  console.log(i);
}
//do while (executes at least 1 time)
i = 18;
do {
  console.log(i);
  i++;
} while (i <= 10);

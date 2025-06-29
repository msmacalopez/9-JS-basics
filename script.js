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
// setTimeout(() => {
//   console.log("From set timeout");
// }, 3000);

//set Interval: know the time interval and keep executing after the interval time
// let i = 0;
// const counter = setInterval(() => {
//   console.log("from interval", i++);
//   if (i === 10) {
//     clearInterval(counter);
//   }
// }, 1000);

//challenge

// console.log("1. starting");
// console.log("2. starting");
// console.log("3. starting");
// console.log("4. starting");
// console.log("5. starting");
// console.log("6. starting");

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
// console.log("6 executed");
// console.log("6 executed");
// console.log("6 executed");
// console.log("6 executed");

// debugger;

// Loops
//for - next with problems:
for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    console.log(i);
    continue;
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
//do while
i = 18;
do {
  console.log(i);
  i++;
} while (i <= 10);

//data manipulation
// safe Number = -2^53-1 to 2^53-1 (for JS specific)
const value = 2_132_143_432_432_432_423_443;
console.log(typeof value);

const no_number = "1234";
//string to number
let number = +no_number;
console.log(typeof number);
//string to number
number = Number(no_number);
console.log(typeof number);

//Parse
const no_number2 = "1o2.34a";
console.log(isNaN(no_number2)); //false-->is a number

//check number from left, digit by digit
number = parseFloat(no_number2);
console.log(isNaN(number), number);

//check number from left, digit by digit
number = parseInt(no_number2);
console.log(isNaN(number), number);

let value_withStrings = "2" + (3 + 3);
console.log(value_withStrings);

value_withStrings = 1 + 3 + "2";
console.log(value_withStrings);

value_withStrings = 1 + "2" + 3;
console.log(value_withStrings);

//String, without quatations only TRUE/FALSE or javascript class
const hi = "hello"; //'', "", ``

// skipt character: \
const hey = 'Hi, I\'m "Maca"\t \\ from Sydney';
console.log(hey);

const hola = `hi, i'm Macarena \t \ from chile`;
console.log(hola);

//concatenation
const n = "Maca";
const loc = "chile";
let bio = "Hi, this is " + n + " from h" + loc;
console.log(bio);

//new method: template literal
bio = `Hi, this is ${n} from ${loc} using string literals

`;
console.log(bio);

//count the total characters
const counting = bio.length;
console.log(counting);

//indexOf, lastIndexOf, search
const i1 = bio.indexOf("H"); //starts from 0
console.log(i1);

const i2 = bio.lastIndexOf("maca"); //not found is -1
console.log(i2);

const i3 = bio.search("z"); //not found is -1
console.log(i3);

//CharAt, [], split
let look = bio.charAt[5];
look = bio[5]; // same
console.log(look);

//split1
let split1 = bio.split(); //all 1 item of array
console.log(split1);

split1 = bio.split(""); //split every single split to the aarray
console.log(split1);

split1 = bio.split("Maca"); //split in Maca, but Maca disappears
console.log(split1);

//slice, substring //substr--> depricated
let slice1 = bio.slice(0, 5); //take string from 0 to 4, 5 is not included (5 is the length)
console.log(slice1);

slice1 = bio.slice(0); //takes everything from 0 to final
console.log(slice1);

// takes from left to right:
slice1 = bio.slice(-5); //last 5
console.log(slice1);

//replace, trim
let replace1 = bio.replace("chile", "Chile"); //only the first "chile"
replace1 = replace1.replaceAll("i", "I");
console.log(replace1);

//trim only trims spaces at the beggining and end
console.log(replace1.length);
replace1 = replace1.trim();
console.log(replace1.length);

//to UPPER OR LOWERCASE
replace1 = replace1.toLocaleLowerCase();
console.log(replace1);
replace1 = replace1.toLocaleUpperCase();
console.log(replace1);

// ------------------------------if else--------------------------------
/*
let age=prompt('Enter your age')
age=Number.parseInt(age)
if(age>10 && age<20){
    console.log('your age lies betwwen 10 and 20')
}else{
    console.log('your age dosnt lies betwwen 10 and 20')
}
*/

// ------------------------------switch case--------------------------------
/*
let bike = prompt("Select your dream bike from KTM, BENELI, BMWS1000RR, ZX10R");
if (bike != "") {
  switch (bike) {
    case "ktm":
      console.log("you have selected KTM");
      break;
    case "BENELI":
      console.log("you have selected BENELI");
      break;
    case "BMWS1000RR":
      console.log("you have selected BMW S1000RR");
      break;
    case "ZX10R":
      console.log("you have selected ZX10R");
      break;
    default:
      console.log("you have entered wrong choice");
  }
} else {
  alert("please enter your choice");
}
*/

// ----------------------if else----------------------------
/*
let num = prompt("please enter the number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Number is divisible by 2 or 3");
} else {
  console.log("Number is not divisible by 2 or 3");
}
*/

// --------------------using ternary opp---------------------
/*
let age = prompt("Enter your age");
console.log(age > 18 ? "you can drive the car" : "you can not drive the car");
*/

// --------------------------For Loop-----------------------------
/*
let sum = 0;
let n = prompt("Enter the vaue of n");
n = Number.parseInt(n);
for (i = 0; i < n; i++) {
  sum += i + 1;
  console.log(n);
}
console.log("sum of first " + n + " natural number is " + sum);
*/

// ---------------------------For in loop------------------------
/*
const bikes = {
  ktm: "rc200",
  bmw: "s100rr",
  ninja: "zx10r",
  beneli: "beneli600i",
  yamaha: "r1",
};
console.log("available bikes are ");
for (let a in bikes) {
  console.log(`${a}: ${bikes[a]} `);
  console.log();
}
*/
// ---------------------------For of loop------------------------
/*
const cars = {
  lambo: "avantador",
  bmw: "m4",
  mercedis: "sls",
  landcrusur: "range rover",
  porsche: "gt3r",
};
console.log("available cars are ");
for (let a of cars) {
  console.log(`${a}: ${cars[a]} `);
  console.log();
}
*/

// ---------------------------While loop------------------------
/*
let n=prompt('Enter the value of n')
n=Number.parseInt(n)

let i=0
while(i<n){
    console.log(i)
    i++;
}
*/

// ---------------------------Do While loop------------------------
/*
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 10;
do {
  console.log(i);
    i++;
} while (i < n);
*/

// ------------Functions for of loop---------------------------
/*
const students = {
  faiz: 50,
  arfaz: 60,
  faisal: 70,
  fareen: 80,
};
for (let i = 0; i < Object.keys(students).length; i++) {
  console.log(
    `marka of ${Object.keys(students)[i]} are ${
      students[Object.keys(students)[i]]
    }`
  );
}
*/
// ------------Functions for in loop---------------------------
/*
for (let key in students ){
    console.log(`marks of ${key} are ${students[key]}`)
}
*/
//---------------while loop-------------------------------
/*
let cn = 10;
let i;
while (i != cn) {
  i = prompt("Enter a number");
  console.log("Try again");
}
console.log("Number matched");
*/
// --------------------find mean of ---------------------
/*
const mean = (a,b,c,d) => {
  return (a+b+c+d)/4;
};
console.log(Math.round(mean(4,5,6,7)))
*/
// --------------------string-------------------------
/* 
const name='faiz'
for(i=0;i<name.length;i++){
    console.log(name[i])
}
*/

/*
const name = "khan faiz ayub";
for(i=0;i<name.length;i++){
console.log(name[i]);}
*/
// ---------------------array---------------
/*
const  arr=[10,20,30,40,50,60,70]
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
*/

// ---------------for & push------------------------
/*
const arr = [];
for (i = 0; i < 5; i++) {
const input = prompt("ener items in array");
arr.push(input);
console.log(arr);
}
*/
// -------------------obj keys,value,entrie-------------------------
/*
const students = {
  faiz: 50,
  arfaz: 60,
  faisal: 70,
  fareen: 80,
};

const studentsKey = Object.keys(students);
const studenntsValue = Object.values(students);
const studentsEntries = Object.entries(students);
console.log(studentsKey);
console.log(studenntsValue);
console.log(studentsEntries);

//-----------------for in loop in Objects------------------- 

for(i in students){
    console.log(i)
}
*/

// ------------------------array from--------------------------

/*
const name = "faiz";
const arr = Array.from(name);
console.log(arr);
*/

// -----------------array of---------------------------

/*
const bikes12 = ["S100rr", "ZX10r", "600i", "lambo", "rr"];
for (let items of bikes12){
    console.log(items)
}
// console.log(bikes1)
*/

// -----------------Array using forEach--------------------

/*
const bikes = ["S100rr", "ZX10r", "600i", "lambo", "rr"];
bikes.forEach((element, index, arr) => {
    console.log(`${index} : ${element}`);
});
console.log(bikes);
*/
/*
const bikes1 = ["S100rr", "ZX10r", "600i", "lambo", "rr"];
for (let i in bikes1){
    console.log(i)    
}
*/

// --------------------------MAP--------------------------

/*
const arr = [10, 20, 30, 40, 50];
const newArr = arr.map((element, index, array) => {
  // console.log(element,index,array)
  return element + index;
});
console.log(newArr);
console.log(arr);

const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
*/

// -------------------------------------------------------------

/*
const bikes = [
  { firstname: "BMW", lastname: "1000rr" },
  { firstname: "Ninja", lastname: "ZX10R" },
  { firstname: "CBR", lastname: "1000" },
];
fullName = bikes.map(getFullName);
console.log(bikes);
console.log(fullName);

function getFullName(element) {
  return [element.firstname, element.lastname].join(" ");
}
*/

// ---------------------------------------------------------------

/*
const bikes1 = ["1000", "1300", "800", "600", "1800", "400", "200"];
console.log(bikes1);

less = bikes1.filter(lessCc);
console.log(less);
function lessCc(element) {
  return element < 1000;
}
*/

// -------------------------------------------------------------------

/*
const arr = [2, 5, 6, 8, 3];
const red = arr.reduce(reduce);
console.log(red)
function reduce(e1, e2) {
  return e1 + e2;
}

let arr1 = [];
do {
  a = prompt("Enter Number");
  a = Number.parseInt(a);
  arr1.push(a);
} while (a != 0);
console.log(arr1);
*/

// ----------------------------------------------------------------
/*
const arr = [10, 13, 18, 25, 30, 40, 55, 65, 80, 36, 19];
let result = arr.filter((element)=>{
  return element % 10 == 0;
});
console.log(result);
*/

/*
const arr = [4, 6, 8, 10, 15, 35, 68];
const result = arr.map((element) => {
  return Math.round(Math.sqrt(element));
});
console.log(result);

const dvivisible = result.filter((element) => {
  return element % 2 == 0;
});
console.log(dvivisible);

const red = dvivisible.reduce((e1, e2) => {
  return e1 + e2;
});
console.log(red);
*/

// ------------------TASK-------------------------
/*
let playAgain = true;
while (playAgain) {
  let number = Math.round(Math.random() * 20) + 1;
  console.log(number);
  let guess;
  let initialScore = 20;
  do {
    guess = prompt(`Guess the Number`);
    if (guess <= 20) {
      initialScore--;
      if (!guess) {
        console.log("please enter value");
      } else if (guess == number) {
        console.log(guess, ": Correct guess");
      } else if (guess > number) {
        console.log(guess, ": To Heigh");
      } else {
        console.log(guess, ": To Low ");
      }
    } else {
      console.error("Enter number between 0-20");
    }
  } while (+guess !== number && initialScore > 0);

  if (initialScore > 0) {
    document.body.style.backgroundColor = "green";
    console.log("You Win!");
    console.log("Number of guesses: ", 20 - initialScore);
    console.log("Final score: ", initialScore + 1);
  } else {
    console.log(
      "Sorry, you ran out of guesses. The correct number was:",
      number
    );
    document.body.style.backgroundColor = "red";
  }
  {
    playAgain = confirm("Do you want to play again");
  }
}
  console.log("Thanks for playing!");

// document.html.style.backgroundColor="green"

//  document.body.style.backgroundColor="red"
// document.getElementById("myDiv").style.backgroundColor = "lightblue";
*/

// ----------------------------------------------------------
/*
let age = prompt("Plese Enter your age");
age = Number.parseInt(age);

// -----------------One line function------------------------

const check = (age) => {
  return age >= 18 ? "you can drive" : "you can not drive";
};
console.log(check(age));

// ----------------------Normal function---------------------

function ageCheck(age) {
  if (age >= 18) {
    console.log("you can drive");
  } else {
    console.log("You can not drive");
  }
}
ageCheck(age);
*/

// -----------------------DOM--------------------------------
//            MATCHES,CLOSEST and CONTAINS
/*
let id1 = document.getElementById(".id1");
let sp1=document.getElementById(".sp1")
console.log(id1);
console.log(id1.matches(".id1"));
console.log(id1.matches(".box"));
console.log(sp1.closest(".sp1"));
console.log(sp1.contains(".sp1"));
*/
// ---------------------VIDEO 38---------------------------

// document.getElementsByTagName("nav")[0].firstElementChild.style.color =
//   "black";
// document.getElementsByTagName("nav")[0].lastElementChild.style.color =
//   "black";

//   Array.from(document.querySelectorAll("li")).forEach((element)=>{
//   element.style.backgroundColor="red"})

// ---------------------VIDEO 41---------------------------
/*
let x = document.getElementsByTagName("span")[0];
console.log(x);
let y = document.getElementsByTagName("span")[0];
console.dir(y);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);
*/

// ---------------------VIDEO 42--------------------------
/*
let first = document.getElementById("first");

//                        getAttribute

let a = first.getAttribute("class");
console.log(a);

let b = first.getAttribute("id");
console.log(b);

//                        hasAttribute

let c = first.hasAttribute("class");
console.log(c);

let d = first.hasAttribute("style");
console.log(d);

//                        setAttribute

let e = first.setAttribute("hidden", "false");
console.log(e);

let f = first.hasAttribute("hidden");
console.log(f);

first.setAttribute("class", "abc xyz ");

first.setAttribute("data-game", "road-rash");
first.setAttribute("data-player", "khan-rider");

//                        removeAttribute

first.removeAttribute("class", "xyz");

//                        dataAttribute

console.log(first.dataset);
console.log(first.dataset.player);
console.log(first.dataset.game);
*/

// ---------------------VIDEO 43--------------------------
/*
let a = document.getElementsByTagName("div")[0];
// a.innerHTML = a.innerHTML + "<h1>Hello World</h1>";

let div = document.createElement("div");
div.innerHTML = "<h2>HEY</h2>";
// a.appendChild(div)
// a.prepend(div);
// a.before(div);
// a.after(div);
a.replaceWith(div);
*/

// ---------------------VIDEO 44--------------------------

/*
let first = document.getElementById("clip44");

first.insertAdjacentHTML("beforeend", '<div class="test">BEFOREEND</div>');
first.insertAdjacentHTML("beforebegin", '<div class="test">BEFOREBEGIN</div>');
first.insertAdjacentHTML("afterbegin", '<div class="test">AFTERBEGIN</div>');
first.insertAdjacentHTML("afterend", '<div class="test">AFTEREND</div>');
first.remove();
*/

// ---------------------VIDEO 45--------------------------
/*
let clip45 = document.getElementById("clip45");

clip45.className = "text-red green";
clip45.classList.add("orange");
clip45.classList.remove("orange");
clip45.classList.contains("orange");
clip45.classList.toggle("orange");
*/

// ---------------------VIDEO 46--------------------------
// -------------SETTIME OUT & SETTIME INTERVAL--------------

// document.write("HEY");
/*
let a = setTimeout(function () {
  alert("you ran out of time");
}, 4000);

let b = prompt("Do you want to run the settimeout?");
if (b === "no") {
  clearTimeout(a);
}
console.log(a);


// const sum = (a, b) => {
//   console.log("Yes i am running" + (a + b));
//   a + b;
// };
// let timerId = setTimeout(sum, 2000, 1, 4);

// console.log(timerId);

let timerId1 = setTimeout(function () {
  alert("out of time");
}, 2000);
clearTimeout(timerId1);
console.log(timerId1);

// ------------SETINTERVAL---------------

let setInt = setInterval(function () {
  alert("setinterval is running on ever 03:00:00 sec");
}, 3000);
console.log(setInt);
// setInterval(function(){
  // for(let i=0;i<=10;i++)
// },2000);
//   console.log(i)

let count = 1;

function printNumber() {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(printNumber, 2000);
*/

// ---------------------VIDEO 47--------------------------
/*
let a = document.getElementsByClassName("container")[0];
a.onclick = () => {
  alert("you click on container");
};s
*/

// ---------------------VIDEO 48--------------------------

// let btn = document.getElementById("btn");

/*
btn.addEventListener("click", function (e) {
  alert("hey you clicked on button");
});
*/

/*
let x = function (e) {
  alert("hello!");
};

let y = function (e) {
  alert("hey!");
};
btn.addEventListener("click", x);
btn.addEventListener("click", y);

let input = prompt("Enter hello");

if (input == "hello") {
  btn.removeEventListener("click", y);
}
*/

/*
let a = function (e) {
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX, e.clientY);
};
btn.addEventListener("click", a);
*/

// ---------------------VIDEO 49--------------------------
/*
let google = document
  .getElementById("google")
  .addEventListener("click", function () {
    window.location = "https://google.com";
    window.focus();
  });

let github = document
  .getElementById("github")
  .addEventListener("click", function () {
    window.location = "https://github.com";
    window.focus();
  });

let youtube = document
  .getElementById("youtube")
  .addEventListener("click", function () {
    window.location = "https://youtube.com";
    window.focus();
  });

const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};

setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  // console.log(await fetchContent(url));
}, 3000);
*/

// ---------GLOWIG BULB---------------
/*
setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 100);
*/

// ---------------------VIDEO 50--------------------------

// ---------------------VIDEO 51--------------------------
// --------------------Syncronous-------------------------
/*
let name = prompt("What is your name");
let age = prompt("What is your age");
let bike = prompt("Which is your favourate bike");
let car = prompt("Which is your favourate car");
console.log(
  `${name} is ${age} years old and his fav bike is ${bike} aNd his fav car is ${car}`
  );
  */

  // --------------------Asyncronous-------------------------

  console.log("START")
  setInterval(function(){
    console.log('Asyncronou delay')
  },3000)
console.log("END")

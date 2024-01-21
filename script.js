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
/*
  console.log("START")
  setTimeout(function(){
    console.log('Asyncronou delay')
  },3000)
  console.log("END")
*/

// ---------------------VIDEO 52--------------------------
// --------------------call back function-------------------------
/*
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"));
  };
  document.body.appendChild(script);
}
function hello(error, src) {
  if (error) {
    console.log("error");
    return;
  }
  alert("hello " + src);
}

loadScript(
  "https://gist.github.com/adriancmiranda/d3771de4768f841a8e3f",
  function hey(error, src) {
    if (error) {
      console.log(error);
      sendEmergancyMessageToCeo();
      return;
    }
    alert("Hey " + src);
  }
);
*/

// ---------------------VIDEO 53--------------------------
// same as video 53 but  made it as PYRAMID of DOOM

// ---------------------VIDEO 54--------------------------
// ---------------------Promises-------------------------
/*
let promise = new Promise(function (resolve, reject) {
  alert("promise loaded");
  resolve(404);
});

console.log("Hii!");
setTimeout(function () {
  console.log("Hello!!");
}, 3000);
console.log("How are you");

console.log("My name is promise");
console.log(promise);
*/

// ---------------------VIDEO 55--------------------------
/*
let p1 = new Promise((resolve, reject) => {
  console.log("Promise 1 is pending");
  setTimeout(() => {
    console.log("I am promise 1 and i am resolved");
    resolve(true);
  }, 5000);
});
console.log(p1);

let p2 = new Promise((resolve, reject) => {
  console.log("Promise 2 is pending");
  setTimeout(() => {
    console.log("I am promise 2 and i am rejected");
    reject(new Error("I am error from promise 2"));
  }, 5000);
});

console.log(p2);

// To return the value
p1.then((value) => {
  console.log(value);
});

// To catch error
// p2.catch(() => {
//   console.log("Some error occured in promise 2");
// });

// 2 way of writing then and catch in same block

p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
*/

// ---------------------VIDEO 56--------------------------
// __________________PROMISE CHAINING__________________
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise resolved after 2 sceonds");
    resolve("We have completed Step 1");
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("We have completed our Step 2");
    }, 2000);
  });
  return p2;
})
  .then((value) => {
    console.log(value);
  })
  .then(() => {
    console.log("We have completed our Step 3");
  })
  .then(() => {
    console.log("succesfully registered");
  });
*/

// __________Load script in promise chaining_________
/*
let script = document.getElementById("clip56");

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("First script has been loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};
let p1 = loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js");
p1.then((value) => {
  console.log(value);
  return loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js");
})
  .then((value) => {
    console.log("Scond script is loading");
  })
  .catch((error) => {
    console.log("Sorry we are having proble while loading script");
  });
*/

// ---------------------VIDEO 57--------------------------
// __________________MULTIPLE HANDLERS__________________
/*
let p1 = new Promise((resolve, reject) => {
  // alert("Promise is not resolved");
  setTimeout(() => {
    resolve("0");
  }, 3000);
});
p1.then((value) => {
  console.log("Congratulation this promise is now resolved");
});
p1.then(() => {
  console.log("successful");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 5000);
  })
    .then((value) => {
      console.log(value);
    })
    .catch(() => {
      console.log("got some error");
    });
});
*/

// ---------------------VIDEO 58--------------------------
// __________________PROMISE API__________________
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 1");
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("value 2");
    reject(new Error("ERROR 404"));
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

// p1.then((value) => {
//   console.log(value);
// });

// p2.then((value) => {
//   console.log(value);
// });

// p3.then((value) => {
//   console.log(value);
// });

// let promise_all = Promise.all([p1, p2, p2]);
// let promise_all = Promise.allSettled([p1, p2, p3]);
// let promise_all = Promise.race([p1, p2, p3]);
// let promise_all = Promise.any([p1, p2, p3]);
// let promise_all = Promise.resolve([p1, p2, p3]);
let promise_all = Promise.reject([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});
// .catch((error) => {
//   console.log(error);
// });
*/

// ---------------------VIDEO 59--------------------------
// __________________ASYNC AWAIT__________________
/*
async function weatherForcast() {
  let mumbaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 5000);
  });

  let bangluruWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("18 Deg");
    }, 10000);
  });

  // mumbaiWeather.then(alert);
  // bangluruWeather.then(alert);

  console.log("Fetching Mumbai Weather please wait...");
  let bomW = await mumbaiWeather;
  console.log("featched Mumbai Weather is " + bomW);

  console.log("Fetching Banguluru Weather please wait...");
  let blrW = await bangluruWeather;
  console.log("featched Banguluru Weather is " + blrW);

  return [bomW, blrW];
}

const climateForcast = async () => {
  console.log("I am Climate forcast who come after Weather forcast");
};

const temp = async () => {
  console.log("Welcome to the Weather forcast");
  let a = await weatherForcast();
  let b = await climateForcast();
};
temp();
*/

// ---------------------VIDEO 60--------------------------
// ______________ERROR HANDLING: TRY & CATCH____________
/*
setTimeout(() => {
  console.log("loading details");
}, 1000);

try {
  console.log(xyz);
} catch (err) {
  console.log("error" + err);
}

setTimeout(() => {
  console.log("It will talke more few sceonds please do not cancel");
}, 2000);

setTimeout(() => {
  console.log("User name and password found");
}, 4000);

setTimeout(() => {
  console.log("User name : Khan Tech");
}, 5000);

setTimeout(() => {
  console.log("Password : 123xyz");
}, 6000);
*/

// ---------------------VIDEO 61--------------------------
// ______________ERROR OBJECT & CUSTOM ERRORS____________
/*
try {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age > 120) {
    throw new ReferenceError("This is not possible");
  }
  // console.log(faiz);
  // throw new ReferenceError("variable faiz not found");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log("This script is still running");
*/

// ---------------------VIDEO 62--------------------------
// _________________THE FINALLY CLAUSE______________
/*
const f = () => {
  try {
    let a = 0;
    // console.log(program);
    console.log("Program Executed successfully");
    return
  } catch (err) {
    console.log("Program failed");
  } finally {
    console.log("Final block ");
  }
};
f();
console.log("End of function f")
*/
// ---------------------VIDEO 63--------------------------
// _________________PRACTICE SET______________
/*
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " loaded successfully");
    };
    document.head.append(script);
  });
};
*/

// Problem No:1
/*
let a = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
);
a.then((value) => {
  console.log(value);
});
*/
// Problem No:2
/*
const main = async () => {
  console.log(new Date().getMilliseconds());
  let a = await loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
  );
  console.log(a);
  console.log(new Date().getMilliseconds());
};
main()
*/

// Problem No:3
/*
let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Please this is no acceptable"));
    }, 3000);
  });
};

let a = async () => {
  try {
    let c = await p();
    console.log(c);
  } catch (err) {
    console.log("This error is been handled");
  }
};
a();
*/

/*
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(101);
    }, 2000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(202);
    }, 1000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(303);
    }, 3000);
  });
};

const run = async () => {
  console.time("Run")
  // let a1 = await p1();
  // console.log(a1);
  // let a2 = await p2();
  // console.log(a2);
  // let a3 = await p3();
  // console.log(a3);

  let a1 =  p1();
  let a2 =  p2();
  let a3 =  p3();
  let a1a2a3=await Promise.all([a1,a2,a2])
  console.log(a1a2a3)
  console.timeEnd("Run")
};
run();
*/

// ---------------------VIDEO 64--------------------------
//_________________ EXCERCISE 04 SOLUTION___________________

// Digital Clock

// ---------------------VIDEO 65--------------------------
//_____________________HACKERMAN___________________

// Assignment to be solved

// ---------------------VIDEO 66--------------------------
//_____________________FETCH API___________________
/*
let p = fetch("https:/goweather.herokuapp.com/weather/ny");
p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  return response.json();
}).then((value) => {
  console.log(value);
});
*/

// ---------------------VIDEO 67--------------------------
//_____________________FETCH API POST REQUEST___________________
/*
const ctrateTodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};
const getTodo = async (id) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts" + id);
  let r = await response.json();
  return r;
};

const mainFunc = async () => {
  let todo = {
    title: "faiz",
    body: "khan",
    userId: 1000,
  };
  let todor = await ctrateTodo(todo);
  console.log(todor);
};
mainFunc();
*/

// ---------------------VIDEO 68--------------------------
//_____________________COOKIES IN JS___________________
/*
console.log(document.cookie);
document.cookie = "name=faiz123456789";
document.cookie = "name2=khan123456789";
document.cookie = "name=faizkhan123456789";
let key = prompt("Enter your Cookie KEY");
let value = prompt("Enter your Cookie VALUE");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(decodeURIComponent(document.cookie));
*/

// ---------------------VIDEO 69--------------------------
//________________LOCAL STORAGE IN JS___________________
/*
let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");

localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == "red" || key == "blue") {
  localStorage.removeItem(key);
}
if (key == 0) {
  localStorage.clear();
}
*/

// ---------------------VIDEO 70--------------------------
//________________SESSION STORAGE IN JS___________________
/*
sessionStorage.getItem("name");
sessionStorage.clear();
sessionStorage.removeItem("name");
sessionStorage.setItem("name", "faiz");

window.onstorage = (e) => {
  alert("Changed");
  console.log(e);
};
*/

// ---------------------VIDEO 71--------------------------
//________________CHAPTER 10 PRACTICE SET ___________________
/*
let n = localStorage.getItem("note");
alert("your note is " + n);

let a = prompt("Enter your note");
if (a) {
  localStorage.setItem("note", a);
}
let c = confirm("Do you want to delete your note");
if (c) {
  localStorage.removeItem("note");
  alert("Note deleted sucessfully");
}
*/
// ---------------------VIDEO 72--------------------------
//________________EXCERCISE 05 SOLUTION___________________
/*
const hack = document.getElementById("hack");

const message = [
  "Initializing Hack tool...",
  "Connecting to Facebook...",
  "Connecting to server 1...",
  "Connection failed. Retrying...",
  "Connecting to server 2",
  "Connected Successfully...",
  "Username iamharry...",
  "Trying Brute Force...",
  "200K passwords tried...",
  "Match not found",
  "Another 200K passwords tried...",
  "Match not found...",
  "Another 200K passwords tried...",
  "Match not found...",
  "Another 200K passwords tried...",
  "Match found...",
  "Accessing Account...",
  "Hack Successful...",
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const showHack = async (mess) => {
  await sleep(2);
  console.log(mess);
  text.innerHTML = text.innerHTML + mess + "<br>";
};

(async () => {
  for (let i = 0; i < message; i++) {
    await showHack(message[i]);
  }
})();
*/

// ---------------------VIDEO 73--------------------------
//________________EXCERCISE 05 TO DO LIST ___________________
// to be solved

// ---------------------VIDEO 74--------------------------
//_____________OBJECT ORIENTED PROGRAMMING IN JS________________

// ---------------------VIDEO 75--------------------------
//_____________PROTYPES & PROTO IN JS________________
/*
let a = {
  name: "faiz",
  language: "JavaScript",
  run: () => {
    alert("Self proto");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("PROTO");
  },
};

p.__proto__ = {
  name1: "khan",
};
a.__proto__ = p;
a.run();
console.log(a.name1);
*/

// ---------------------VIDEO 76--------------------------
//_____________CLASSES & OBJECTS IN JS________________
/*
class RailwayForm {
  submit() {
    alert(
      this.name + " : Your Form is Submited for train number " + this.trainno
    );
  }
  cancel() {
    alert(this.name + " : Form canceld for train number " + this.trainno);
  }
  fill(givenname, trainno) {
    this.name = givenname;
    this.trainno = trainno;
  }
}

let faizForm = new RailwayForm();
faizForm.fill("faiz", 123456);
let faisalForm1 = new RailwayForm();
let faisalForm2 = new RailwayForm();
faisalForm1.fill("faisal", 654200);
faisalForm2.fill("faisal", 654789);

faizForm.submit();
faisalForm1.submit();
faisalForm2.submit();
faisalForm1.cancel();
*/
// ---------------------VIDEO 77--------------------------
//_____________CONSTRUCTOR IN JS________________
/*
class RailwayForm {
  constructor(givenname, trainno) {
    this.name = givenname;
    this.trainno = trainno;
    console.log("CONSTRUCTOER CALLED ... " + this.name + " " + this.trainno);
  }

  submit() {
    alert(
      this.name + " : Your Form is Submited for train number " + this.trainno
    );
  }
  cancel() {
    alert(this.name + " : Form canceld for train number " + this.trainno);
  }
}

let faizForm = new RailwayForm("faiz", 123456);
// faizForm.fill("faiz", 123456);
let faisalForm1 = new RailwayForm("faisal", 654200);
let faisalForm2 = new RailwayForm("faisal", 654789);
// faisalForm1.fill("faisal", 654200);
// faisalForm2.fill("faisal", 654789);

faizForm.submit();
faisalForm1.submit();
faisalForm2.submit();
faisalForm1.cancel();
*/

/*
class RailwayForm {
  constructor(givenname, trainno, address) {
    this.name = givenname;
    this.trainno = trainno;
    this.address = address;
    console.log("CONSTRUCTOER CALLED ... " + this.name + " " + this.trainno);
  }

  preview() {
    alert(
      this.name +
        " Your form for train " +
        this.trainno +
        " and your address is " +
        this.address
    );
  }

  submit() {
    alert(
      this.name + " : Your Form is Submited for train number " + this.trainno
    );
  }
  cancel() {
    alert(this.name + " : Form canceld for train number " + this.trainno);
    this.trainno = 0;
  }
}

let faizForm = new RailwayForm("faiz khan", 1212, "Mumbai maharashtra - 40001");
faizForm.preview();
faizForm.submit();
faizForm.cancel();
faizForm.preview();
*/

// ---------------------VIDEO 78--------------------------
//_____________INHERITANCE & EXTENDS KEYWORD IN JS________________
/*
class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is running");
  }
  shout() {
    console.log(this.name + " is Screaming");
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + " is eating banana");
  }
  hide() {
    console.log(`${this.name} is hiding`);
  }
}

let ani = new Animal("JJ", "grey");
let m = new Monkey("MOMO", "black");

ani.shout();
m.eatBanana();
m.hide();
// ani.hide(); THIS WILL NOT WORK
*/

// ---------------------VIDEO 79--------------------------
//_____________METHOD OVER RIDING & SUPER KEYWORD IN JS________________

class Employee {
  login() {
    console.log(`Employee has logged In`);
  }
  logout() {
    console.log(`Employee has logged out`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - auto approved`);
  }
}

class Programmer extends Employee {
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(4);
    console.log(`one extra is granted`);
  }
}

let e = new Programmer();
e.login();
e.requestLeaves(3);

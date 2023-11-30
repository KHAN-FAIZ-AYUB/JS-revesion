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

// const name = "khan faiz ayub";
// console.log(name);
// ---------------------array---------------
/*
const  arr=[10,20,30,40,50,60,70]
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
*/

// -----------------Array using forEach--------------------
/*
const bikes = ["S100rr", "ZX10r", "600i", "lambo", "rr"];
bikes.forEach((element) => {
  console.log(element);
});
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

const students = {
  faiz: 50,
  arfaz: 60,
  faisal: 70,
  fareen: 80,
};
const studentsKey = Object.keys(students);
const studenntsValue = Object.values(students);
const studentsEntries = Object.entries(students);
console.log(studentsArray);

// ------------------------------------------------------
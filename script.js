/*
------------------------------if else--------------------------------
let age=prompt('Enter your age')
age=Number.parseInt(age)
if(age>10 && age<20){
    console.log('your age lies betwwen 10 and 20')
}else{
    console.log('your age dosnt lies betwwen 10 and 20')
}
*/

// ------------------------------switch case--------------------------------

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
/*
------------------------------if else--------------------------------
let num = prompt("please enter the number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Number is divisible by 2 or 3");
} else {
  console.log("Number is not divisible by 2 or 3");
}
*/

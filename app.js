console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favNumber = 7;
window.prompt("input a number");
let answer = window.prompt(favNumber);

console.log(answer);

if (answer < favNumber) {
  console.log("Too low!!");
} else answer > favNumber;
{
  console.log("too high");
}
if ((answer = favNumber)) {
  console.log("Congratulations!!");
}

// exercise 2 //

window.prompt("What is your birth month?");
let birthMonth = "October";

switch (birthMonth) {
  case "October":
    console.log("Fall");
}
console.log(birthMonth);
// exercise 3 //

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "01";
let color = "BL";
let size = "XL";

switch (typeId == "01") {
  case "Tank top":
    break;
}
switch (typeId == "02") {
  case "T-Shirt":
    break;
}

switch (typeId == "03") {
  case "Long Sleeve":
    break;
}
switch (typeId == "04") {
  case "Sweat Shirt":
    break;
}
switch (typeId == "Other") {
  case "One-sie":
    break;
}

switch (colorId == "BL") {
  case "Black":
    break;
}
switch (colorId == "BL") {
  case "Blue":
    break;
}
switch (colorId == "RD") {
  case "Red":
    break;
}
switch (colorId == "PU") {
  case "Purple":
    break;
}
switch (colorId == "WH") {
  case "White":
    break;
}

switch (sizeId == "S") {
  case "Small":
    break;
}
switch (sizeId == "M") {
  case "Medium":
    break;
}
switch (sizeId == "L") {
  case "Large":
    break;
}
switch (sizeId == "XL") {
  case "Extra Large":
    break;
}
switch (sizeId == "BB") {
  case "One Size Fits All":
    break;
}

console.log(`Product: ${size} ${color} ${type}`);

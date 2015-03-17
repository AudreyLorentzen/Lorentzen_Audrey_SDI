/*
Audrey Lorentzen
3-7-15
Section 00
Day 3 Arrays
 */
//alert("Testing to make sure it is linked.");

//Create a basic array
var avengersNames=["Thor", "Hulk", "Iron Man", "Captain America"];

//Print out whole array
console.log(avengersNames);

//Print out one specific item in the array
console.log(avengersNames[2]);

//Swap items in our array
avengersNames[1]="Black Widow";

console.log(avengersNames);

// Use a variable for the index number
var num = 3;
console.log(avengersNames[num]);

//Find the length of an array
//length property = How many items are in the array.
//dot syntax - fancy for use a period
console.log(avengersNames.length);
//There is 3 index numbers and 4 items

//Add an item to our array
avengersNames[4]="Hawkeye";

avengersNames[avengersNames.length]="Wolverine";

console.log(avengersNames);

//Picking oranges
var orangesPicked=[13,350, 1000];

//How many oranges did we pick in total?
var totalOranges = orangesPicked[0] +
 orangesPicked[1]+orangesPicked[2]+orangesPicked[3];
console.log("The total oranges picked is "
+ totalOranges+".");

var averageOranges = totalOranges/3;
console.log("The average number of oranges picked per day is " +averageOranges+".");

//Created an array of fruit
var fruitBowl = ["apple", "mango", "grapes", "banana"];
console.log(fruitBowl);

// push - add item into the next open spot
// dot syntax - use a period
fruitBowl.push("strawberries");
console.log(fruitBowl);

fruitBowl.push("pineapple");
console.log(fruitBowl);

//pop() - removes the last item from the array
// - it also returns the item
var caughtItem = fruitBowl.pop();
console.log(fruitBowl);
console.log(caughtItem);

//Create another array for the
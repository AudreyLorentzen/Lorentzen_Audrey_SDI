/*
 Audrey Lorentzen
 3/5/15
 Section 00
 Day 2 Lab Expressions
 */

alert("Hi there, need anything?");


console.log("Slice of Pie Part I.");

//Calculate how many slices of pizza each person gets
var numPeople = 26;
var numPizza = 7;
var numSlice = 8.9;

//Multiply numSlice and numPizza together and divide by the numPeople
var slicesEach = (numSlice*numPizza)/numPeople;

// Output Number of slices per person
console.log("Each person ate " +slicesEach+ " slices of pizza at the party.");


console.log("Slice of Pie Part II.");

//Calculate how many slices of pizza Sparky gets

//var numPeople = 9
//var numPizza = 7
//var numSlice =3

//Multiply numSlice and numPizza together and divide by the numPeople
var remainder = 21%9;

//Output number	of slices Sparky get to eat.
console.log("Sparky got " +remainder+ " slices of pizza.");

console.log("Average shopping bill.");

//Calculate the average amount spent on groceries

var weekOne = 50;
var weekTwo = 25;
var weekThree = 100;
var weekFour = 95;
var weekFive = 87;

//Add up the weeks to get the total
var total = (weekOne+weekTwo+weekThree+weekFour+weekFive);
//When you get the total you divide it by the number of weeks
var average =(weekOne+weekTwo+weekThree+weekFour+weekFive)/5;
console.log("You have spent a total of " + "$" +total+ " on groceries over 5 weeks." +
"\nThat is an average of " + "$" +average+ " per week.");

console.log("Discounts.");

//Calculate the discounted price for an item
//Givens
var originalPrice = 150;
var discountPer = 17;
var salesTaxper = 6.5;
//Result variables
var withTax = (originalPrice-discountPer)+salesTaxper;
var withoutTax = (originalPrice-discountPer);
console.log("Your flat screen TV was originally " + "$" +originalPrice+ ", but after a "
+discountPer+ "% discount,"+" " + "it is now " + "$" +withoutTax+ " without tax, and " + "$" +withTax+ " with tax. " );



















 /*
Audrey Lorentzen
Section 00
3-7-15
Day 7 Arguments
*/

 //alert("Still Testing.");

 //Arguments - Goes into the functions - part of the function call
 //Parameters - Catch the arguments and in the function definition

 //Create a function that calculates the area of a rectangle...again!
 //Add in parameters

 function calcArea(w,h)
 {
     //var width = 10;
     //var height = 20;
     var area = w*h;
     console.log("The area is "+area+".");

 }

 //Call our function
 //Add arguments to the function call
 calcArea(10,20);
 calcArea(20,40);

 //Prompt the user for the width and height
 var width = prompt("Enter a width:");

 //ENTER validation
 var height = prompt("Enter a height:");
 calcArea(width, height);

 //Dog years
 function dogYears(humanAge)
 {
 //Dog years = humans year *7;

    var dogAge = humanAge * 7;
    console.log("Your age in dog years is "+dogAge+".");


 }

 //Call the dog function
 dogYears(4);

 //Prompt user for human age
 var  userInput =prompt("Please enter your human age:");

 //Call the dog function
 dogYears(userInput);
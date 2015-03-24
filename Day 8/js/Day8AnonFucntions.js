
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 8 Anon Functions
*/

 //alert("Still Testing.");

 //Basic Function
 /*
 function functionName()
 {

 }
  */

 //Anon Function are extremely popular in 35 and jQuery
 //Highly used in Object Object Oriented Programming
 //Quick and Easy
 //You can use either a basic or anon - FOR NOW

 //Function calls above the definition
 //Basic Function call
 var basicArea2=triangleArea(2,9);
 console.log("The area from the basic function before the definition is "+basicArea2+".");

 /*THIS DOES NOT WORK! DO NOT PUT IT ABOVE THE FUNCTION
 //Anon Function call
 var anonArea2=triangleAreaAnon(3,4);
 console.log("The area from the anon function before the definition is "+anonArea2+".");
 */

 //Build a function for area of a triangle

 function triangleArea(b,h)
 {
     //Calculate area
     var area =.5* b*h;
     return area;

 }

 //Anon Function
 var triangleAreaAnon = function(b,h)
 {
     var area =.5*b*h;
     return area;
 };

 //Function call to basic function

 var basicArea = triangleArea(5,6);
 console.log("The area from the basic function is "+basicArea+".");

 //Fucntion all to the anon function

 var anonArea=triangleAreaAnon(4,5);
 console.log("The area from the anon function is "+anonArea+".");







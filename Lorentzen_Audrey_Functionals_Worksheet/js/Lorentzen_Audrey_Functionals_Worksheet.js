
 /*
Audrey Lorentzen
Section 00
3-7-15
Lorentzen Audrey Functionals Worksheet
*/
var radius = 10;
 //alert("Still Testing.");


 //Create a function to calculate the circumference of a circle

 function cirArea(r)
 {
     //Calculate the area using Pi * r * r
     var d = 2*r;
     var c = Math.PI * d;

     //Return the value
     return c;

 }
 //function call this circleArea
 //Create a variable to CATCH the returned area
 var circleArea = cirArea(radius);

 //Console the results
 console.log("The circumference of the circle is "+circleArea+".");


 //Create a function to calculate how many bee stings are needed to kill an animal
 var weight = 400;

 function viciousBees(victimsWeight)
 {
     //Calculate how many bee stings using bee stings * victims weight
     var beestings = victimsWeight * 8.666666667;

     //Return the value
     return beestings;


 }

 ////function call this circleArea
 //Create a variable to CATCH the returned area
 var Bzzz = viciousBees(weight);

 console.log("It takes "+Bzzz+" bee stings to kill this animal.");
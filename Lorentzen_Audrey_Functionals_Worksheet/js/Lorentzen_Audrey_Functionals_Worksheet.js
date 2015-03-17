
 /*
Audrey Lorentzen
Section 00
3-7-15
Lorentzen Audrey Functionals Worksheet
*/

 //alert("Still Testing.");

 //Create a function to calculate the circumference of a circle

 function cirArea(r)
 {
     //Calcculate the area using Pi * r * r
     var d = 2*r;
     var c = Math.PI * d;

     //Return the value
     return c;

 }
 //function call this circleArea
 //Create a variable to CATCH the returned area
 var circleArea = cirArea(10);

 //Console the results
 console.log("The circumference of the circle is "+circleArea+".");
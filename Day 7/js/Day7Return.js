
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 7 Return
*/

 //alert("Still Testing.");

 //Return a value from our function to our main code

 // 1. Create a function calculate the area of a rectangle
 function calcArea(w,h)
 {
     //Calc area
     var area = w*h;
     console.log("Inside the function the area is "+area+".");
     //Return the area to the main code
     return area;

 }

 //Call function
 //Create a variable to CATCH the returned value
 var rectArea = calcArea(10,20);

 //Console log the area
 console.log(rectArea);

 // 2. Create a function to calculate the area of a circle
 function circleArea(r)
 {
     //Calc area Pi * r *r
     var area = Math.PI * r * r;
     //Return the value
     return area;
 }

 //function call this circleArea
 //Create a variable to CATCH the returned area
 var circArea = circleArea(6);


//Console log the results
 console.log("The area of the circle is "+circArea+".");

 //What is twice the circle area of a 6 inch circle
 var resultsTwice = circArea*2;
 console.log("Twice the area is "+resultsTwice+".");


 
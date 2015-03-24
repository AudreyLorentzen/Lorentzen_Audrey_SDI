
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 8 Procedures
*/

 //alert("Still Testing.");

 // This is a basic function
 function calcAreaF(w,h)
 {
     var area = w*h;
     return area;
 }

//Function Call
 var area = calcAreaF(6,8);
 console.log("The area of the rectangle is "+area+".");

 //This is a procedure
 //A list of steps to do

 function calcAreaP(w,h)
 {
     var area = w*h;
     //We do NOT return this value
     console.log("Inside the procedure th area is "+area+".");
 }

 //Function call for the procedure?
 //Just the function name No variable to catch it
 calcAreaP(12,16);



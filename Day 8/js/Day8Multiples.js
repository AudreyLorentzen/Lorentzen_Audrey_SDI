
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 8 Multiples
*/
 //alert("Still Testing.");
 //Create multiple functions using information from the user

 //Calc the perimeter and area of a rectangle

 function periRect(w,h)
 {
     //perimeter = 2*width + 2*height
     var p = 2*w + 2*h;
     return p;

 }

 //Create an anon function for the area
 var areaRect = function(w,h)
 {
     var area = w*h;
     return area;

 };


//Prompt the user for width and height
 var width = prompt("Let's figure out the perimeter and area of the rectangle.\nWhat is the width:");

 //Validation
 while(width==="" || isNaN(width))
 {
     //Re-prompt the user
     width = prompt("Please do not leave blank and only use numbers.\nWhat is your width?");
 }

 //ParseInt
 width=parseInt(width);


 //User prompt
 var height = prompt("What is the height of the rectangle?");

 //Validation
 while(height==="" || isNaN(height))
 {
     //Re-prompt
     height = prompt("Please do not leave blank and only use numbers.\nWhat is the height?");

 }

//ParseInt
 height = parseInt(height);

 //Function Calls
 var resultPeri = periRect(width,height);
 var resultArea = areaRect(width,height);

 //Combined console log
 console.log("The perimeter of your rectangle is "+resultPeri+" and the area is "+resultArea+".");

 //Create a combined function

function combinedRect(w,h)
{
    //First calculate the perimeter
    var p= 2*w +2*h;

    //Calc area
    var a =w*h;

    //Return both values
    return [p,a];

}

 //Function call the combined array

 var combinedResults = combinedRect(width,height);
 console.log(combinedResults);
 console.log("The perimeter of your rectangle is "+combinedResults[0]+" and the area is "+combinedResults[1]+".");



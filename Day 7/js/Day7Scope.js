
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 7 Scope
*/

 //alert("Still Testing.");

 // Variable Scope
 // Variable inside & outside of a function

 // Try not to use the same variable names, But
 // In big files this is going to be impossible
 // Functions are like Vegas

 // Create a variable for width in our MAIN CODE
 // Scoped outside of the function - "Main Code"

 var width = 5;


 // Create a function that calc the perimeter of a regtangle
 function calcPeri()
 {
     // Create a variable called width inside of the function
     // Scoped to the function calcPeri

     var width = 10;

     // Create a variable for height and perimeter

     var height = 20;
     var perimeter = width*2 + height *2;

     console.log("Inside of the function, the perimeter is "+perimeter+".");

     //Variables created inside of a function can NOT be accessed outside of the functions.
     //Variables outside of the function can be accessed, but usually will not be.

 }

    console.log("Before the function call, width = "+width+".");

 // function cal the calcPeri

 calcPeri();
 console.log("After the function call, width = "+width+".");

 //Console.log the answer
 //THIS DOES NOT WORK - VEGAS
 //console.log("Outside of the function, the perimeter is "+perimeter);








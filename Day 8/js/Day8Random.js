
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 8 Random
*/

//alert("Still Testing.");

 //Create a function that will give us a random integer between two valvs

 //Create variables for min and max values
 var min = prompt("Let's find a random number between two values!\nPlease enter your min value:");

 //Validate min value
 while(isNaN(min) || min==="")
 {
    //Re-prompt the user
     min = prompt("Please do not leave blank and only use numbers.\nWhat is the min value");
 }

 var max = prompt("Please enter your max value:");

 //Validate max value
 while(isNaN(max) || parseInt(max==="") || parseInt(max)<=parseInt(min)){
     if (isNaN(max)) {
         //Re-prompt the user
         max = prompt("Please only use numbers.\nWhat is the max value");

     } else if (max === "") {
         //Re-prompt the user
         max = prompt("Please do not leave blank.\nWhat is the max value");

     } else if (parseInt(max) <= parseInt(min)) {
         //Re-prompt the user
         max = prompt("Please enter a higher value than your min number of " + min + " .\nWhat is the max value");

     }
 }



 //Function Call
 var ranNum = getRandom(min, max);
 console.log("Your random number between "+min+" and "+max+" is "+ranNum);

 //Create
 function getRandom(min, max)
 {
     //Generate a random integer
     var randomNumber = Math.round(Math.random()*(max-min)+parseInt(min));
     return randomNumber;
 }

//15 random numbers - console.log them out

 for(var i=0; i<15; i++)
 {
     //This will give the same number 15 times
     //console.log(ranNum);

     console.log(getRandom(min,max));
 }


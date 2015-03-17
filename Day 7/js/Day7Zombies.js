
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 7 Zombies
*/

 //alert("Still Testing.");

 // ZOMBIE ATTACK!!!
 // We accidently created a zombie at Full Sail.
 // a zombie can bite 4 people a day and turn them into zombies the next day.
 // The CDC wants to know how many zombies there will be in 8 days?

 // Givens that we know

 // How many zombies do we have

 var numZombies =1;

 // How many bites per zombie per day!

 var numBites =4;

 // Number of days that the CDC wants

 var days =8;

 // Create for loop to calculate zombie number

 for(var i = 1; i<=days; i++)
 {
     // How many new zombies get made everyday

     var newZombies = numZombies * numBites;

     // Add the new zombies to our exhausted horde.

     numZombies += newZombies ;

     // Console.log the results
     console.log("There are "+numZombies+" number of zombies on day #"+i+"!");

 }

 // How long will it take to get a million zombies






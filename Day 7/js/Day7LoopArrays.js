
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 7 Loop Arrays
*/


 //alert("Still Testing.");

 // Tell each member of the Scooby gang that they solved a mystery

 // Create an array of gang members

 var names =["Scooby-Doo", "Shaggy", "Velma", "Daphne", "Fred"];

 // Add scrappy to the game
 names.push("Scrappy");

 // Create a for loop to cycle through the array

 for(var i =0; i<names.length; i++)
 {
     // Console log each person

     console.log("You solved the case "+names[i]+"!");
 }

 // Keep track of our bills and get the total and average

 var bills =[50,10,20,10,60,70];

 // Create variables for total and average
 var total = 0;
 var average =0;

 // Create a variable to track the item total

 var numItems = 0;

 for(var j =0; j<bills.length; j++)
 {
     // Only add the if they are equal or over $15!

     if(bills[j] >= 15)
     {
         // Add each bill to the total

         total += bills[j];
         numItems++;

     }



 }

    console.log("The total is "+total+".");

 //Calculate the average
 average = total / numItems;
 console.log("The average is "+average+".");
 
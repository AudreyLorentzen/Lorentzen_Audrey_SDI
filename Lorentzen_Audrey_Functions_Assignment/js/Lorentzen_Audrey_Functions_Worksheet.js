
 /*
Audrey Lorentzen
Section 00
3-7-15
Lorentzen_Audrey_Functions_Worksheet
*/

 //alert("Still Testing.");

 //Prompt for normal function
 var totalKids = prompt("Please type in the amount of kids there are.");
 var totalBears = totalKids;
 totalKids= parseInt(totalKids);
 totalBears= parseInt(totalBears);

//Create a basic function
 function teddyAfrica(totalKids)
 {
     //Calculate how much it would cost
     //One bear costs 12 dollars
     var oneBear = 12;
     var howMuch = (oneBear*totalKids);
     return howMuch;
 }
 //Validate that the user typed in a number OR didn't leave it blank
 //Validate using a while loop for total kids

 while(isNaN(totalKids) || totalKids==="") {
     //The user left it blank
     totalKids = prompt("Please do not leave it blank.\nHow many kids total?\nPlease type in only numbers:");
 }
 //Function call to the basic function
 var costAmount = teddyAfrica(totalKids);
 console.log("The total cost amount for the bears needed for "+totalKids+" kids would be "+costAmount+" dollars.");

 /*
 I typed in 500 for the amount of kids and I got 6000 dollars.
  */


 //Prompt for anon function
 var water = prompt("We will send the same amount of supplies needed for one area to a total of three.\nFirst, how many people need water?");
 var food = prompt("How many people need food?");
 var clothes = prompt("How many people need clothes?");
 water = parseInt(water);
 food = parseInt(food);
 clothes = parseInt(clothes);

 //Create a anon function
 //The same amount of supplies for 3 areas in Africa
 var suppliesAfrica=function(water, food, clothes)
 {
     var outcome=(water+food+clothes)*3;
     return outcome;
 };

 //Validate that the user typed in a number OR didn't leave it blank
 //Validate using a while loop for the amount of water, food, & clothes
 while(isNaN(water) || water==="") {
     //The user left it blank
     water = prompt("Please do not leave it blank.\nHow many people need water?\nPlease type in only numbers:");
 }
 while(isNaN(food) || food==="") {
     //The user left it blank
     food = prompt("Please do not leave it blank.\nHow many people need food?\nPlease type in only numbers:");
 }
 while(isNaN(clothes) || clothes==="") {
     //The user left it blank
     clothes = prompt("Please do not leave it blank.\nHow many people need clothes?\nPlease type in only numbers:");
 }
 //Function call to the anon function
 var amountSupplies = suppliesAfrica(water, food, clothes);
 console.log("The total amount of people needed for each supply, would be "+amountSupplies+".");
 /*
 I typed in 12 people needed each supply to get 108 total of people included all three areas.
  */



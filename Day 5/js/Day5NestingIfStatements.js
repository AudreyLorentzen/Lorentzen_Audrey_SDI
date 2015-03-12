
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 5 Nesting If Statements
*/

 //alert("Still Testing.");

 //Some decisions affect other decisions

 //If it is warm then lets go to the beach, if it is not then lets go to the movies.

 //Get temperature
 var temp = 86;

 //Set the water temperature
 var waterTemp = 78;

 if(temp >= 80) {
     console.log("Let's go to the beach!");
     if(waterTemp > 75){
         console.log("Let's go swimming!");
         var knowSwim = "yes";
         if(knowSwim == "yes"){
             console.log("No floaties needed.");
         } else {
             console.log("Get a floatie.");
         }

     } else {
         console.log("Let's get a tan!");
     }

 } else {
     console.log("Let's go to the movies!");
 }

 //Do you have any kids in the group
 var kids = "no";

 //Test if we have kids
 if(kids === "no"){
     console.log();
 }






/*
//If the water temp is above 75, lets go swimming, if not lets get a tan.


 if(waterTemp > 75){
     console.log("Let's go swimming!");

 } else {
     console.log("Let's get a tan!");
 }
*/




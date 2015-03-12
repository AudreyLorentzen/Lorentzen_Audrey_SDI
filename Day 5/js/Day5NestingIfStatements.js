
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
 var temp = prompt("We are going to figure out what you should do today!\nWhat is the current temperature outside?");

 //Validate that the user typed in SOMETHING - did they leave it blank?
 if(temp === ""){
     //This code will run if the user types in nothing
     //Reprompt the user
     temp = prompt("Please do not leave this blank, it is required!\nWhat is the current temperature outside?");


 }



 //Validate that the user typed in a number
 // isNaN() - is it not a number -returns a boolean
 //Literally say it out loud Is "monkey" not a #?
 console.log(isNaN(7)); //Gives us false because 7 IS a #
 console.log(isNaN("monkey"));//Gives us true


 if(isNaN(temp)){
     //This code will run when temp is NOT a number
     //Reprompt the user for the information
     //Gives the user a 2nd chance!
     temp = prompt("Please only type in numbers!\nEnter the temperature outside.");
 }



 if(temp >= 80) {
     console.log("Let's go to the beach!");
     //Set the water temperature
     var waterTemp = prompt("What is the water temperature?");

     //Validate the water temp
     if(waterTemp === "" || isNaN(waterTemp)){
         //This code will run if the variable is blank or not a number
         //Reprompt the user
         waterTemp = prompt("Please do not leave blank and only use numbers.\nWhat is the water temp?");

     }

     if(waterTemp > 75){
         console.log("Let's go swimming!");

         var knowSwim = prompt("Do you know how to swim?");

         //Convert the text string to lower case
         //Lowercase - dot syntax - use a period
         knowSwim = knowSwim.toLowerCase();
         console.log(knowSwim);

         //Validate the knowSwim variable
         if(knowSwim !="yes" && knowSwim != "Yes" && knowSwim !="no" && knowSwim != "No"){
             //Reprompt the user
             knowSwim = prompt("Only type in yes or no.\nCan you swim?");
             knowSwim = knowSwim.toLowerCase();

         }

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


     //Do you have any kids in the group
     var kids = prompt("Are you bringing kids?");
     //Validate
     //Convert to lowercase
     kids = kids.toLowerCase();

     if(kids !="yes" && kids != "no"){
         //Reprompt the user
         kids = prompt("Please enter ONLY yes or no.\nAre you bringing kids?");
         //Giving them a second chance
         //Permantely convert to lower case
         kids = kids.toLowerCase();

     }

     //Test if we have kids
     if (kids === "no") {
         console.log("Let's see 50 Shades Of Grey!");
     } else {
         console.log("Lets see SpongeBob Movie!");
     }
 }






/*
//If the water temp is above 75, lets go swimming, if not lets get a tan.


 if(waterTemp > 75){
     console.log("Let's go swimming!");

 } else {
     console.log("Let's get a tan!");
 }
*/




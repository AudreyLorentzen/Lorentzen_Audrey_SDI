
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 6 Validation
*/

 //alert("Still Testing.");

 //Ask the user for a number
 var num1 = prompt("Please enter a number:");

 //Validate that the user typed in a number OR didn't leave it blank
 //Validate using a while loop
 while(isNaN(num1) || num1==="")
 {

    //Reprompt the user
     if(num1==="")
     {
         //The user left it/ blank
         num1 = prompt("Please do not leave blank!\nPlease type in a number:");

     }
     else if(isNaN(num1))
     {
         num1 = prompt("Please only type in numbers!\nEnter a number:");
     }

 }

 //Ask the user a yes or no question
 var userInput = prompt("Please enter yes or no:");
 //Convert it to lowercase
 userInput = userInput.toLowerCase();

 //Validate
 while(userInput != "yes" && userInput != "no" && userInput != "nope")
 {

     //Reprompt the user
     userInput = prompt("Please only enter yes or no!\nPlease type in yes or no:");


 }




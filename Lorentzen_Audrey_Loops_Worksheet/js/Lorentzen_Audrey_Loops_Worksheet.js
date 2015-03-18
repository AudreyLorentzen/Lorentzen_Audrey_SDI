
 /*
Audrey Lorentzen
Section 00
3-7-15
Lorentzen Audrey Loops Worksheet
*/

 //alert("Still Testing.");

//Basic While Loop
//Start with a variable
//Kittens at the pet shop
// At the pet shop 2 kittens come in every day and 4 are taken away every day
 //How many kittens are there left every 4 weeks

 var numKittens = prompt("How many kittens are there?");

 while(numKittens==="" || isNaN(numKittens))
 {
     numKittens = prompt("How many kittens are there?");
 }
 //How days in a month

 var month = 28;

 var days = 1;



while(days<month)
{
    var sum = parseInt(numKittens)+2-4;
    days ++;
    console.log("At the end of the month there are "+sum+" kittens left.")
}

//Basic For Loop
//Pack of cigarettes

 for(var i =20; i>0; i--)
 {
    console.log("You have "+i+" cigarettes in your pack.");


 }

 //Basic Do While Loop
//Create variables
 var dime = 10;
 var dollars = 300;
 var counter = 1;
 var randomNum = 10;

 do
 {
     var total =(dime + randomNum);
     dime = total;
     counter++;

 }while(dime<dollars);
    console.log("It takes "+counter+" dimes to get to $3.");



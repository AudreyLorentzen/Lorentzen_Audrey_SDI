
 /*
Audrey Lorentzen
Section 00
3-7-15
Expressions Assignment
*/

//alert("Still testing.");

//Calculate how much was spent the last time you got animal food for your cat, dog, and horse.
//First, figure out how many you have of each

 var animals = ["cat", "dog", "horse"];

  animals[0] = prompt("How many cats do you have?");
  animals[1] = prompt("How many dogs do you have?");
  animals[2] = prompt("How many horses do you have?");

 //Then figure out how much was spent on each animal

 var animalFood = ["cat1", "dog1", "horse1"];

  animalFood[0] = prompt("How much money did you spend on one amount cat food?");
  animalFood[1] = prompt("How much money did you spend on one amount dog food?");
  animalFood[2] = prompt("How much money did you spend on one amount of horse food?");

 //Calculate the total

 var total = (animals[0] * animalFood[0]) + (animals[1] * animalFood[1]) + (animals[2] * animalFood[2] );

 console.log("You've spent " + "$" +total+ " on animal food.");

//If user miscounted any animal and they needed to add one to any
 var anyMissed = prompt("Did you miss any animals? If so type in cat, dog, or horse. ");

//Create a new variable to store final total amount depending on users input
 var newTotal;

//Depending on users input, will add just one animal to whats typed in
 if(anyMissed == "cat")
 {
     var catFound = parseInt(animals[0]);
     catFound += 1;
     console.log("Since you miscounted, now your total of cats are " +catFound+ ".");
     newTotal =  ( catFound * animalFood[0]) + (animals[1] * animalFood[1]) + (animals[2] * animalFood[2] );
 }
else if(anyMissed == "dog")
 {
     var dogFound = parseInt(animals[1]);
     dogFound += 1;
     console.log("Since you miscounted, now your total of dogs are " +dogFound+ ".");
     newTotal =  ( animals[0] * animalFood[0]) + (dogFound * animalFood[1]) + (animals[2] * animalFood[2] );
 }
 else if(anyMissed == "horse")
 {
     var horseFound = parseInt(animals[2]);
     horseFound += 1;
     console.log("Since you miscounted, now your total of horses are " +horseFound+ ".");
     newTotal =  ( animals[0] * animalFood[0]) + (animals[1] * animalFood[1]) + (horseFound * animalFood[2] );
 }

//Result
 console.log("Since you miscounted how many " +anyMissed+ "s"+" you had, your new total spent is " + "$" +newTotal+ ".");

 /*
 I typed in 20 for animals[0], 13 for animals[1], and 3 for animals[2]. Then I typed in 1200 for animalFood[0], 900 for animalFood[1], and 1400 for animalFood[2]. My calculator told me I spent 39,900 on animal food, since I miscounted my cats my new total of cats are 21, and then my new total spent altogether is 41,100.
  */
















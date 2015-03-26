
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 9 Pizza
*/

 //alert("Pizza time!");

 //Figure out how much pizza costs per slice and cost per sq in
 //Prompt the user for the radius of the pizza

 var pizzaRadius = prompt("Welcome, Let's calculate the cost of your pizza! What is the radius of your pizza?");

 //Validate
 while(pizzaRadius==="" || isNaN(pizzaRadius))
 {
     //Re-prompt the user
     pizzaRadius = prompt("Please do not leave blank and only use numbers.\nWhat is the radius of your pizza?");
 }
     //Prompt the user for cost of whole pizza

     do
     {
         var pizzaCost = prompt("How much does your pizza cost in total?\nPlease do not leave blank and only use numbers.");

     }while(pizzaCost==="" || isNaN(pizzaCost));

 //Prompt the user for how many slices are in their pizza

 do
 {
     var pizzaSlices = prompt("How many slices are in your pizza?\nReminder only use numbers and do not leave blank. ");

 }while(pizzaSlices==="" || isNaN(pizzaSlices));

 //Function call to Lord Function

 var results = lordFunction(pizzaRadius,pizzaCost,pizzaSlices);
 //Console log info to user
 console.log("Your pizza costs $ "+results[0]+" per sq inch or $ "+results[1]+" per slice.");

 //Create a function that will run all of the other functions
 function lordFunction(radius, cost, slices)
 {
     //Function will call the other three functions and then return the values
     //Call the area function and capture the answer
     var area = pizzaArea(radius);

     //Call the function for sqIn cost

     var areaCost = pizzaSqInCost(area,cost);

     //Call the function for price per slice

     var areaCost2 = pricePerSlice(slices,cost);

     //Return these answers to our main code

     return [areaCost, areaCost2];

 }

 //A function that calculates the area of the pizza
 function pizzaArea(r)
 {
     //area = r* r*Pi
     var area = r*r*Math.PI;
     return area;
 }

 //Function that calculates the price per sq in of pizza
 function pizzaSqInCost(area,price)
 {
     //Price / area
     var costPerSqIn = price/area;

     //We should round this number to 2 decimal places
     costPerSqIn = costPerSqIn.toFixed(2);

     return costPerSqIn;
 }

 //Function that calculates the price per slice
 function pricePerSlice(slices, price)
 {
    //price/slices
     var costPerSlice = price/slices;

     //round to 2 decimal
     costPerSlice = costPerSlice.toFixed(2);
     return costPerSlice;

 }



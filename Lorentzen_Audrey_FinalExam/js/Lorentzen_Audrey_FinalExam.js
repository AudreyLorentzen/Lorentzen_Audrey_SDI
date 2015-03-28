
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 3 Prompts
*/


 //Prompt the user for the cost of an item
 var itemCost = prompt("How much money did your Nixon watch cost?");

 //Validate that the user typed in a number OR didn't leave it blank
 //Validate using a while loop

 while(isNaN(itemCost) || itemCost==="")
 {

     //Re-prompt the user
     if (isNaN(itemCost))
     {
         itemCost= prompt("Please only type in numbers!\nEnter a number:");
     }

     else if (itemCost === "")
     {
         //The user left it blank
         itemCost = prompt("Please do not leave blank!\nPlease type in a number:");
     }
 }

 var discount = prompt("Please type in a discount percentage between 0-100: ");

 //Validate that the user typed in a number OR didn't leave it blank
 //Validate using a while loop

 while(isNaN(discount) || discount<0 || discount>100 || discount==="")
 {

     //Re-prompt the user
     if (isNaN(discount))
     {
         discount= prompt("Please only type in numbers!\nEnter a number:");
     }

     else if(discount<0 || discount>100)
     {
         //The user did not pick a number between 0-100
         discount = prompt("Please only pick a number between 0-100.\n Please try again.");
     }

     else if (discount === "")
     {
         //The user left it blank
         discount = prompt("Please do not leave blank!\nPlease type in a number:");
     }
 }

 //Create a function that will calculate the discounted cost of a product
 function discountedCost(itemCost, discount)
 {
     //Calculate
     var equationIsDiscount = itemCost*(discount/100);
     var discountedPrice = itemCost -equationIsDiscount;
     return discountedPrice;

 }

 //Function call
 var basicDiscount = discountedCost(itemCost, discount);
 console.log("The final cost of an item that costs $"+itemCost+" with a discount of "+discount+"% is $"+basicDiscount+".");

 //Test values
 //I tested $50 for an item with a discount of 10% to get me $45.
 //Then I tested $54 for an item with a discount of 12% to get me $47.52.










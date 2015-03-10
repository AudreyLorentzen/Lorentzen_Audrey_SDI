
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 3 Prompts
*/

 //alert("Just testing.");

 //If your gpa is over 2.0 then you can graduate

 //Create a variable for gpa!!
 var gpa = 3.5;

 //Basic conditional
 if(gpa >2.0){
     console.log("You can graduate!");

 }else {
     console.log("Work harder, you can not graduate!");
 }

 // (condition to test) ? code to run if true : code to run if false;

 //Create a basic ternary function for out GPA
 (gpa >2.0) ? console.log("You can graduate!") : console.log("Work harder, you can not graduate!");

 //If a child is under 10, then they must read Green Eggs & Ham, otherwise they can read The Time Machine.

 //Create a variable for child age and for the book
 var age = 16;
 var book;

 //Use a ternary to define the book

 book = (age <10) ? "Green Eggs & Ham" : "The Time Machine";

 console.log("The kid should read " +book+".");


 //Value of book if basic conditional

 var bookBasic;

 if(age<10){
     bookBasic = "Green Eggs & Ham";
 }else {
     bookBasic = "The Time Machine";
 }
 console.log(bookBasic);





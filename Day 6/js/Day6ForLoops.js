
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 6 For Loops
*/

 //alert("Still Testing.");

 // for(initialization; condition; increment of change){}
 // We use i ALOT in loops - because it stands for iteration - time around

 for(var i = 0; i<20; i++)
 {
     console.log("The value of i is "+ i);

 }

 console.log(i);

 //Break in a loop

 for(var j = 0; j<5; j++)
 {
     //Conditional to test if we should break the loop
     //If the value of j is 3, then console.log out something different and stop the loop

     if(j===3)
     {
         //Stop the loop but first console.log out something
         console.log("3 is 3!!!");
         break;

     }

     console.log("The value of j is "+j);

 }

 //another way to write - (var j=5; j>0; j--)


//Specific cases for each value

 for(var k = 0; k<3; k++)
 {

     if(k===0)
     {
         console.log("The value is zero.");
     }
     else if(k===1)
     {
         console.log("The value is one.");
     }
     else if(k===2)
     {
         console.log("The value is two.");
     }

 }


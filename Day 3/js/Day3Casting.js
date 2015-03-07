
 /*
Audrey Lorentzen
Section 00
3-7-15
Day 3 Casting
*/

 alert("Just Testing.");

 //Casting variables means treating one datatype like another....if possible

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 //Number() - treats whatever is inside like a number is possible
 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //Cast numbers to be a text string
 //String() - treat whatever is inside as a text string
 var areaCode = 407;
 var prefix = 555;
 var lineNumber = 1234;
 var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
 console.log(phoneNumber);

 console.log("("+areaCode+")"+prefix+"-"+lineNumber);

 //Parsing Integers
 //parseInt() - looks through a text and returns an integer
 //Only the first number in the string is returned!
 //If the first character in the text string canNOt be converted into a number, then it returns Nan = Not a Number

 var a = parseInt("40 years old");
 console.log(a);

 var b = Number("40 years old");
 console.log(b);

 var c = parseInt("He was 40.");
 console.log(c);

//Prompts ONLY return text strings!!! VERY IMPORTANT

 var tshirtsOwned = prompt("How many tshirts do you currently own?");

 //Ask the user how many they bought
 var tshirtsBought = prompt("How many tshirts did you buy today?");

 //Calculate the total number of t-shirts

 var totalShirts = parseInt(tshirtsOwned) + Number(tshirtsBought);
 console.log("You currently own " + totalShirts+" shirts.");
 


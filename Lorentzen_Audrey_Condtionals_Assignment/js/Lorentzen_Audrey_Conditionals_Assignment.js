
 /*
Audrey Lorentzen
Section 00
3-7-15
Conditionals Assignment
*/

 //alert("Still Testing.");

 //Zodiac Signs
 //How old are you?
 //Depending on your age, it will either ask you one or the other
 //If age<=18, it will ask "a"
 //If age>=18, it will ask "b"
 //"a" - What element are you between air, fire, water, and earth?
 // "b" - What zodiac sign is your partner in crime?

 var userInput = prompt("How old are you?\nPlease enter a number:");
 console.log(userInput);
 var zodiacSign = prompt("What is your zodiac sign?\nPlease type in here:");
 zodiacSign = zodiacSign.toLowerCase();

 //Create a variables
 var tooYoung = 14;
 var oldEnough = 20;
 var a = "What element are you between air, fire, water, and earth?";
 var b = "What zodiac sign is your partner in crime?";

 //Create conditional
 if(tooYoung <=18) {
     console.log(a);
 }else if (oldEnough >=18){
     console.log(b);
 }

 var air =["Gemini","Libra","Aquarius"];
 var fire =["Aries","Leo","Sagittarius"];
 var water =["Cancer","Scorpio","Pisces"];
 var earth =["Taurus","Virgo","Capricorn"];

 //Create another conditional
 if(air){
     console.log("You are an air sign!")
 } else if(fire){
     console.log("You are a fire sign!")
 } else if(water){
     console.log("You are a water sign!")
 } else if(earth){
     console.log("You are an earth sign!");
 }












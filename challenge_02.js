/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

let name = prompt("Bitte ihr Name eingeben");
let alter = parseInt(prompt("Bitte ihr Alter eingeben"));


if (alter < 6)
{
    console.log(name + " trinkt Milch ");
}
    else if (alter <13)
    {
        console.log(name + " trinkt Saft ");
    }
    else if ( alter <18 )
    {
        console.log(name + " trinkt Cola ");

    }
   
else if (alter >17) 
{
   console.log(name + " trinkt wein ");
   
} 

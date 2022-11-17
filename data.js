const prompt = require("prompt-sync")();

function sayHello(nameOfPerson)
{
    console.log(`Hello ${nameOfPerson}, how are you today, good or awesome?`);
}

sayHello("Friend");

// I could call the parameter here also nameOfPerson, but I just wanted to
// show you that the variable does not need to have the same name as in the
// previous function - just give it a proper name

// Good or Awesome
// Ask a person in the predefined function if the person feels "good" or "awesome"

function askHowPersonIs(nameOfAnyPerson)
{
    console.log(`${nameOfAnyPerson}, how are you today, good or awesome?`);
}

askHowPersonIs("Harry");

// Check the answer
// Check the answer of a person. If the answer is neither "good" nor "awesome", console log that you do not understand the answer - else repeat the answer on the console

function getAnswerOfThePerson()
{
    let answer = prompt("How are you today, good or awesome?");
    if (answer === "good" || answer === "awesome") {
    // TODO: Get the answer of the person from the command line
    // HINT: We learned in the previous chapter how to get input
    // from the command line
    return answer + " - I like Your enthusiasm";
    } else {
        return answer + " - I do not understand the answer."
    }
}

let yourName = "";

sayHello(yourName);
askHowPersonIs(yourName);

let answerOfThePerson = getAnswerOfThePerson();
console.log(answerOfThePerson);

// TODO: Check the answer of a person
// If the answer is neither "good" nor "awesome"
// console log that you do not understand the 
// answer - else repeat the answer on the console

// The age question
// Write a function that asks a person for his age and returns it. Check the age and make different console logs for the ages smaller equal 5, bigger 5 and smaller equal 20, bigger 20 and smaller equal 40, and bigger 40 - e.g. if age is bigger 40 you could log: "Soon you will be in pension - great!"

function ageQuestion() 
{
    let ageAnswer = prompt("How old are You?");
    if (ageAnswer <= 5) {
        console.log("You are so young!");
    } else if (ageAnswer > 5 && ageAnswer <= 20)
    {
        console.log("This is Your best time!");
    } else if (ageAnswer > 20 && ageAnswer <= 40)
    {
        console.log("You are an adult. Take Your Time");
    } else if (ageAnswer > 40)
    {
        console.log("Soon you will be in pension - great!");
    }
};

ageQuestion();

// TODO: Write a function that asks a person for
// his age and returns it. Check the age and make
// different console logs for the ages smaller
// equal 5, bigger 5 and smaller equal 20, bigger
// 20 and smaller equal 40, and bigger 40 - e.g.
// if age is bigger 40 you could print: "Soon you
// will be in pension - great!"

// Further conversation
// Think about a question you would ask in a small talk conversation and let your program ask this question. For this purpose declare a function with a nice name. Return the answer of the user and react to it in a proper way.

function codingLevelQuestion() 
{
    let codingLevelAnswer = prompt("What is your coding level? From 1 - 100.");
    if (codingLevelAnswer <50 && codingLevelAnswer > -1) {
        console.log("Keep working hard");
    } else if (codingLevelAnswer >= 50 && codingLevelAnswer < 101)
    {
        console.log("Go on holiday!");
    } else if ( codingLevelAnswer >100 || codingLevelAnswer < 0) {
        console.log("Incorrect coding level");
    }
};

codingLevelQuestion();

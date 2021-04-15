//#### 1. Color Analyzer
//Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = `red`;

switch (color) {

    case `red`:
        console.log("the color of rage");
        break;
    case `blue`:
        console.log("the color of energy");
        break;
    case `green`:
        console.log("the color of nature");
        break;
    case `yellow`:
        console.log("the color of compassion");
        break;
    default:
        console.log("what is this color?");

}


//
//#### 2. Grading
//Create a switch statement that prints different comments depending on a grade.

let grade = `b`;

switch (grade) {
    case `a`:
        console.log("Great work!");
        break;
    case `b`:
        console.log("Good work, but theres things we could improve");
        break;
    case `c`:
        console.log("You passed but you could do better");
    case `d`:
        console.log("We need to talk after class");

}
//
//#### 3. Fruits
//Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
//

let fruit = `orange`;

switch (fruit) {
    case `orange`:
        console.log("Juicy, orange...sunkiss");
        break;
    case `apple`:
        console.log("forbidden and delicious");
        break;
    case `pineapple`:
        console.log("why do they also call this ananas?");
    case `banana`:
        console.log("peel off the skin");

}
//#### 4. Percentage Complete. 
//* If percentageComplete is below 30, print "Still a long way to go". 
//* If the percentageComplete is between 30 and 50, print "Slowly getting there". 
//* If percentageComplete is between 51 and 80, print "You can do it!". 
//* If percentageComplete is between 81 and 99, print "This is the last push!".
//* If percentageComplete is 100, print "You're there. Well done!". 

let percentageComplete = 25

if (percentageComplete < 30) { console.log("Still a long way to go"); } else if (percentageComplete >= 30 && percentageComplete <= 50) { console.log("Slowly getting there"); } else if (percentageComplete >= 51 && percentageComplete <= 80) { console.log("You can do it!"); } else if (percentageComplete >= 81 && percentageComplete <= 99) { console.log("This is the last push!"); } else if (percentageComplete === 100) { console.log("You're there. Well done!"); }


//
//#### 5. Differences
//* When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
//
// You should use switch statements in cases were you have a lot of possible outcomes but that can easily be compared using ===. If the operation is a bit more complex I'd use if statements.
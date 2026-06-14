"use strict"

alert("Quiz: General Knowledge\nAnswer 10 questions!");

let score = 0;
let wrong = "";

if (prompt("1. Capital of Ukraine?") == "Kyiv") {
    score++;
}
else {
    wrong += "1. Kyiv\n";
}

if (prompt("2. How much is 2+2?") == "4") {
    score++;
}
else {
    wrong += "2. 4\n";
}

if (prompt("3. The closest planet to the Sun?") == "Mercury") {
    score++;
}
else {
    wrong += "3. Mercury\n";
}

if (prompt("4. What color is the sky?") == "Blue") {
    score++;
}
else {
    wrong += "4. Blue\n";
}

if (prompt("5. How many days are in a week?") == "7") {
    score++;
}
else {
    wrong += "5. 7\n";
}

if (prompt("6. Who wrote Kobzar?") == "Shevchenko") {
    score++;
}
else {
    wrong += "6. Shevchenko\n";
}

if (prompt("7. What programming language works in browser?") == "JavaScript") {
    score++;
}
else {
    wrong += "7. JavaScript\n";
}

if (prompt("8. The biggest animal in the world?") == "Blue whale") {
    score++;
}
else {
    wrong += "8. Blue whale\n";
}

if (prompt("9. How many months are in a year?") == "12") {
    score++;
}
else {
    wrong += "9. 12\n";
}

if (prompt("10. The biggest ocean?") == "Pacific") {
    score++;
}
else {
    wrong += "10. Pacific\n";
}

alert(`Quiz finished!

Your score: ${score}/10

Wrong answers:
${wrong}`);
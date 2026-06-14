"use strict";

const stringStats = (str) => {
    let letters = 0;
    let digits = 0;
    let other = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch >= '0' && ch <= '9') digits++;
        else if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z')
        ) letters++;
        else other++;
    }
    console.log(`Letters: ${letters}`);
    console.log(`Digits: ${digits}`);
    console.log(`Other: ${other}`);
};
const twoDigitToText = (num) => {

    const ones = [
        "", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ];
    const teens = [
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
    if (num < 10) return ones[num];
    if (num >= 10 && num < 20) return teens[num - 10];
    let t = Math.floor(num / 10);
    let o = num % 10;

    return tens[t] + (o !== 0 ? " " + ones[o] : "");
};
const swapCaseAndDigits = (str) => {

    let result = "";
    for (let ch of str) {
        if (ch >= 'a' && ch <= 'z') result += ch.toUpperCase();
        else if (ch >= 'A' && ch <= 'Z') result += ch.toLowerCase();
        else if (ch >= '0' && ch <= '9') result += "_";
        else result += ch;
    }
    return result;
};
const toCamelCase = (str) => {

    let result = "";
    let upperNext = false;

    for (let ch of str) {
        if (ch === '-') {
            upperNext = true;
        } else {
            if (upperNext) {
                result += ch.toUpperCase();
                upperNext = false;
            } else {
                result += ch;
            }
        }
    }

    return result;
};
const makeAbbreviation = (phrase) => {

    let result = "";
    for (let i = 0; i < phrase.length; i++) {
        if (i === 0) result += phrase[i].toUpperCase();
        if (phrase[i] === " ") {
            result += phrase[i + 1].toUpperCase();
        }
    }
    return result;
};
const joinStrings = (...strings) => {

    let result = "";
    for (let str of strings) {
        result += str;
    }
    return result;
};
const calculator = (expr) => {

    let num1 = "";
    let num2 = "";
    let op = "";

    for (let ch of expr) {
        if (ch >= '0' && ch <= '9') {
            if (op === "") num1 += ch;
            else num2 += ch;
        } else {
            op = ch;
        }
    }
    num1 = Number(num1);
    num2 = Number(num2);

    if (op === "+") return num1 + num2;
    if (op === "-") return num1 - num2;
    if (op === "*") return num1 * num2;
    if (op === "/") return num1 / num2;
};
const parseUrl = (url) => {

    let protocol = "";
    let domain = "";
    let path = "";

    let i = 0;
    while (url[i] !== ':') {
        protocol += url[i];
        i++;
    }
    i += 3;
    while (i < url.length && url[i] !== '/') {
        domain += url[i];
        i++;
    }
    while (i < url.length) {
        path += url[i];
        i++;
    }
    console.log("protocol:", protocol);
    console.log("domain:", domain);
    console.log("path:", path);
};
const customSplit = (str, sep) => {

    let result = "";
    let arr = [];

    for (let ch of str) {
        if (ch === sep) {
            arr.push(result);
            result = "";
        } else {
            result += ch;
        }
    }
    arr.push(result);
    return arr;
};
const printTemplate = (template, ...args) => {

    let result = "";

    for (let i = 0; i < template.length; i++) {
        if (template[i] === "%") {
            i++;
            let index = Number(template[i]) - 1;
            result += args[index];
        } else {
            result += template[i];
        }
    }

    console.log(result);
};
console.log("=== TEST ===");

stringStats("Hello123!!");

console.log(twoDigitToText(35));

console.log(swapCaseAndDigits("AbC123"));

console.log(toCamelCase("background-color"));

console.log(makeAbbreviation("cascading style sheets"));

console.log(joinStrings("Hi", " ", "bro"));

console.log(calculator("12+34"));

parseUrl("https://itstep.org/ua/about");

console.log(customSplit("10/08/2020", "/"));

printTemplate("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
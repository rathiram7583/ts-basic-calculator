//BASIC CALCULATOR
//Additon 
var addition = function (a, b) {
    var sum = (a + b);
    console.log("The sum of two number is:" + sum);
};
addition(3, 4);
//SUBTRACTION
var subtraction = function (a, b) {
    if (a > b) {
        var difference = (a - b);
    }
    else {
        var difference = (b - a);
    }
    console.log("The difference between two number is:" + difference);
};
subtraction(10, 50);
//multiplication
var multiply = function (a, b) {
    var multiply = (a * b);
    console.log("The Product of two number is:" + multiply);
};
multiply(14, 4);
//Division
var divide = function (a, b) {
    if (a > b) {
        var divide = (a / b);
    }
    else {
        var divide = (b / a);
    }
    console.log("The division of two number is:" + divide);
};
divide(12, 48);

"use strict";
let firstNumber, secondNumber, operator;
let inputs = document.querySelectorAll(".input");
let screen = document.querySelector(".screen");
let answer = document.querySelector(".answer");
let reset =  document.querySelector(".reset");
let backspace = document.querySelector(".backspace");

inputs.forEach(element => {
    element.addEventListener('click', () => {

        if (isNaN(firstNumber)){
            screen.textContent = '0';
        }

        if (screen.textContent === '0' && isFinite(element.textContent)) {
            screen.textContent = element.textContent;

            firstNumber = +screen.textContent;
        }
        else if(isFinite(element.textContent) && isFinite(screen.textContent) && (operator === undefined))
        {
            
            screen.textContent = screen.textContent + element.textContent;

            firstNumber = +screen.textContent;
        }
        else if(isNaN(element.textContent) && isFinite(firstNumber))
        {
            operator = element.textContent;
        }
        else if(operator === '%' && isFinite(firstNumber))
        {
            screen.textContent = firstNumber;
        }
        else if (isFinite(firstNumber) && (operator !== undefined) && isFinite(element.textContent) && isNaN(secondNumber))
        {
            screen.textContent = element.textContent;

            secondNumber = +screen.textContent;
        }
        else if(isFinite(firstNumber) && (operator !== undefined) && isFinite(element.textContent) && isFinite(secondNumber))
        {
            screen.textContent = screen.textContent + element.textContent;

            secondNumber = +screen.textContent;
        }
    })
});


answer.addEventListener('click', () => {
    screen.textContent = operate(operator, firstNumber, secondNumber);
    resetNumber();
});

reset.addEventListener('click', () => {
    screen.textContent = 0;
    resetNumber();
})

backspace.addEventListener('click', () => {
    if (+screen.textContent < 10 && +screen.textContent > -10){
        screen.textContent = '0';
    }
    else if (operator === undefined) {
       removeLastCharacter();
    }
    else if (operator !== undefined && isFinite(secondNumber)) {
        removeLastCharacter();
    }
})

function removeLastCharacter() {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
}

function percentage(firstNumber){
    return firstNumber / 100;
}

function resetNumber(){
    firstNumber = undefined, secondNumber = undefined, operator = undefined;
}

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    let result;

    switch (operator) {
        case '+' : result = add(firstNumber, secondNumber);
            break;
        case '-' : result = subtract(firstNumber, secondNumber);
            break;
        case '*' : result = multiply(firstNumber, secondNumber);
            break;
        case '/' : result = divide(firstNumber, secondNumber);
            break;
        case '%' : result = percentage(firstNumber);
            break;
    }

    if ((result - Math.trunc(result)) > 0) {
        result = +(result.toPrecision(10));
    }

    return result ?? "error" ;
}
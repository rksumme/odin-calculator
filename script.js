function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function minus(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (parseFloat(b) === 0) {
        result = "Nice try, pal";
    } else {
        result = parseFloat(a) / parseFloat(b);
    }
    return result;
}

function mod(a, b) {
    return parseFloat(a) % parseFloat(b);
}

function clear() {
    num1 = null;
    operator = null;
    num2 = null;
    result = null;
    waitingNum2 = false;
    equation = null;
}

function calculate(value1, value2) {
    switch(operator) {
        case "+":
            result = add(value1, value2);
            display.textContent = result;
            clear();
            break;
        case "-":
            result = minus(value1, value2);
            display.textContent = result;
            clear();
            break;
        case "x":
            result = multiply(value1, value2);
            display.textContent = result;
            clear();
            break;
        case "/":
            result = divide(value1, value2);
            display.textContent = result;
            clear();
            break;
        case "%":
            result = mod(value1, value2);
            display.textContent = result;
            clear();
            break;
    }
}

let num1 = null;
let waitingOperator = false;
let operator = null;
let num2 = null;
let result = null;
let waitingNum2 = false;
let equation = null;

let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");
let calculations = document.querySelector("#calculations");


buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (button.classList.contains("num") || button.classList.contains("decimal")) {
            if (!waitingNum2) {
                if (num1 === null) {
                    num1 = button.value;
                    equation = button.value;
                    display.textContent = num1;
                    calculations.textContent = equation;
                    console.log(num1);
                } else if (num1.length <= 8){
                    num1 += button.value;
                    equation += button.value;
                    parseFloat(num1);
                    display.textContent = num1;
                    calculations.textContent = num1;
                } else {
                    num1 = num1;
                }
                
            } else {
                if (num2 === null) {
                    num2 = button.value;
                    equation = equation + " " + button.value;
                    display.textContent = num2;
                    calculations.textContent = equation;
                    console.log(num2);
                } else if (num2.length <= 8) {
                    num2 += button.value;
                    equation += button.value;
                    parseFloat(num2);
                    display.textContent = num2;
                    calculations.textContent = equation;
                } else {
                    num2 = num2;
                }
            } 
            
        } else if (button.classList.contains("operator")) {
            operator = button.value;
            equation = equation + " " + button.value;
            waitingNum2 = true;
            display.textContent = operator;
            calculations.textContent = equation;
        } else if (button.classList.contains("equal")) {
            if (num1 != null && num2 != null) {
                calculations.textContent = equation + " " + "=";
                calculate(num1, num2);
                console.log(result);
            } else {
                display.textContent = "ERROR";
                clear();
            };
        } else if (button.classList.contains("clear")) {
            clear();
            display.textContent = "";
            calculations.textContent = "";
        }
    });
})


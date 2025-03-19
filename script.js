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
    return parseFloat(a) / parseFloat(b);
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
            result = multiply(value1, value2);
            display.textContent = result;
            clear();
            break;
    }
}

let num1 = null;
let operator = null;
let num2 = null;
let result = null;
let waitingNum2 = false;

let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");


buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (button.classList.contains("num")) {
            if (!waitingNum2) {
                num1 = button.value;
                display.textContent = num1;
                console.log(num1);
            } else {
                num2 = button.value;
                display.textContent = num2;
                console.log(num2);
            } 
        } else if (button.classList.contains("operator")) {
            operator = button.value;
            waitingNum2 = true;
            display.textContent = operator;
        } else if (button.classList.contains("equal")) {
            if (num1 != null && num2 != null) {
                calculate(num1, num2);
                console.log(result);
            } else {
                display.textContent = "ERROR";
                clear();
            };
        }
    });
})


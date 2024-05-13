function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Ошибка! Деление на ноль.";
    }
    return x / y;
}


function power(x, y){
    return Math.pow(x, y);
}


function calculate() {
    const operation = document.getElementById("operation").value;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

switch (operation) {
    case "+":
        result = add(num1, num2);
        break;
    case "-":
        result = subtract(num1, num2);
        break;
    case "*":
        result = multiply(num1, num2);
        break;
    case "/":
        result = divide(num1, num2);
        break;
    case "^":
        result = power(num1, num2);
        break;
    default:
        result = "Ошибка! Неправильная операция.";
 }


 document.getElementById("result").innerText = `Результат: ${num1} ${operation} ${num2} = ${result}`;
}

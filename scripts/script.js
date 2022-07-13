const display = document.getElementById("display")
const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     // and for each one we add a 'click' listener
//     button.addEventListener('click', () => {
//         display.textContent = button.value;
//     });
// });


function addNumber(num1, num2){
    return num1 + num2;
}

function subtractNumber(num1, num2){
    return num1 - num2;
}

function multiplyNumber(num1, num2){
    return num1 * num2;
}

function divideNumber(num1, num2){
    if (num2 === 0){
        return "Can't divide by Zero"
    }
    else{
        return num1 / num2;
    }
}

function operate(){
    let firstNumber = parseInt(prompt("Enter a number: "))
    let secondNumber = parseInt(prompt("Enter another number: "))
    let operator = prompt("Enter an operator: ")
    switch (operator) {
        case "+":
            addNumber(firstNumber, secondNumber);
            break;
        case "+":
            subtractNumber(firstNumber, secondNumber);
            break;
        case "/":
            divideNumber(firstNumber, secondNumber);
            break;
        case "*":
            multiplyNumber(firstNumber, secondNumber);
            break;
        default:
            text = "No value found";
    }
}
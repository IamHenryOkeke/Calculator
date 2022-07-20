// Get needed variables
let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("buttons"))

let firstNumber;

let secondNumber;

let operator;

buttons.map( button => {
    button.addEventListener("click", function(e){
        if ((e.target.innerText === 'AC')){
            display.innerText = ""
        }
        else if (e.target.innerText === "Del"){
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1)
            }
        }
        else{
            if (e.target.innerText === "="){
                let splitNum;
                let result;
                let expression = display.innerText
                if (expression.includes("+")){
                    splitNum = expression.split("+");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "+"
                    result = operate(firstNumber,secondNumber,operator)
                    display.innerText = result
                }
                else if (expression.includes("-")){
                    splitNum = expression.split("-");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "-"
                    result = operate(firstNumber,secondNumber,operator)
                    display.innerText = result
                }
                else if (expression.includes("/")){
                    splitNum = expression.split("/");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "/"
                    result = operate(firstNumber,secondNumber,operator)
                    display.innerText = result
                }
                else if (expression.includes("*")){
                    splitNum = expression.split("*");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "*"
                    result = operate(firstNumber,secondNumber,operator)
                    display.innerText = result
                }
            }else{
                display.innerText += e.target.innerText;
            }
        }
    })
})

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
        return "Math Error. Can't divide by Zero"
    }
    else{
        return num1 / num2;
    }
}

function operate(num1, num2, operator){
    switch (operator) {
        case "+":
            return addNumber(num1, num2);
        case "-":
            return subtractNumber(num1, num2);
        case "/":
            return divideNumber(num1, num2);
        case "*":
            return multiplyNumber(num1, num2);
        default:
            text = "No value found";
    }
}

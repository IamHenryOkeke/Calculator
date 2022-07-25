// Get needed variables
let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("buttons"))

// const { previousKeyType } = calculator-container.dataset

let firstNumber;

let secondNumber;

let operator;

buttons.map(button => {
    button.addEventListener("click", function(e){
        if ((e.target.innerText === 'AC')){
            display.innerText = "0"
        }
        else if (e.target.innerText === "Del"){
            display.innerText = display.innerText.slice(0, -1);
            if (display.innerText.length === 0){
                display.innerText = "0"
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
                    display.innerText = calculate(firstNumber,secondNumber,operator)
                }
                else if (expression.includes("-")){
                    splitNum = expression.split("-");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "-"
                    display.innerText = calculate(firstNumber,secondNumber,operator)
                }
                else if (expression.includes("/")){
                    splitNum = expression.split("/");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "/"
                    display.innerText = calculate(firstNumber,secondNumber,operator)
                }
                else if (expression.includes("x")){
                    splitNum = expression.split("x");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "x"
                    display.innerText = calculate(firstNumber,secondNumber,operator)
                }
                else if (expression.includes("!")){
                    splitNum = expression.split("!");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "!"
                    display.innerText = calculate(firstNumber,secondNumber,operator)
                }
                else if (expression.includes("^")){
                    splitNum = expression.split("^");
                    firstNumber = parseFloat(splitNum[0])
                    secondNumber = parseFloat(splitNum[1])
                    operator = "^"
                    display.innerText = calculate(firstNumber,secondNumber,operator)
                }
            }else{
                if (display.innerText === "0"){
                    display.innerText = e.target.innerText
                }else{
                    display.innerText += e.target.innerText;
                }
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

function power(a, b) {
	return a**b
};

function factorial(number) {
	if (number === 0 || number === 1){
    return 1;
  }
  else{
    let factorial = 1;
    for(let i = 1;i < (number + 1);i++){
      factorial *= i;
    }
    return factorial;
  }
};

function calculate(num1, num2, operator){
    switch (operator) {
        case "+":
            if (isNaN(addNumber(num1, num2)) === true){
                return "Math error"
            }else{
                return addNumber(num1, num2);
            }
            
        case "-":
            if (isNaN(subtractNumber(num1, num2)) === true){
                return "Math error"
            }else{
                return subtractNumber(num1, num2);
            }
        case "/":
            if (isNaN(divideNumber(num1, num2)) === true){
                return "Math error"
            }else{
                return divideNumber(num1, num2);
            }
        case "x":
            if (isNaN(multiplyNumber(num1, num2)) === true){
                return "Math error"
            }else{
                return multiplyNumber(num1, num2);
            }
        case "!":
            if (isNaN(factorial(num1)) === true){
                return "Math error"
            }else{
                return factorial(num1);
            }
        case "^":
            if (isNaN(power(num1, num2)) === true){
                return "Math error"
            }else{
                return power(num1, num2);
            }
        default:
            text = "No value found";
    }
}

// document.addEventListener('keydown', function(event){
//     if(event.which === 8){
//         display.innerText = display.innerText.slice(0, -1)
//     }
//     else{
//         if((event.which <= 57  && event.which >= 48) || (106 <= event.which <= 111)){
//             display.innerText += event.key;
//         }
//         if(event.which === 13){
//             let splitNum;
//                 let result;
//                 let expression = display.innerText
//                 if (expression.includes("+")){
//                     splitNum = expression.split("+");
//                     firstNumber = parseFloat(splitNum[0])
//                     secondNumber = parseFloat(splitNum[1])
//                     operator = "+"
//                     result = calculate(firstNumber,secondNumber,operator)
//                     display.innerText = result
//                 }
//                 else if (expression.includes("-")){
//                     splitNum = expression.split("-");
//                     firstNumber = parseFloat(splitNum[0])
//                     secondNumber = parseFloat(splitNum[1])
//                     operator = "-"
//                     result = calculate(firstNumber,secondNumber,operator)
//                     display.innerText = result
//                 }
//                 else if (expression.includes("/")){
//                     splitNum = expression.split("/");
//                     firstNumber = parseFloat(splitNum[0])
//                     secondNumber = parseFloat(splitNum[1])
//                     operator = "/"
//                     result = calculate(firstNumber,secondNumber,operator)
//                     display.innerText = result
//                 }
//                 else if (expression.includes("x")){
//                     splitNum = expression.split("x");
//                     firstNumber = parseFloat(splitNum[0])
//                     secondNumber = parseFloat(splitNum[1])
//                     operator = "x"
//                     result = calculate(firstNumber,secondNumber,operator)
//                     display.innerText = result
//                 }
//                 else if (expression.includes("!")){
//                     splitNum = expression.split("!");
//                     firstNumber = parseFloat(splitNum[0])
//                     secondNumber = parseFloat(splitNum[1])
//                     operator = "!"
//                     result = calculate(firstNumber,secondNumber,operator)
//                     display.innerText = result
//                 }
//                 else if (expression.includes("^")){
//                     splitNum = expression.split("^");
//                     firstNumber = parseFloat(splitNum[0])
//                     secondNumber = parseFloat(splitNum[1])
//                     operator = "^"
//                     result = calculate(firstNumber,secondNumber,operator)
//                     display.innerText = result
        
//                 }
//         }
//     }
// });
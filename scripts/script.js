// Get needed variables
let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("buttons"))

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
                display.innerText = eval(display.innerText);
            }
            else{
                if (display.innerText === "0"){
                    display.innerText = e.target.innerText
                }
                else{
                    display.innerText += e.target.innerText;
                }
            }
        }
    })
})
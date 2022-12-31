const screenDisplay = document.querySelector(".screen")
const buttons = document.querySelectorAll("button")
let calculation = []
let accumulativeCalculation
function calculate(button){
    const value = button.textContent
    if(value ==="CLEAR"){
        calculation = []
        screenDisplay.textContent = ". "
    }
    else if(value ==="="){
        screenDisplay.textContent = eval(accumulativeCalculation)
    }
    else{
    calculation.push(value)
    accumulativeCalculation = calculation.join("")
    screenDisplay.textContent = accumulativeCalculation
}
}
buttons.forEach(button => button.addEventListener("click", () => calculate(button)))
function image(){
    let x = document.querySelector("#hidden-div")
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}
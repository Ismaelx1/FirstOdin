let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

let result = document.getElementById('sum');

function add() {
    result.textContent = `The sum is :`
totaladd = num1 + num2;
result.textContent += totaladd
}
function subtract() {
    result.textContent = `The sum is :`
        totaladd = num1 - num2;
    result.textContent += totaladd
    }
    function divide() {
        result.textContent = `The sum is :`
        totaladd = num1 / num2;
        result.textContent += totaladd
        }
        function multiply() {
            result.textContent = `The sum is :`
            totaladd = num1 * num2;
            result.textContent += totaladd
            }
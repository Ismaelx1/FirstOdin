let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

let result = document.getElementById('sum');

function add() {
totaladd = num1 + num2;
result.textContent += totaladd
}
function subtract() {
    totaladd = num1 - num2;
    result.textContent += totaladd
    }
    function divide() {
        totaladd = num1 / num2;
        result.textContent += totaladd
        }
        function multiply() {
            totaladd = num1 * num2;
            result.textContent += totaladd
            }
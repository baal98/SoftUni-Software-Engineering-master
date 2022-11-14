function subtract() {
    let elementNum1 = document.getElementById('firstNumber');
    let elementNum2 = document.getElementById('secondNumber');
    let elementResult = document.getElementById('result');

    let num1 = Number(elementNum1.value);
    let num2 = Number(elementNum2.value);
    let result = num1 - num2;
    
    elementResult.textContent = result;
}
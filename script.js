function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(arr){
    if(arr.length === 0)  return 0;
    return arr.reduce((total,currentValue)=> total * currentValue, 1);

}

function divide(a,b){
    if(b===0){
        throw new Error("undefined")
    }
    return a/b;
}

let num1 ='';
let operator = '';
let num2 = '';

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply([a, b]);
        case '/':
            return divide(a, b);
        default:
            return 0;
    }
}


let currentValue = ''

function display(digit){
    currentValue += digit;
    document.getElementById('calculator-input').value = currentValue;

}

function onClick(op){
    if(num1 === ''){
        num1 = currentValue;
        operator = op;
        currentValue = '';

    }else{
        num2 = currentValue;
        let result = operate(operator,parseFloat(num1), parseFloat(num2));
        updateDisplay(result);
        num1 = result.toString()
        operator = op;
        currentValue = '';

    }
}

function equalClick(){
    num2 = currentValue;
    currentValue = '';
    let result = operate(operator,parseFloat(num1), parseFloat(num2));
    updateDisplay(result);
    num1 = '';
    num2 = '';
    operator = '';
    currentValue = result.toString()

}

function updateDisplay(value){
    document.getElementById('calculator-input').value = value;
}

document.querySelector('.zero').addEventListener('click', () => display('0'));
document.querySelector('.one').addEventListener('click', () => display('1'));
document.querySelector('.two').addEventListener('click', () => display('2'));
document.querySelector('.three').addEventListener('click', () => display('3'));
document.querySelector('.four').addEventListener('click', () => display('4'));
document.querySelector('.five').addEventListener('click', () => display('5'));
document.querySelector('.six').addEventListener('click', () => display('6'));
document.querySelector('.seven').addEventListener('click', () => display('7'));
document.querySelector('.eight').addEventListener('click', () => display('8'));
document.querySelector('.nine').addEventListener('click', () => display('9'));

document.querySelector('.add').addEventListener('click', () => onClick('+'));
document.querySelector('.subtract').addEventListener('click', () => onClick('-'));
document.querySelector('.multiply').addEventListener('click', () => onClick('*'));
document.querySelector('.delete').addEventListener('click', () => {
    currentValue = currentValue.slice(0, -1);
    updateDisplay(currentValue);
});
document.querySelector('.clear').addEventListener('click', () => {
    currentValue = '';
    num1 = '';
    num2 = '';
    operator = '';
    updateDisplay('');
});

document.querySelector('.equal').addEventListener('click', equalClick);

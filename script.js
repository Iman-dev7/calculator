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

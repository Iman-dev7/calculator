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
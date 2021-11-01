let Num1 = prompt('Enter number 1', '');
let Operator = prompt('Enter operation', '');
let Num2 = prompt('Enter number 2', '');

if (Operator === '+') {
    alert(sum(Num1, Num2));
} else if (Operator === '-') {
    alert(sub(Num1, Num2));
} else if (Operator === '*') {
    alert(multi(Num1, Num2));
} else if (Operator === '/') {
    alert(div(Num1, Num2));
} else if (typeof Num1 || typeof Num2 !== Number) {
    alert('Error!');
} else if (Operator !== '-' || '+' || '*' || '/') {
    alert('Unknown operator!');
}

function sum(Num1, Num2) {
    return +Num1 + +Num2;
}

function sub(Num1, Num2) {
    return +Num1 - +Num2;
}

function multi(Num1, Num2) {
    return +Num1 * +Num2;
}

function div(Num1, Num2) {
    return +Num1 / +Num2;
}
/*function calc(operator, operand1, operand2) {
    if (operator == 'add') {
        return (operand1 + operand2)
    } else if (operator == 'mult') {
        return (operand1 * operand2)
    } else if (operator == 'subtract') {
        return (operand1 - operand2)
    } else {
        return 'Error'
    }
}

console.log(calc('add',10,5))*/

/*function calc(operator, operand1, operand2) {
    switch (operator) {
        case 'add':
            return operand1 + operand2;
            break;
        case 'multi':
            return operand1 * operand2;
            break;
        case'subtract':
            return operand1 - operand2;
            break
        default:
            console.log('Error');
    }
}

console.log(calc('subtract',12,5))*/

/*let i = 1;
while (i < 20) {
    console.log(i);
    i++
}*/

/*function calc(operator, operand1, operand2) {
    if (operator == 'add') {
        return (operand1 + operand2)
    } else if (operator == 'mult') {
        return (operand1 * operand2)
    } else if (operator == 'subtract') {
        return (operand1 - operand2)
    } else {
        return 'Error'
    }
}

console.log(calc('add',10,5))*/

/*function calc(operand1, operand2) {
    return {
        add : operand1 + operand2,
        mult : operand1 * operand2,
        sub : operand1 - operand2,
    }
}

let magic = calc(8,5)

console.log(magic.sub);*/

function calc(operation, operand1, operand2) {
    const operations = {
        add : '+',
        mult : '*',
        sub : '-',
    }
    switch (operation) {
        case operations.add:
            return operand1 + operand2;
            break;
        case operations.mult:
            return operand1 * operand2;
            break;
        case operations.sub:
            return operand1 - operand2;
            break
        default:
            console.log('Error');
    }
}

console.log(calc('-', 8, 5))


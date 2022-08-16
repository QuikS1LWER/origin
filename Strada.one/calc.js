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

function calc(operator, operand1, operand2) {
    const operations = {
        add : '+',
        mult : '*',
        sub : '-',
    }
    switch (operator) {
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

console.log(calc('+',10,5))
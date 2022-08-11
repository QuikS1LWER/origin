function calc(operator, operand1, operand2) {
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

console.log(calc('add',10,5))
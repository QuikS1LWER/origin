function calc(num1, num2, operator) {    
    
    const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number');
    
    if (isNotValid) {
        return String ('Error!');
    }

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return String('Can`t divide by zero!')
            }
            return num1 / num2;
        default:
            return String('Unknown operator!');
    } 
}

console.log(calc(5, 2, '*'));
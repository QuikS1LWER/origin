function calc(num1, num2, operator) {    
    
    const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number');
    
    if (isNotValid) {
        return String ('Error!');
    }
    switch (operator) {
        case 'sum':
            return num1 + num2;
        case 'sub':
            return num1 - num2;
        case 'mult':
            return num1 * num2;
        case 'div':
            if (num2 === 0) {
                return String('Can`t divide by zero!')
            }
            return num1 / num2;
        default:
            return String('Unknown operator!');
    } 
}

console.log(calc(5, 2, 'sum'));
//test
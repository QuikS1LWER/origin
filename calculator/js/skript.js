function calc(num1, num2, operator) {
    switch (operator) {
        case '+':
            num1 + num2;
            break;
        case '-':
            num1 - num2;
            break;
        case '*':
            num1 * num2;
            break;
        case '/':
            num1 / num2;
            break;
        default:
            alert('Unknown operator!')
    }
    
}

console.log(calc(1, 2, '+'));
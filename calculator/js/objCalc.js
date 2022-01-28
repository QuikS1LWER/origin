function calc(num1, num2, operation) {

    const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number');

    if (isNotValid) {
        return String ('Error!');
    }

    let operations = {
        sum: num1 + num2,
        sub: num1 - num2,
        mult: num1 * num2,
        div: num1 / num2,
    }
    console.log(operations[operation]);
}

console.log(calc(5, 0, 'sum'));
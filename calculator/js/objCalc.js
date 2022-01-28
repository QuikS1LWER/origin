function calc(num1, num2, operation) {

    let operations = {
        sum: num1 + num2,
        sub: num1 - num2,
        mult: num1 * num2,
        div: num1 / num2,
    }

    const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number');

    if (isNotValid) {
        console.log('Error!');
        return;
    }

    if (operations[operation]) {
        console.log(operations[operation]);
    } else {
        console.log("Unknown operation!");
    }
}

calc(8, 6, 'mu lt')